<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function contests()
    {
    return $this->belongsToMany(Contest::class)->withPivot('hero_hp', 'enemy_hp')->withTimestamps();
    }
}
