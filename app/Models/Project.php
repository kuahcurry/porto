<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasUuids;

    public $incrementing = false;

    protected $keyType = 'string';

    protected $fillable = [
        'title',
        'slug',
        'description',
        'tech_stack',
        'repo_url',
        'live_url',
        'image_url',
        'started_at',
        'completed_at',
        'featured',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'tech_stack' => 'array',
            'started_at' => 'date',
            'completed_at' => 'date',
            'featured' => 'boolean',
        ];
    }
}
