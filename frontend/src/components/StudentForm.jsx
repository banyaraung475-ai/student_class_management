import { useEffect, useState } from 'react';
import { createClass, getErrorMessage, getValidationErrors } from '../api/client';

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  class_id: '',
};

export default function StudentForm({
  student = null,
  classes,
  onClassesChange,
  onSubmit,
  onClose,
  saving,
}) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [newClassName, setNewClassName] = useState('');
  const [classError, setClassError] = useState('');
  const [creatingClass, setCreatingClass] = useState(false);

  useEffect(() => {
    if (student) {
      setForm({
        name: student.name || '',
        email: student.email || '',
        phone: student.phone || '',
        class_id: String(student.class_id || ''),
      });
    } else {
      setForm(emptyForm);
    }
    setErrors({});
  }, [student]);

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErrors({});

    try {
      await onSubmit({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        class_id: Number(form.class_id),
      });
    } catch (error) {
      const validation = getValidationErrors(error);
      if (Object.keys(validation).length > 0) {
        setErrors(validation);
        return;
      }
      setErrors({ form: [getErrorMessage(error)] });
    }
  }

  async function handleCreateClass() {
    setClassError('');
    setCreatingClass(true);

    try {
      const created = await createClass({ name: newClassName.trim() });
      onClassesChange([...(classes || []), created].sort((a, b) => a.name.localeCompare(b.name)));
      setForm((prev) => ({ ...prev, class_id: String(created.id) }));
      setNewClassName('');
    } catch (error) {
      const validation = getValidationErrors(error);
      setClassError(validation.name?.[0] || getErrorMessage(error));
    } finally {
      setCreatingClass(false);
    }
  }

  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-labelledby="student-form-title">
      <div className="modal">
        <h3 id="student-form-title">{student ? 'Edit student' : 'Add student'}</h3>
        <p>Name, email, and class are required. Phone is optional.</p>

        <form className="form-grid" onSubmit={handleSubmit}>
          {errors.form && <div className="field-error">{errors.form[0]}</div>}

          <div className={`field ${errors.name ? 'error' : ''}`}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={form.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="Student full name"
              autoFocus
            />
            {errors.name && <div className="field-error">{errors.name[0]}</div>}
          </div>

          <div className={`field ${errors.email ? 'error' : ''}`}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="student@school.edu"
            />
            {errors.email && <div className="field-error">{errors.email[0]}</div>}
          </div>

          <div className={`field ${errors.phone ? 'error' : ''}`}>
            <label htmlFor="phone">Phone (optional)</label>
            <input
              id="phone"
              value={form.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              placeholder="09xxxxxxxxx"
            />
            {errors.phone && <div className="field-error">{errors.phone[0]}</div>}
          </div>

          <div className={`field ${errors.class_id ? 'error' : ''}`}>
            <label htmlFor="class_id">Class</label>
            <select
              id="class_id"
              value={form.class_id}
              onChange={(e) => updateField('class_id', e.target.value)}
            >
              <option value="">Select a class</option>
              {classes.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            {errors.class_id && <div className="field-error">{errors.class_id[0]}</div>}

            <div className="class-create">
              <input
                value={newClassName}
                onChange={(e) => setNewClassName(e.target.value)}
                placeholder="Or create a new class name"
              />
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleCreateClass}
                disabled={creatingClass || !newClassName.trim()}
              >
                {creatingClass ? 'Adding…' : 'Add class'}
              </button>
            </div>
            {classError && <div className="field-error">{classError}</div>}
          </div>

          <div className="modal-actions">
            <button type="button" className="btn btn-ghost" onClick={onClose} disabled={saving}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? 'Saving…' : student ? 'Update student' : 'Create student'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
