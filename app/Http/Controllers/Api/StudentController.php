<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use App\Http\Resources\StudentResource;
use App\Models\Student;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;

class StudentController extends Controller
{
    /**
     * Display a listing of students.
     */
    public function index(): AnonymousResourceCollection
    {
        $students = Student::query()
            ->with('schoolClass')
            ->latest()
            ->get();

        return StudentResource::collection($students);
    }

    /**
     * Store a newly created student.
     */
    public function store(StoreStudentRequest $request): JsonResponse
    {
        $student = Student::query()->create($request->validated());
        $student->load('schoolClass');

        return (new StudentResource($student))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    /**
     * Display the specified student.
     */
    public function show(Student $student): StudentResource
    {
        $student->load('schoolClass');

        return new StudentResource($student);
    }

    /**
     * Update the specified student.
     */
    public function update(UpdateStudentRequest $request, Student $student): StudentResource
    {
        $student->update($request->validated());
        $student->load('schoolClass');

        return new StudentResource($student);
    }

    /**
     * Remove the specified student.
     */
    public function destroy(Student $student): JsonResponse
    {
        $student->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
