<?php

use App\Http\Controllers\Api\SchoolClassController;
use App\Http\Controllers\Api\StudentController;
use Illuminate\Support\Facades\Route;

Route::apiResource('students', StudentController::class);
Route::get('classes', [SchoolClassController::class, 'index']);
Route::post('classes', [SchoolClassController::class, 'store']);
