import React, { useState } from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const CharacterAdd = ({ setCharacter }) => {
    const handleButtonClick = () => {
        setCharacter({
            name: "",
            defence: 0,
            strength: 0,
            accuracy: 0,
            magic: 0,
            enemy: false,
            method: "POST",
        });
    };
    return (
        <>
            <Button onClick={handleButtonClick}>
                <Plus className="h-6 w-6 mx-2" />
                <p className="font-bold">Karakter hozzáadása</p>
            </Button>
        </>
    );
};

export default CharacterAdd;
