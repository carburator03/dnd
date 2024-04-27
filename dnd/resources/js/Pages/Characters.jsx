import React from "react";
import { MainNav } from "../Components/ui/main-nav";
import { CharacterTable } from "../Components/ui/character-table"; // Update the import path
import { useState, useEffect } from "react";
import CharacterEdit from "@/Components/CharacterEdit";
import CharacterAdd from "@/Components/CharacterAdd";
import { ErrorBoundary } from "react-error-boundary";

const Characters = ({ auth }) => {
    const [totalCharacters, setTotalCharacters] = useState([]);
    const [character, setCharacter] = useState(null);
    const [serverResponse, setServerResponse] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/characters")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setTotalCharacters(data);
            });
    }, []);

    return (
        <div className="hidden flex-col md:flex justify-center items-center w-full gap-4">
            <div className="border-b w-full">
                <div className="flex h-16 items-center px-4">
                <ErrorBoundary fallback={<span />}>
                        <MainNav
                            className="mx-6"
                            user={
                                auth.user !== null
                                    ? auth.user
                                    : { isLoggedIn: false, admin: 0 }
                            }
                        />
                    </ErrorBoundary>
                </div>
            </div>

            <h1 className="uppercase font-bold text-2xl ">Karakterek</h1>

            <CharacterTable
                characters={totalCharacters}
                user={auth.user}
                setCharacter={setCharacter}
                setServerResponse={setServerResponse}
            />
            {character && (
                <CharacterEdit
                    character={character}
                    setCharacter={setCharacter}
                    auth={auth}
                    setServerResponse={setServerResponse}
                />
            )}
            <CharacterAdd
                setCharacter={setCharacter}
                setServerResponse={setServerResponse}
            />
            <div>
                <p className="font-bold">{serverResponse}</p>
            </div>
        </div>
    );
};

export default Characters;
