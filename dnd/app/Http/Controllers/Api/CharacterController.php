<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Character;
use App\Models\Contest;
use Illuminate\Support\Facades\Auth;

class CharacterController extends Controller
{
    public function getAllCharacters()
    {
        $data = Character::all();
        return response()->json($data);
    }

    function getCharacterById($id) {
        $data = Character::find($id);
        return response()->json($data);
    }

    public function getAllCharactersByUserId() {
        $id = Auth::id() || null;
        if (!$id) {
            return response()->json('Unauthorized', 401);
        }
        $data = Character::where('user_id', $id)->get();
        return response()->json($data);
    }

    public function deleteCharacter($id) {
        $character = Character::find($id);
        if ($character->user_id !== Auth::id()) {
            return response()->json('Unauthorized', 401);
        }
        $character->delete();
        return response()->json('Character deleted', 200);
    }

    public function createCharacter(Request $request) {
        $character = new Character();
        $character->name = $request->name;
        $character->user_id = Auth::id();
        $character->enemy = $request->enemy;
        $character->defence = $request->defence;
        $character->strength = $request->strength;
        $character->accuracy = $request->accuracy;
        $character->magic = $request->magic;

        if ($character->defence + $character->strength + $character->accuracy + $character->magic > 20) {
            return response()->json('Stats cannot exceed 20', 400);
        }

        if ($character->defence < 0 || $character->strength < 0 || $character->accuracy < 0 || $character->magic < 0) {
            return response()->json('Stats cannot be negative', 400);
        }

        if ($character-> defence > 3) {
            return response()->json('Stat cannot exceed 3', 400);
        }

        $character->save();
        return response()->json($character);
    }

    public function updateCharacter(Request $request, $id) {
        $character = Character::find($id);
        // if ($character->user_id !== Auth::id()) {
        //     return response()->json('Unauthorized', 401);
        // }
        $character->name = $request->name;
        $character->enemy = $request->enemy;
        $character->defence = $request->defence;
        $character->strength = $request->strength;
        $character->accuracy = $request->accuracy;
        $character->magic = $request->magic;

        if ($character->defence + $character->strength + $character->accuracy + $character->magic > 20) {
            return response()->json('Stats cannot exceed 20', 400);
        }

        if ($character->defence < 0 || $character->strength < 0 || $character->accuracy < 0 || $character->magic < 0) {
            return response()->json('Stats cannot be negative', 400);
        }

        if ($character-> defence > 3) {
            return response()->json('Stat cannot exceed 3', 400);
        }

        $character->save();
        return response()->json('Character updated!', 200);
    }
}

