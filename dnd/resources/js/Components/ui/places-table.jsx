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

export function PlacesTable({ places }) {
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
                                            console.log("Edit button clicked");
                                        }}
                                    >
                                        <Pencil />
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            console.log(
                                                "Delete button clicked",
                                            );
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
