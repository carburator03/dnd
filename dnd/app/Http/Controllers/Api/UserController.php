<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

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
}

