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

    public function getPlaceById($id)
    {
        $place = Place::find($id);
        return response()->json($place);
    }

    public function createPlace(Request $request)
    {
        $place = new Place();
        $place->name = $request->name;
        $place->image = $request->image;
        $place->save();
        return response()->json('Place created', 200);
    }

    public function updatePlace(Request $request, $id)
    {
        $place = Place::find($id);
        $place->name = $request->name;
        $place->image = $request->image;
        $place->save();
        return response()->json('Place updated', 200);
    }

    public function deletePlace($id)
    {
        $place = Place::find($id);
        $place->delete();
        return response()->json('Place deleted', 200);
    }
}

