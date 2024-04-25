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

const items = [
    {
        id: "enemy",
        label: "Ellenség?",
    },
];

const formSchema = z.object({
    name: z
        .string()
        .min(2, { message: "A név minimum 2 karakter hosszúságú legyen!" })
        .max(50, { message: "A név maximum 50 karakter hosszúságú lehet!" }),
    defence: z
        .number({
            required_error: "Kötelező!",
            invalid_type_error: "Csak számot adhatsz meg!",
        })
        .min(0, { message: "A védekezés nem lehet negatív!" })
        .max(3, { message: "A védekezés maximum 3 lehet!" }),
    strength: z
        .number({
            required_error: "Kötelező!",
            invalid_type_error: "Csak számot adhatsz meg!",
        })
        .min(0, { message: "Az erősség nem lehet negatív!" })
        .max(5, { message: "Az erősség maximum 5 lehet!" }),
    accuracy: z
        .number({
            required_error: "Kötelező!",
            invalid_type_error: "Csak számot adhatsz meg!",
        })
        .min(0, { message: "A pontosság nem lehet negatív!" })
        .max(5, { message: "A pontosság maximum 5 lehet!" }),
    magic: z
        .number({
            required_error: "Kötelező!",
            invalid_type_error: "Csak számot adhatsz meg!",
        })
        .min(0, { message: "A mágia nem lehet negatív!" })
        .max(5, { message: "A mágia maximum 5 lehet!" }),
    items: z.array(z.string()),
});

const CharacterEdit = ({ character, setCharacter }) => {
    const [serverResponse, setServerResponse] = useState("");
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: character.name,
            defence: character.defence,
            strength: character.strength,
            accuracy: character.accuracy,
            magic: character.magic,
            items: character.enemy ? ["enemy"] : [""],
        },
    });

    const onSubmit = async (values) => {
        values.enemy = values.items.includes("enemy") ? "1" : "0";
        delete values.items;

        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const updatedCharacter = {
            ...character,
            ...values,
        };

        try {
            const response = await axios.put(
                `/api/characters/update/${character.id}`,
                updatedCharacter,
            );
            setServerResponse(response.data);
        } catch (error) {
            setServerResponse(error.response.data.message);
        }
    };

    const handleCloseCard = () => {
        setCharacter(null);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between">
                    <p>Karakter szerkesztés</p>
                    <p
                        className="cursor-pointer"
                        onClick={() => handleCloseCard()}
                    >
                        ❌
                    </p>
                </CardTitle>
                <CardDescription>Add meg a karakter adatait</CardDescription>
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
                                    <FormLabel>Karakter neve</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex gap-4 [&>*]:w-20">
                            <FormField
                                control={form.control}
                                name="defence"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Védekezés</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                {...form.register("defence", {
                                                    setValueAs: (value) =>
                                                        parseFloat(value) || 0,
                                                })}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="strength"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Erősség</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                {...form.register("strength", {
                                                    setValueAs: (value) =>
                                                        parseFloat(value) || 0,
                                                })}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="accuracy"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Pontosság</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                {...form.register("accuracy", {
                                                    setValueAs: (value) =>
                                                        parseFloat(value) || 0,
                                                })}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="magic"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mágia</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                {...form.register("magic", {
                                                    setValueAs: (value) =>
                                                        parseFloat(value) || 0,
                                                })}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        {items.map((item) => (
                            <FormField
                                key={item.id}
                                control={form.control}
                                name="items"
                                render={({ field }) => {
                                    return (
                                        <FormItem
                                            key={item.id}
                                            className="flex flex-row items-start space-x-3 space-y-0"
                                        >
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes(
                                                        item.id,
                                                    )}
                                                    onCheckedChange={(
                                                        checked,
                                                    ) => {
                                                        return checked
                                                            ? field.onChange([
                                                                  ...field.value,
                                                                  item.id,
                                                              ])
                                                            : field.onChange(
                                                                  field.value?.filter(
                                                                      (value) =>
                                                                          value !==
                                                                          item.id,
                                                                  ),
                                                              );
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                {item.label}
                                            </FormLabel>
                                        </FormItem>
                                    );
                                }}
                            />
                        ))}
                        <Button type="submit">Mentés</Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter>
                <p>{serverResponse}</p>
            </CardFooter>
        </Card>
    );
};

export default CharacterEdit;
