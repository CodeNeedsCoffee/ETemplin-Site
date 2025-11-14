import { Link } from "@heroui/link";
import {
    Navbar as HeroUINavbar,
    NavbarContent,
    NavbarItem,
} from "@heroui/navbar";

import { ThemeSwitch } from "./theme-switch";
import { GithubIcon } from "./icons";

export const Navbar = () => {

    return (
        <HeroUINavbar
            maxWidth="xl"
            position="sticky"
            className="border-none bg-background/60 dark:bg-default-100/50 backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-background/40"
        >
            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    <Link isExternal href={"https://github.com/CodeNeedsCoffee/ETemplin-Site"} title="GitHub">
                        <GithubIcon className="text-default-500" />
                    </Link>
                    <ThemeSwitch />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <Link isExternal href={"https://github.com/CodeNeedsCoffee/ETemplin-Site"}>
                    <GithubIcon className="text-default-500" />
                </Link>
                <ThemeSwitch />
            </NavbarContent>
        </HeroUINavbar>
    );
};
