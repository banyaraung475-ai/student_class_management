<?php

namespace Database\Seeders;

use App\Models\SchoolClass;
use App\Models\Student;
use Illuminate\Database\Seeder;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $classes = SchoolClass::query()->get();

        if ($classes->isEmpty()) {
            return;
        }

        Student::factory()
            ->count(8)
            ->state(fn () => [
                'class_id' => $classes->random()->id,
            ])
            ->create();
    }
}
