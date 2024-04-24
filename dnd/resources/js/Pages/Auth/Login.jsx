"use client"
import { useEffect } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../Components/ui/card";
import { Head, Link, useForm } from "@inertiajs/react";
import { Label } from "../../Components/ui/label";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <form onSubmit={submit}>
        <div className="flex justify-center items-center h-screen">
            <Card className="my-8">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">
                       Bejelentkezés
                    </CardTitle>
                    <CardDescription>
                        A bejelentkezéshez kérlek add meg az email címed és a jelszavad.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="janos@freemail.com"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Jelszó</Label>
                        <Input id="password" type="password" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Create account</Button>
                </CardFooter>
            </Card>
        </div>
        </form>
    );

    // return (
    //     <GuestLayout>
    //         <Head title="Log in" />

    //         {status && (
    //             <div className="mb-4 font-medium text-sm text-green-600">
    //                 {status}
    //             </div>
    //         )}

    //         <form onSubmit={submit}>
    //             <div>
    //                 <InputLabel htmlFor="email" value="Anyad" />

    //                 <TextInput
    //                     id="email"
    //                     type="email"
    //                     name="email"
    //                     value={data.email}
    //                     className="mt-1 block w-full"
    //                     autoComplete="username"
    //                     isFocused={true}
    //                     onChange={(e) => setData("email", e.target.value)}
    //                 />

    //                 <InputError message={errors.email} className="mt-2" />
    //             </div>

    //             <div className="mt-4">
    //                 <InputLabel htmlFor="password" value="Password" />

    //                 <TextInput
    //                     id="password"
    //                     type="password"
    //                     name="password"
    //                     value={data.password}
    //                     className="mt-1 block w-full"
    //                     autoComplete="current-password"
    //                     onChange={(e) => setData("password", e.target.value)}
    //                 />

    //                 <InputError message={errors.password} className="mt-2" />
    //             </div>
    //             <p>XXXXXXXXXXXXXXXXXXXXX</p>

    //             <div className="block mt-4">
    //                 <label className="flex items-center">
    //                     <Checkbox
    //                         name="remember"
    //                         checked={data.remember}
    //                         onChange={(e) =>
    //                             setData("remember", e.target.checked)
    //                         }
    //                     />
    //                     <span className="ms-2 text-sm text-gray-600">
    //                         Remember me
    //                     </span>
    //                 </label>
    //             </div>

    //             <div className="flex items-center justify-end mt-4">
    //                 {canResetPassword && (
    //                     <Link
    //                         href={route("password.request")}
    //                         className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //                     >
    //                         Forgot your password?
    //                     </Link>
    //                 )}

    //                 <PrimaryButton className="ms-4" disabled={processing}>
    //                     Log in
    //                 </PrimaryButton>
    //             </div>
    //         </form>
    //     </GuestLayout>
    // );
}
