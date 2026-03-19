<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('ongoing_projects', function (Blueprint $table): void {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->text('description');
            $table->json('tech_stack');
            $table->string('status_note')->nullable();
            $table->unsignedTinyInteger('progress_percent')->nullable();
            $table->date('target_date')->nullable();
            $table->text('repo_url')->nullable();
            $table->text('live_url')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();

            $table->index(['sort_order']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ongoing_projects');
    }
};
