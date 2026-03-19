<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureGithubUsername
{
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();
        $allowed = (string) config('services.github.allowed_username');

        if (! $user || ! isset($user->github_username)) {
            abort(403, 'Forbidden.');
        }

        if (strtolower((string) $user->github_username) !== strtolower($allowed)) {
            abort(403, 'Forbidden.');
        }

        return $next($request);
    }
}
