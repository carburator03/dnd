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
        return response()->json('Helyszín sikeresen létrehozva!', 200);
    }

    public function updatePlace(Request $request, $id)
    {
        $place = Place::find($id);
        $place->name = $request->name;
        $place->image = $request->image;
        $place->save();
        return response()->json('Helyszín sikeresen frissítve!', 200);
    }

    public function deletePlace($id)
    {
        try {
            $place = Place::findOrFail($id);
            $place->delete();
            return response()->json('Helyszín sikeresen törölve!', 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}

