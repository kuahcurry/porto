<?php

use App\Http\Controllers\Api\V1\Admin\ExperienceController;
use App\Http\Controllers\Api\V1\Admin\OngoingProjectController;
use App\Http\Controllers\Api\V1\Admin\ProfileController;
use App\Http\Controllers\Api\V1\Admin\ProjectController;
use App\Http\Controllers\Api\V1\Admin\SkillController;
use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\PublicPortfolioController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function (): void {
    Route::middleware('web')->group(function (): void {
        Route::get('/auth/github/redirect', [AuthController::class, 'redirectToGithub']);
        Route::get('/auth/github/callback', [AuthController::class, 'handleGithubCallback']);
        Route::get('/auth/me', [AuthController::class, 'me'])->middleware('auth:admin');
        Route::post('/auth/logout', [AuthController::class, 'logout'])->middleware('auth:admin');
    });

    Route::prefix('public')->group(function (): void {
        Route::get('/portfolio', [PublicPortfolioController::class, 'index']);
        Route::get('/profile', [PublicPortfolioController::class, 'profile']);
        Route::get('/skills', [PublicPortfolioController::class, 'skills']);
        Route::get('/experience', [PublicPortfolioController::class, 'experience']);
        Route::get('/projects', [PublicPortfolioController::class, 'projects']);
        Route::get('/ongoing-projects', [PublicPortfolioController::class, 'ongoingProjects']);
    });

    Route::middleware(['web', 'auth:admin', 'ensure.github.username'])->prefix('admin')->group(function (): void {
        Route::put('/profile', [ProfileController::class, 'upsert']);

        Route::post('/skills', [SkillController::class, 'store']);
        Route::put('/skills/{id}', [SkillController::class, 'update']);
        Route::delete('/skills/{id}', [SkillController::class, 'destroy']);

        Route::post('/experience', [ExperienceController::class, 'store']);
        Route::put('/experience/{id}', [ExperienceController::class, 'update']);
        Route::delete('/experience/{id}', [ExperienceController::class, 'destroy']);

        Route::post('/projects', [ProjectController::class, 'store']);
        Route::put('/projects/{id}', [ProjectController::class, 'update']);
        Route::delete('/projects/{id}', [ProjectController::class, 'destroy']);

        Route::post('/ongoing-projects', [OngoingProjectController::class, 'store']);
        Route::put('/ongoing-projects/{id}', [OngoingProjectController::class, 'update']);
        Route::delete('/ongoing-projects/{id}', [OngoingProjectController::class, 'destroy']);
    });
});
