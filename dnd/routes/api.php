<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/random', function (Request $request) {
    return response()->json([
        'random' => random_int(1, 100),
    ]);
});
