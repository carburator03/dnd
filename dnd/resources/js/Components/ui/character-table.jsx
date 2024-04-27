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

export function CharacterTable({
    characters,
    user,
    setCharacter,
    setServerResponse,
}) {
    const handleEditButton = (character) => {
        character.method = "PUT";
        setCharacter(character);
    };

    const handleDeleteButton = (character) => {
        axios
            .delete(
                `http://127.0.0.1:8000/api/characters/delete/${character.id}`,
            )
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
                    <TableHead className="w-[100px]">Védekezés</TableHead>
                    <TableHead className="w-[100px]">Erősség</TableHead>
                    <TableHead className="w-[100px]">Pontosság</TableHead>
                    <TableHead className="w-[100px]">Mágia</TableHead>
                    <TableHead className="w-[100px]">Ellenség?</TableHead>
                    <TableHead className="w-[100px]">Műveletek</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {characters.map((character) => {
                    if (character.user_id === user.id) {
                        return (
                            <TableRow key={character.id}>
                                <TableCell>{character.name}</TableCell>
                                <TableCell>{character.defence}</TableCell>
                                <TableCell>{character.strength}</TableCell>
                                <TableCell>{character.accuracy}</TableCell>
                                <TableCell>{character.magic}</TableCell>
                                <TableCell>
                                    {character.enemy ? "Igen" : "Nem"}
                                </TableCell>
                                <TableCell className="font-bold">
                                    <Button
                                        onClick={() =>
                                            handleEditButton(character)
                                        }
                                    >
                                        <Pencil className="h-4 w-4 mx-2" />
                                        <p className="font-bold">Szerkesztés</p>
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            handleDeleteButton(character)
                                        }
                                        variant="destructive"
                                        className="mx-4"
                                    >
                                        <Trash2 className="h-4 w-4 mx-2" />
                                        <p className="font-bold">Törlés</p>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    }
                })}
            </TableBody>
        </Table>
    );
}
