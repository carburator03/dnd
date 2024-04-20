import { Link, Head } from "@inertiajs/react";
import { MainNav } from "../Components/ui/main-nav";
import { Avatar } from "../Components/ui/avatar";
import { UserNav } from "../Components/ui/user-nav";
import { Label } from "../Components/ui/label";
import { useState, useEffect } from "react";

const Welcome = ({ auth, laravelVersion, phpVersion }) => {
    const [totalCharacters, setTotalCharacters] = useState(0);
    const [totalContests, setTotalContests] = useState(0);

    useEffect(() => {
        fetch("http://192.168.0.101:8000/api/characters")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setTotalCharacters(data.length);
            });
    });

    return (
        <div className="hidden flex-col md:flex">
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <MainNav className="mx-6" />
                    <div className="ml-auto flex items-center space-x-4">
                        <UserNav />
                    </div>
                </div>
            </div>

            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">
                        <Label>Statistics</Label>
                    </h2>
                    <div className="flex items-center space-x-2">
                        <Label>Total Characters: {totalCharacters}</Label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
