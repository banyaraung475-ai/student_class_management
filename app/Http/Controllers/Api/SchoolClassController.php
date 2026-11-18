<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSchoolClassRequest;
use App\Http\Resources\SchoolClassResource;
use App\Models\SchoolClass;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;

class SchoolClassController extends Controller
{
    /**
     * Display a listing of classes.
     */
    public function index(): AnonymousResourceCollection
    {
        $classes = SchoolClass::query()
            ->orderBy('name')
            ->get();

        return SchoolClassResource::collection($classes);
    }

    /**
     * Store a newly created class.
     */
    public function store(StoreSchoolClassRequest $request): JsonResponse
    {
        $class = SchoolClass::query()->create($request->validated());

        return (new SchoolClassResource($class))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }
}
