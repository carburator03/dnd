import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { UserNav } from "./user-nav";
import { Button } from "./button";

export function MainNav({ isUserLoggedIn = false, className, ...props }) {
    const renderUserOrButtons = () => {
        if (isUserLoggedIn) {
            return <UserNav />;
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
                        </nav>
                    </div>
                    <div className="ml-auto flex items-center space-x-4">
                        {renderUserOrButtons()}
                    </div>
                </div>
            </div>
        </div>
    );
}
