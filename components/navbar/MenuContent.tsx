'use client'
import { NavItemTypes } from "./Navbar.types";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon } from "@primer/octicons-react";
import { NavItem } from "./NavItem";

export const MenuContent = ({ navItem }: { navItem: NavItemTypes[] }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const VISIBLE_COUNT = 3;
    const hasMore = navItem.length > VISIBLE_COUNT;

    const visibleItems = hasMore ? navItem.slice(0, VISIBLE_COUNT) : navItem;
    const dropdownItems = hasMore ? navItem.slice(VISIBLE_COUNT) : [];

    return (
        <>
            <div className="hidden xl:flex gap-8">
                <NavItem navItem={navItem} />
            </div>

            <div className="hidden md:flex xl:hidden gap-8 items-center">
                {/* 1. Main NavItem */}
                <NavItem navItem={visibleItems} />

                {/* 2. "More" Button and Dropdown */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <button
                        className={`flex items-center gap-1 text-[16px] transition-colors duration-200 cursor-pointer
                    ${isDropdownOpen ? "text-uno-primary" : "text-gray-500"}`}
                    >
                        Más
                        <ChevronDownIcon
                            className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                            size={16}
                        />
                    </button>

                    {/* 3. Contenedor del Dropdown con Framer Motion */}
                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden z-50"
                            >
                                <NavItem
                                    navItem={dropdownItems}
                                    className="block px-4 py-3 text-sm hover:bg-gray-50"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div >
        </>
    )
}
