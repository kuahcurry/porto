<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Experience;
use App\Models\OngoingProject;
use App\Models\Profile;
use App\Models\Project;
use App\Models\Skill;
use Illuminate\Http\JsonResponse;

class PublicPortfolioController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'message' => 'OK',
            'data' => [
                'profile' => Profile::query()->first(),
                'skills' => Skill::query()->orderBy('sort_order')->get(),
                'experience' => Experience::query()->orderBy('sort_order')->get(),
                'projects' => Project::query()->orderByDesc('featured')->orderBy('sort_order')->get(),
                'ongoing_projects' => OngoingProject::query()->orderBy('sort_order')->get(),
            ],
        ]);
    }

    public function profile(): JsonResponse
    {
        return response()->json([
            'message' => 'OK',
            'data' => Profile::query()->first(),
        ]);
    }

    public function skills(): JsonResponse
    {
        return response()->json([
            'message' => 'OK',
            'data' => Skill::query()->orderBy('type')->orderBy('sort_order')->get(),
        ]);
    }

    public function experience(): JsonResponse
    {
        return response()->json([
            'message' => 'OK',
            'data' => Experience::query()->orderBy('sort_order')->get(),
        ]);
    }

    public function projects(): JsonResponse
    {
        return response()->json([
            'message' => 'OK',
            'data' => Project::query()->orderByDesc('featured')->orderBy('sort_order')->get(),
        ]);
    }

    public function ongoingProjects(): JsonResponse
    {
        return response()->json([
            'message' => 'OK',
            'data' => OngoingProject::query()->orderBy('sort_order')->get(),
        ]);
    }
}
