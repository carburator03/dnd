import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { boolean, set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import axios from "axios";
import { useState } from "react";
import { X } from "lucide-react";

const formSchema = z.object({
    name: z.string().nonempty(),
    image: z.string().url(),
});

const PlaceEdit = ({ place, setPlace, setServerResponse }) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: place.name,
            image: place.image,
        },
    });

    const onSubmit = async (values) => {
        const method = place.method;
        delete place.method;

        const updatedPlace = {
            ...place,
            ...values,
        };

        try {
            const response =
                method == "PUT"
                    ? await axios.put(
                          `/api/places/update/${place.id}`,
                          updatedPlace,
                      )
                    : await axios.post("/api/places/new", updatedPlace);
            setPlace(null);
            setServerResponse(response.data);
        } catch (error) {
            setServerResponse(error.message);
        }
    };

    const handleCloseCard = () => {
        setPlace(null);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between content-center">
                    <p>Helyszín szerkesztése</p>
                    <div
                        onClick={handleCloseCard}
                        className="cursor-pointer mx-6"
                    >
                        <X />
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Helyszín neve</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Kép URL</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Mentés</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default PlaceEdit;
