<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class ProjectController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'tech_stack' => ['required', 'array', 'min:1'],
            'repo_url' => ['nullable', 'url'],
            'live_url' => ['nullable', 'url'],
            'image_url' => ['nullable', 'url'],
            'started_at' => ['nullable', 'date'],
            'completed_at' => ['nullable', 'date', 'after_or_equal:started_at'],
            'featured' => ['nullable', 'boolean'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
        ]);

        $data['slug'] = $this->generateUniqueSlug($data['title']);

        $project = Project::query()->create($data);

        return response()->json(['message' => 'Project created', 'data' => $project], 201);
    }

    public function update(Request $request, string $id): JsonResponse
    {
        $project = Project::query()->findOrFail($id);

        $data = $request->validate([
            'title' => ['sometimes', 'string', 'max:255'],
            'description' => ['sometimes', 'string'],
            'tech_stack' => ['sometimes', 'array', 'min:1'],
            'repo_url' => ['sometimes', 'nullable', 'url'],
            'live_url' => ['sometimes', 'nullable', 'url'],
            'image_url' => ['sometimes', 'nullable', 'url'],
            'started_at' => ['sometimes', 'nullable', 'date'],
            'completed_at' => ['sometimes', 'nullable', 'date', 'after_or_equal:started_at'],
            'featured' => ['sometimes', 'boolean'],
            'sort_order' => ['sometimes', 'integer', 'min:0'],
            'slug' => ['sometimes', 'string', Rule::unique('projects', 'slug')->ignore($project->id)],
        ]);

        if (isset($data['title']) && ! isset($data['slug'])) {
            $data['slug'] = $this->generateUniqueSlug($data['title'], $project->id);
        }

        $project->update($data);

        return response()->json(['message' => 'Project updated', 'data' => $project]);
    }

    public function destroy(string $id): JsonResponse
    {
        $project = Project::query()->findOrFail($id);
        $project->delete();

        return response()->json(['message' => 'Project deleted']);
    }

    private function generateUniqueSlug(string $title, ?string $ignoreId = null): string
    {
        $base = Str::slug($title);
        $slug = $base;
        $suffix = 1;

        while ($this->slugExists($slug, $ignoreId)) {
            $slug = $base.'-'.$suffix;
            $suffix++;
        }

        return $slug;
    }

    private function slugExists(string $slug, ?string $ignoreId = null): bool
    {
        $query = Project::query()->where('slug', $slug);

        if ($ignoreId) {
            $query->where('id', '!=', $ignoreId);
        }

        return $query->exists();
    }
}
