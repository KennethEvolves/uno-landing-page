'use client'
import { useState } from "react";
import { MobileButtonTypes, NavItemTypes } from './Navbar.types';
import Image from "next/image";
import { MenuContentMobile } from "./MenuContent.mobile";
import { AnimatePresence } from "framer-motion";

export const NavbarMobile = ({ navItem, mobileButton, localhost }: { navItem: NavItemTypes[], mobileButton: MobileButtonTypes, localhost: string }) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { ariaLabel, logoClose, logoMenu } = mobileButton;
    const logoCloseURL = `${localhost}${logoClose.url}`;
    const logoMenuURL = `${localhost}${logoMenu.url}`;

    return (
        <>
            {/* 1. Mobile Button*/}
            <button
                className={`md:hidden text-uno-primary focus:outline-none cursor-pointer`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={ariaLabel}
            >
                <Image
                    src={isMobileMenuOpen ? logoCloseURL : logoMenuURL}
                    alt={isMobileMenuOpen ? logoClose.alternativeText : logoMenu.alternativeText}
                    width={30}
                    height={30}
                    className={`transition-all duration-300
                        ${isMobileMenuOpen ? "rotate-180 opacity-80" : "rotate-0 opacity-100"}`}
                />
            </button>

            {/* 2. Mobile Menu Content */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <MenuContentMobile
                        navItem={navItem}
                        onClose={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};