<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\CharacterController;
use App\Http\Controllers\Api\ContestController;
use App\Http\Controllers\Api\PlaceController;
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

Route::get('/users/isAdmin', function (Request $request) {
    $userService = new UserController();
    return $userService->isAdmin();
});

Route::get('/characters', function (Request $request) {
    $characterService = new CharacterController();
    return $characterService->getAllCharacters();
});

Route::get('/characters/user', function (Request $request) {
    $characterService = new CharacterController();
    return $characterService->getAllCharactersByUserId();
});

Route::get('/characters/{id}', function (string $id) {
    $characterService = new CharacterController();
    return $characterService->getCharacterById($id);
});

Route::delete('/characters/{id}', function (string $id) {
    $characterService = new CharacterController();
    return $characterService->deleteCharacter($id);
});

Route::post('/characters', function (Request $request) {
    $characterService = new CharacterController();
    return $characterService->createCharacter($request);
});

Route::get('/contests', function (Request $request) {
    $contestService = new ContestController();
    return $contestService->getAllContests();
});

Route::get('/places', function (Request $request) {
    $placeService = new PlaceController();
    return $placeService->getAllPlaces();
});

Route::delete('/places/{id}', function (string $id) {
    $placeService = new PlaceController();
    return $placeService->deletePlace($id);
});



