import Link from "next/link";
import Image from "next/image";
import { MenuContent } from "./MenuContent";
import { NavbarMobile } from "./Navbar.mobile";
import { PersonIcon } from '@primer/octicons-react'
import { getNavbarData } from "@/lib/strapi/navbar";

export default async function Navbar() {

    const navbarData = await getNavbarData();
    if (!navbarData) return null;

    const { logo, navItem, mobileMenu } = navbarData;

    const localhost = "http://localhost:1337";
    const logoURL = `${localhost}${logo.url}`;

    return (
        <nav className="fixed top-0 left-0 z-50 w-full h-18 bg-white shadow-sm">
            <div className="px-10 py-1.5 h-full flex items-center justify-between xl:justify-evenly">

                {/* 1. Logo */}
                <Link href="/">
                    <Image
                        src={logoURL}
                        alt={logo.alternativeText}
                        width={logo.width}
                        height={logo.height}
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* 2. Desktop Menu */}
                <MenuContent navItem={navItem} />

                {/* 3. Login Button */}
                <button className="hidden 2xl:block bg-uno-primary text-white px-5 py-1.5 rounded-md cursor-not-allowed">
                    Iniciar sesión
                </button>

                {/* 4. Login Icon */}
                <button className="hidden md:flex 2xl:hidden cursor-not-allowed text-uno-primary transition-colors duration-200">
                    <PersonIcon
                        size={30}
                    />
                </button>

                {/* 5. Mobile Navbar Component */}
                <NavbarMobile
                    navItem={navItem}
                    mobileButton={mobileMenu}
                    localhost={localhost}
                />
            </div>
        </nav>
    );
};