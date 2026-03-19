<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\AdminUser;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    public function redirectToGithub(): RedirectResponse
    {
        $frontendUrl = rtrim((string) config('app.frontend_url', env('FRONTEND_URL', '/')), '/');
        $clientId = (string) config('services.github.client_id');
        $clientSecret = (string) config('services.github.client_secret');

        if ($clientId === '' || $clientSecret === '') {
            return redirect()->to($frontendUrl.'/unauthorized?reason=oauth_not_configured');
        }

        return Socialite::driver('github')->redirect();
    }

    public function handleGithubCallback(Request $request): RedirectResponse
    {
        $frontendUrl = rtrim((string) config('app.frontend_url', env('FRONTEND_URL', '/')), '/');
        $allowedUsername = strtolower((string) config('services.github.allowed_username'));

        try {
            $githubUser = Socialite::driver('github')->user();
        } catch (\Throwable $e) {
            return redirect()->to($frontendUrl.'/unauthorized?reason=oauth_failed');
        }

        $githubUsername = strtolower((string) $githubUser->getNickname());

        if ($githubUsername !== $allowedUsername) {
            Auth::guard('admin')->logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();

            return redirect()->to($frontendUrl.'/unauthorized?reason=forbidden_user');
        }

        $admin = AdminUser::updateOrCreate(
            ['github_id' => (string) $githubUser->getId()],
            [
                'github_username' => (string) $githubUser->getNickname(),
                'name' => $githubUser->getName(),
                'avatar_url' => $githubUser->getAvatar(),
                'last_login_at' => now(),
            ]
        );

        Auth::guard('admin')->login($admin);
        $request->session()->regenerate();

        return redirect()->to($frontendUrl.'/admin');
    }

    public function me(Request $request): JsonResponse
    {
        $user = Auth::guard('admin')->user();

        return response()->json([
            'message' => 'OK',
            'data' => [
                'id' => $user->id,
                'github_username' => $user->github_username,
                'name' => $user->name,
                'avatar_url' => $user->avatar_url,
            ],
        ]);
    }

    public function logout(Request $request): JsonResponse
    {
        Auth::guard('admin')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'message' => 'Logged out',
        ]);
    }
}
