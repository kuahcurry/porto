<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'type' => ['required', 'in:language,framework,tool'],
            'level' => ['required', 'integer', 'between:1,5'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
        ]);

        $skill = Skill::query()->create($data);

        return response()->json(['message' => 'Skill created', 'data' => $skill], 201);
    }

    public function update(Request $request, string $id): JsonResponse
    {
        $data = $request->validate([
            'name' => ['sometimes', 'string', 'max:255'],
            'type' => ['sometimes', 'in:language,framework,tool'],
            'level' => ['sometimes', 'integer', 'between:1,5'],
            'sort_order' => ['sometimes', 'integer', 'min:0'],
        ]);

        $skill = Skill::query()->findOrFail($id);
        $skill->update($data);

        return response()->json(['message' => 'Skill updated', 'data' => $skill]);
    }

    public function destroy(string $id): JsonResponse
    {
        $skill = Skill::query()->findOrFail($id);
        $skill->delete();

        return response()->json(['message' => 'Skill deleted']);
    }
}
