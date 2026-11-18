import { useCallback, useEffect, useState } from 'react';
import {
  createStudent,
  deleteStudent,
  fetchClasses,
  fetchStudents,
  getErrorMessage,
  updateStudent,
} from './api/client';
import ConfirmDialog from './components/ConfirmDialog';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

export default function App() {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [studentToDelete, setStudentToDelete] = useState(null);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
    window.setTimeout(() => setToast(null), 2800);
  }, []);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError('');

    try {
      const [studentData, classData] = await Promise.all([fetchStudents(), fetchClasses()]);
      setStudents(studentData);
      setClasses(classData);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  function openCreate() {
    setEditingStudent(null);
    setFormOpen(true);
  }

  function openEdit(student) {
    setEditingStudent(student);
    setFormOpen(true);
  }

  function closeForm() {
    if (saving) {
      return;
    }
    setFormOpen(false);
    setEditingStudent(null);
  }

  async function handleSave(payload) {
    setSaving(true);

    try {
      if (editingStudent) {
        const updated = await updateStudent(editingStudent.id, payload);
        setStudents((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
        showToast('Student updated successfully.');
      } else {
        const created = await createStudent(payload);
        setStudents((prev) => [created, ...prev]);
        showToast('Student created successfully.');
      }
      setFormOpen(false);
      setEditingStudent(null);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!studentToDelete) {
      return;
    }

    setDeleting(true);

    try {
      await deleteStudent(studentToDelete.id);
      setStudents((prev) => prev.filter((item) => item.id !== studentToDelete.id));
      showToast('Student deleted.');
      setStudentToDelete(null);
    } catch (err) {
      showToast(getErrorMessage(err), 'error');
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            SC
          </span>
          Student Class Management
        </div>
        <p>
          Manage student records with class assignments. Create, update, and remove students through
          the Laravel REST API.
        </p>
      </header>

      <div className="toolbar">
        <h2>Students ({students.length})</h2>
        <div className="toolbar-actions">
          <button type="button" className="btn btn-secondary" onClick={loadData} disabled={loading}>
            Refresh
          </button>
          <button type="button" className="btn btn-primary" onClick={openCreate}>
            Add student
          </button>
        </div>
      </div>

      {error && <div className="error-banner">{error}</div>}

      <section className="panel">
        {loading ? (
          <div className="loading-state">
            <div className="spinner" aria-hidden="true" />
            Loading students…
          </div>
        ) : (
          <StudentList students={students} onEdit={openEdit} onDelete={setStudentToDelete} />
        )}
      </section>

      {formOpen && (
        <StudentForm
          student={editingStudent}
          classes={classes}
          onClassesChange={setClasses}
          onSubmit={handleSave}
          onClose={closeForm}
          saving={saving}
        />
      )}

      {studentToDelete && (
        <ConfirmDialog
          title="Delete student?"
          message={`Are you sure you want to delete ${studentToDelete.name}? This cannot be undone.`}
          loading={deleting}
          onConfirm={handleDelete}
          onCancel={() => !deleting && setStudentToDelete(null)}
        />
      )}

      {toast && <div className={`toast ${toast.type}`}>{toast.message}</div>}
    </div>
  );
}
