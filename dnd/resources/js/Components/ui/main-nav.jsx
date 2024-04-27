import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { UserNav } from "./user-nav";
import { Button } from "./button";
import { forwardRef } from "react";

const MainNav = forwardRef(function ({ user, className, ...props }, ref) {
    const renderUserOrButtons = () => {
        if (user && user.name) {
            return <UserNav user={user} />;
        } else {
            return (
                <>
                    <Button variant="link" asChild>
                        <Link href="/login">Bejelentkezés</Link>
                    </Button>
                    <Button variant="link" asChild>
                        <Link href="/register">Regisztráció</Link>
                    </Button>
                </>
            );
        }
    };
    return (
        <div className="hidden md:flex md:flex-col w-full">
            <div className="border-b">
                <div className="flex h-16 items-center px-4 w-full">
                    <div className="mx-6">
                        <nav
                            className={cn(
                                "flex items-center space-x-4 lg:space-x-6",
                            )}
                        >
                            <label className="text-left font-bold">DND</label>

                            <Link
                                href="/"
                                className="text-sm font-medium transition-colors hover:text-primary"
                            >
                                Kezdőlap
                            </Link>
                            {user && (
                                <Link
                                    href="/characters"
                                    className="text-sm font-medium transition-colors hover:text-primary"
                                >
                                    Karakterek
                                </Link>
                            )}
                            {user && user.admin == 1 && (
                                <Link
                                    href="/places"
                                    className="text-sm font-medium transition-colors hover:text-primary"
                                >
                                    Helyszínek
                                </Link>
                            )}
                        </nav>
                    </div>
                    <div className="ml-auto flex items-center space-x-4">
                        {renderUserOrButtons()}
                    </div>
                </div>
            </div>
        </div>
    );
});

export { MainNav };
