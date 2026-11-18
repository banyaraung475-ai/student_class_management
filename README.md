<<<<<<< HEAD
<<<<<<< HEAD
# Student Class Management

Laravel REST API + React frontend for managing students and their class assignments.

## Stack

- **Backend:** Laravel 13, MySQL
- **Frontend:** React (Vite)
- **Validation:** Form requests with API error responses

## Features

- Full student CRUD via REST API
- Display student name, email, phone, and class
- Required field validation with API error messages in the UI
- Loading states and delete confirmation dialog
- Create classes from the student form
- Responsive modern UI

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/students` | List students |
| `POST` | `/api/students` | Create student |
| `GET` | `/api/students/{id}` | Show student |
| `PUT` | `/api/students/{id}` | Update student |
| `DELETE` | `/api/students/{id}` | Delete student |
| `GET` | `/api/classes` | List classes |
| `POST` | `/api/classes` | Create class |

### Validation rules

- **Class name:** required, string, max 255
- **Student `class_id`:** required, must exist in `classes`
- **Student name:** required
- **Student email:** required, valid email, unique
- **Phone:** optional

## Database schema

### `classes`

- `id`, `name`, `timestamps`

### `students`

- `id`, `class_id`, `name`, `email`, `phone`, `timestamps`

## Prerequisites

- PHP 8.3+
- Composer
- Node.js 18+
- MySQL (XAMPP / MySQL 8)

## Backend setup

```bash
# 1. Install PHP dependencies
composer install

# 2. Environment
cp .env.example .env
php artisan key:generate

# 3. Configure MySQL in .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=student_class_management
DB_USERNAME=root
DB_PASSWORD=root

# 4. Create the database (MySQL)
# CREATE DATABASE student_class_management;

# 5. Migrate and seed sample data
php artisan migrate --seed

# 6. Start the API server
php artisan serve
```

API base URL: `http://localhost:8000/api`

## Frontend setup

```bash
cd frontend
npm install
cp .env.example .env

# Ensure API URL matches the Laravel server
# VITE_API_URL=http://localhost:8000/api

npm run dev
```

App URL: `http://localhost:5173`

## Running tests

```bash
php artisan test --compact
```

## Project structure

```
├── app/Http/Controllers/Api/   # Student & class API controllers
├── app/Http/Requests/          # Validation
├── app/Http/Resources/         # API resources
├── app/Models/                 # Student, SchoolClass
├── database/migrations/        # Schema
├── database/seeders/           # Sample classes & students
├── routes/api.php              # API routes
├── frontend/                   # React SPA
└── screenshots/                # Application screenshots
```

## Screenshots

See the `screenshots/` folder for views of the completed application.

## Notes

- CORS is enabled for `/api/*` so the Vite frontend can call the Laravel API during local development.
- Default seed data includes sample classes and students for quick testing.
=======
# student_class_management
>>>>>>> 6fcbec6d9b7e6833cc371545d4a8ababe8458314
=======
# student_class_management
>>>>>>> 08fd274faad9aa7cbe1313b2ed2b80b0818d6e1c
