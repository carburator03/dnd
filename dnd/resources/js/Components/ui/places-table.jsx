import React from "react";
import {
    Table,
    TableCaption,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./table";
import { Button } from "./button";
import { Pencil, Trash2 } from "lucide-react";
import axios from "axios";
import { useState } from "react";

export function PlacesTable({ places, setPlace, setServerResponse }) {
    const handleEditButton = (place) => {
        place.method = "PUT";
        setPlace(place);
    };

    const handleDeleteButton = (place) => {
        axios
            .delete(`http://127.0.01:8000/api/places/delete/${place.id}`)
            .then((response) => {
                setServerResponse(response.data);
            })
            .catch((error) => {
                setServerResponse(error.message);
            });
    };
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Név</TableHead>
                    <TableHead className="w-[100px]">Kép</TableHead>
                    <TableHead className="w-[100px]">Műveletek</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {places.map((place) => {
                    return (
                        <TableRow key={place.id}>
                            <TableCell>{place.name}</TableCell>
                            <TableCell>
                                <img
                                    src={place.image}
                                    alt="place-image"
                                    className="w-80"
                                />
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col justify-center w-16 mx-auto gap-4">
                                    <Button
                                        onClick={() => {
                                            handleEditButton(place);
                                        }}
                                    >
                                        <Pencil />
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            handleDeleteButton(place);
                                        }}
                                    >
                                        <Trash2 />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}
