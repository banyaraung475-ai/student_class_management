<?php

namespace Database\Seeders;

use App\Models\SchoolClass;
use Illuminate\Database\Seeder;

class SchoolClassSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $classes = [
            'Grade 7A',
            'Grade 8A',
            'Grade 9 Science',
            'Grade 10 Arts',
            'Grade 11 Science',
            'Grade 12 Commerce',
        ];

        foreach ($classes as $name) {
            SchoolClass::query()->firstOrCreate(['name' => $name]);
        }
    }
}
