<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Place;

class PlaceController extends Controller
{
    public function getAllPlaces()
    {
        $data = Place::all();
        return response()->json($data);
    }

    public function deletePlace($id)
    {
        $place = Place::find($id);
        $place->delete();
        return response()->json('Place deleted');
    }
}

