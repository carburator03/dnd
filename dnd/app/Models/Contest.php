<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contest extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function place()
    {
        return $this->belongsTo(Place::class);
    }

    public function characters()
    {
        return $this->belongsToMany(Character::class)->withPivot('hero_hp', 'enemy_hp')->withTimestamps();
    }
}
