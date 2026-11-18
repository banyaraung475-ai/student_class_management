export default function StudentList({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="empty">
        No students yet. Add your first student to get started.
      </div>
    );
  }

  return (
    <>
      <div className="table-wrap desktop-only">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Class</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="student-name">{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone || '—'}</td>
                <td>
                  <span className="class-pill">{student.class?.name || '—'}</span>
                </td>
                <td>
                  <div className="row-actions">
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => onEdit(student)}>
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => onDelete(student)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mobile-card-list">
        {students.map((student) => (
          <article key={student.id} className="mobile-card">
            <h4>{student.name}</h4>
            <span className="class-pill">{student.class?.name || '—'}</span>
            <div className="mobile-meta">
              <span>{student.email}</span>
              <span>{student.phone || 'No phone'}</span>
            </div>
            <div className="row-actions">
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => onEdit(student)}>
                Edit
              </button>
              <button type="button" className="btn btn-danger btn-sm" onClick={() => onDelete(student)}>
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
