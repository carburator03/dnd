import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";

export function MainNav({ className, ...props }) {
    return (
        <nav
            className={cn(
                "flex items-center space-x-4 lg:space-x-6",
                className,
            )}
            {...props}
        >
            <Link
                href="/welcome"
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                Home
            </Link>
        </nav>
    );
}
