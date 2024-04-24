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

// ----- USERS ------
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

//-----------------------

// ---------- CHARACTERS ------------

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

Route::delete('/characters/delete/{id}', function (string $id) {
    $characterService = new CharacterController();
    return $characterService->deleteCharacter($id);
});

Route::post('/characters/new', function (Request $request) {
    $characterService = new CharacterController();
    return $characterService->createCharacter($request);
});

Route::put('/characters/update/{id}', function (Request $request, string $id) {
    $characterService = new CharacterController();
    return $characterService->updateCharacter($request, $id);
});

//---------------------

// --------- CONTESTS -----------

Route::get('/contests', function (Request $request) {
    $contestService = new ContestController();
    return $contestService->getAllContests();
});

// ----------------------------

// ---------- PLACES -----------

Route::get('/places', function (Request $request) {
    $placeService = new PlaceController();
    return $placeService->getAllPlaces();
});

Route::get('/places/{id}', function (string $id) {
    $placeService = new PlaceController();
    return $placeService->getPlaceById($id);
});

Route::post('/places/new', function (Request $request) {
    $placeService = new PlaceController();
    return $placeService->createPlace($request);
});

Route::put('/places/update/{id}', function (Request $request, string $id) {
    $placeService = new PlaceController();
    return $placeService->updatePlace($request, $id);
});

Route::delete('/places/{id}', function (string $id) {
    $placeService = new PlaceController();
    return $placeService->deletePlace($id);
});

// ---------------------------------



