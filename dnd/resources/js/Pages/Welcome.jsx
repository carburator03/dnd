import { Link, Head } from "@inertiajs/react";
import { MainNav } from "../Components/ui/main-nav";
import { Avatar } from "../Components/ui/avatar";

import { Label } from "../Components/ui/label";
import { useState, useEffect } from "react";
import { ScoreBoard } from "@/Components/ui/score-board";
import { ErrorBoundary } from "react-error-boundary";

const Welcome = ({ auth, laravelVersion, phpVersion }) => {
    const [totalCharacters, setTotalCharacters] = useState(0);
    const [totalContests, setTotalContests] = useState(0);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/characters")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setTotalCharacters(data.length);
            });
    }, [totalCharacters]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/contests")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setTotalContests(data.length);
            });
    }, [totalContests]);

    return (
        <div className="hidden flex-col md:flex justify-center items-center w-full">
            <div className="border-b w-full">
                <div className="flex h-16 items-center px-4">
                    <ErrorBoundary fallback={<span />}>
                        <MainNav className="mx-6" isUserLoggedIn={true} />
                    </ErrorBoundary>
                </div>
            </div>

            <div className="flex-1 space-y-4 p-8 pt-6 w-1/2">
                <div className="flex items-center justify-between space-y-2">
                    <ScoreBoard
                        className="w-full"
                        karakterek={totalCharacters}
                        merkozesek={totalContests}
                    />
                </div>
            </div>
        </div>
    );
};

export default Welcome;
