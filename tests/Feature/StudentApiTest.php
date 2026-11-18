<?php

namespace Tests\Feature;

use App\Models\SchoolClass;
use App\Models\Student;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class StudentApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_lists_students(): void
    {
        $class = SchoolClass::factory()->create(['name' => 'Grade 8A']);
        Student::factory()->count(2)->create(['class_id' => $class->id]);

        $response = $this->getJson('/api/students');

        $response->assertOk()
            ->assertJsonCount(2, 'data')
            ->assertJsonStructure([
                'data' => [
                    '*' => ['id', 'class_id', 'name', 'email', 'phone', 'class'],
                ],
            ]);
    }

    public function test_it_creates_a_student(): void
    {
        $class = SchoolClass::factory()->create();

        $payload = [
            'class_id' => $class->id,
            'name' => 'Aung Min',
            'email' => 'aung@example.com',
            'phone' => '09123456789',
        ];

        $response = $this->postJson('/api/students', $payload);

        $response->assertCreated()
            ->assertJsonPath('data.name', 'Aung Min')
            ->assertJsonPath('data.email', 'aung@example.com')
            ->assertJsonPath('data.class.name', $class->name);

        $this->assertDatabaseHas('students', [
            'email' => 'aung@example.com',
            'class_id' => $class->id,
        ]);
    }

    public function test_it_validates_required_fields_when_creating(): void
    {
        $response = $this->postJson('/api/students', []);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors(['class_id', 'name', 'email']);
    }

    public function test_it_shows_a_student(): void
    {
        $student = Student::factory()->create();

        $response = $this->getJson("/api/students/{$student->id}");

        $response->assertOk()
            ->assertJsonPath('data.id', $student->id)
            ->assertJsonPath('data.email', $student->email);
    }

    public function test_it_updates_a_student(): void
    {
        $student = Student::factory()->create();
        $newClass = SchoolClass::factory()->create(['name' => 'Grade 10 Arts']);

        $response = $this->putJson("/api/students/{$student->id}", [
            'class_id' => $newClass->id,
            'name' => 'Updated Name',
            'email' => $student->email,
            'phone' => '09998887766',
        ]);

        $response->assertOk()
            ->assertJsonPath('data.name', 'Updated Name')
            ->assertJsonPath('data.class_id', $newClass->id);
    }

    public function test_it_deletes_a_student(): void
    {
        $student = Student::factory()->create();

        $response = $this->deleteJson("/api/students/{$student->id}");

        $response->assertNoContent();
        $this->assertDatabaseMissing('students', ['id' => $student->id]);
    }

    public function test_it_creates_a_class_with_validated_name(): void
    {
        $response = $this->postJson('/api/classes', ['name' => 'Grade 12 Science']);

        $response->assertCreated()
            ->assertJsonPath('data.name', 'Grade 12 Science');

        $this->assertDatabaseHas('classes', ['name' => 'Grade 12 Science']);
    }

    public function test_it_validates_class_name(): void
    {
        $response = $this->postJson('/api/classes', ['name' => '']);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors(['name']);
    }
}
