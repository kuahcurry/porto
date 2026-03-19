<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\OngoingProject;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OngoingProjectController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'tech_stack' => ['required', 'array', 'min:1'],
            'status_note' => ['nullable', 'string', 'max:255'],
            'progress_percent' => ['nullable', 'integer', 'between:0,100'],
            'target_date' => ['nullable', 'date'],
            'repo_url' => ['nullable', 'url'],
            'live_url' => ['nullable', 'url'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
        ]);

        $ongoingProject = OngoingProject::query()->create($data);

        return response()->json(['message' => 'Ongoing project created', 'data' => $ongoingProject], 201);
    }

    public function update(Request $request, string $id): JsonResponse
    {
        $data = $request->validate([
            'title' => ['sometimes', 'string', 'max:255'],
            'description' => ['sometimes', 'string'],
            'tech_stack' => ['sometimes', 'array', 'min:1'],
            'status_note' => ['sometimes', 'nullable', 'string', 'max:255'],
            'progress_percent' => ['sometimes', 'nullable', 'integer', 'between:0,100'],
            'target_date' => ['sometimes', 'nullable', 'date'],
            'repo_url' => ['sometimes', 'nullable', 'url'],
            'live_url' => ['sometimes', 'nullable', 'url'],
            'sort_order' => ['sometimes', 'integer', 'min:0'],
        ]);

        $ongoingProject = OngoingProject::query()->findOrFail($id);
        $ongoingProject->update($data);

        return response()->json(['message' => 'Ongoing project updated', 'data' => $ongoingProject]);
    }

    public function destroy(string $id): JsonResponse
    {
        $ongoingProject = OngoingProject::query()->findOrFail($id);
        $ongoingProject->delete();

        return response()->json(['message' => 'Ongoing project deleted']);
    }
}
