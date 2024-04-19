<?php

use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/users', function (Request $request) {
    $userService = new UserController();
    return $userService->getAllUsers();
});

Route::get('/users/{id}', function (string $id) {
    $userService = new UserController();
    return $userService->getUserById($id);
});




