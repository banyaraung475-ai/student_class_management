import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export function getValidationErrors(error) {
  if (error.response?.status === 422) {
    return error.response.data.errors || {};
  }

  return {};
}

export function getErrorMessage(error) {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }

  if (error.message) {
    return error.message;
  }

  return 'Something went wrong. Please try again.';
}

export async function fetchStudents() {
  const { data } = await api.get('/students');
  return data.data;
}

export async function createStudent(payload) {
  const { data } = await api.post('/students', payload);
  return data.data;
}

export async function updateStudent(id, payload) {
  const { data } = await api.put(`/students/${id}`, payload);
  return data.data;
}

export async function deleteStudent(id) {
  await api.delete(`/students/${id}`);
}

export async function fetchClasses() {
  const { data } = await api.get('/classes');
  return data.data;
}

export async function createClass(payload) {
  const { data } = await api.post('/classes', payload);
  return data.data;
}

export default api;
