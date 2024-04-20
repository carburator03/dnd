<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getAllUsers()
    {
        $data = User::all();
        return response()->json($data);
    }

    public function getUserById($id)
    {
        $data = User::find($id);
        return response()->json($data);
    }

    public function isAdmin()
    {
        $user = User::find(Auth::id());
        if ($user->is_admin) {
            return response()->json(true);
        } else {
            return response()->json(false);
        }
    }
}

