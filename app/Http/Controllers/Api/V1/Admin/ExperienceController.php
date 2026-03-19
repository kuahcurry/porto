<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Experience;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ExperienceController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'role_title' => ['required', 'string', 'max:255'],
            'company_name' => ['required', 'string', 'max:255'],
            'employment_type' => ['nullable', 'string', 'max:255'],
            'start_date' => ['required', 'date'],
            'end_date' => ['nullable', 'date', 'after_or_equal:start_date'],
            'is_current' => ['required', 'boolean'],
            'summary' => ['required', 'string'],
            'achievements' => ['nullable', 'array'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
        ]);

        $experience = Experience::query()->create($data);

        return response()->json(['message' => 'Experience created', 'data' => $experience], 201);
    }

    public function update(Request $request, string $id): JsonResponse
    {
        $data = $request->validate([
            'role_title' => ['sometimes', 'string', 'max:255'],
            'company_name' => ['sometimes', 'string', 'max:255'],
            'employment_type' => ['sometimes', 'nullable', 'string', 'max:255'],
            'start_date' => ['sometimes', 'date'],
            'end_date' => ['sometimes', 'nullable', 'date'],
            'is_current' => ['sometimes', 'boolean'],
            'summary' => ['sometimes', 'string'],
            'achievements' => ['sometimes', 'nullable', 'array'],
            'sort_order' => ['sometimes', 'integer', 'min:0'],
        ]);

        $experience = Experience::query()->findOrFail($id);
        $experience->update($data);

        return response()->json(['message' => 'Experience updated', 'data' => $experience]);
    }

    public function destroy(string $id): JsonResponse
    {
        $experience = Experience::query()->findOrFail($id);
        $experience->delete();

        return response()->json(['message' => 'Experience deleted']);
    }
}
