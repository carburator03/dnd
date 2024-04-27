import React from "react";
import { MainNav } from "../Components/ui/main-nav";
import { useState, useEffect } from "react";
import { PlacesTable } from "../Components/ui/places-table";
import { ErrorBoundary } from "react-error-boundary";
import PlaceAdd from "@/Components/PlaceAdd";
import PlaceEdit from "@/Components/PlaceEdit";

const Places = ({ auth }) => {
    const [totalPlaces, setTotalPlaces] = useState([]);
    const [place, setPlace] = useState(null);
    const [serverResponse, setServerResponse] = useState("");
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

            <h1 className="uppercase font-bold text-2xl ">Helyszínek</h1>

            <div>
                <p className="font-bold">{serverResponse}</p>
            </div>

            <PlaceAdd setPlace={setPlace} />

            {place && (
                <PlaceEdit
                    place={place}
                    setPlace={setPlace}
                    setServerResponse={setServerResponse}
                />
            )}

            <PlacesTable
                places={totalPlaces}
                setPlace={setPlace}
                setServerResponse={setServerResponse}
            />
        </div>
    );
};

export default Places;
