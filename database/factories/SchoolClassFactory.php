<?php

namespace Database\Factories;

use App\Models\SchoolClass;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<SchoolClass>
 */
class SchoolClassFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->unique()->randomElement([
                'Grade 7A',
                'Grade 7B',
                'Grade 8A',
                'Grade 8B',
                'Grade 9A',
                'Grade 9B',
                'Grade 10 Science',
                'Grade 10 Arts',
                'Grade 11 Science',
                'Grade 12 Arts',
            ]),
        ];
    }
}
