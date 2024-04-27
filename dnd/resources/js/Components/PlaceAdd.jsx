import React, { useState } from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const PlaceAdd = ({ setPlace }) => {
    const handleButtonClick = () => {
        setPlace({
            name: "",
            image: "",
            method: "POST",
        });
    };

    return (
        <Button onClick={handleButtonClick}>
            <Plus className="h-6 w-6 mx-2" />
            <p className="font-bold">Helyszín hozzáadása</p>
        </Button>
    );
};

export default PlaceAdd;
