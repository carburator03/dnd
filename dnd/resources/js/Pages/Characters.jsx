import React from "react";
import { MainNav } from "../Components/ui/main-nav";
import { CharacterTable } from "../Components/ui/character-table"; // Update the import path
import { useState, useEffect } from "react";

const Characters = ({ auth }) => {
    const [totalCharacters, setTotalCharacters] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/characters")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setTotalCharacters(data);
            });
    }, [totalCharacters]);

    return (
        <div className="hidden flex-col md:flex justify-center items-center w-full">
            <div className="border-b w-full">
                <div className="flex h-16 items-center px-4">
                    <MainNav className="mx-6" />
                </div>
            </div>

            <div className="flex-1 space-y-4 p-8 pt-6 w-1/2">
                <div className="flex items-center justify-between space-y-2">
                    <h1>Karakterek</h1>
                </div>
            </div>

            <CharacterTable characters={totalCharacters} user={auth.user} />
        </div>
    );
};

export default Characters;
