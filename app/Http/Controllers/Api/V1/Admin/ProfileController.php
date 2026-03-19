<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function upsert(Request $request): JsonResponse
    {
        $data = $request->validate([
            'full_name' => ['required', 'string', 'max:255'],
            'headline' => ['required', 'string', 'max:255'],
            'short_bio' => ['required', 'string'],
            'long_bio' => ['nullable', 'string'],
            'photo_url' => ['nullable', 'url'],
            'email_public' => ['nullable', 'email'],
            'location' => ['nullable', 'string', 'max:255'],
            'website_url' => ['nullable', 'url'],
        ]);

        $profile = Profile::query()->first();

        if ($profile) {
            $profile->update($data);
        } else {
            $profile = Profile::query()->create($data);
        }

        return response()->json([
            'message' => 'Profile saved',
            'data' => $profile,
        ]);
    }
}
