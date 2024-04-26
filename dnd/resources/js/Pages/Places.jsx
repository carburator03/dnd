import React from "react";
import { MainNav } from "../Components/ui/main-nav";
import { useState, useEffect } from "react";
import { PlacesTable } from "../Components/ui/places-table";

const Places = () => {
    const [totalPlaces, setTotalPlaces] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/places")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setTotalPlaces(data);
            });
    }, []);

    return (
        <div className="hidden flex-col md:flex justify-center items-center w-full gap-4">
            <div className="border-b w-full">
                <div className="flex h-16 items-center px-4">
                    <MainNav className="mx-6" />
                </div>
            </div>

            <h1 className="uppercase font-bold text-2xl ">Helyszínek</h1>

            <PlacesTable places={totalPlaces} />
        </div>
    );
};

export default Places;
