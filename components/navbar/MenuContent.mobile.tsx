'use client'
import { MobileMenuProps } from './Navbar.types';
import { motion } from "framer-motion";
import { NavItem } from "./NavItem";

export const MenuContentMobile = ({ navItem, onClose }: MobileMenuProps) => {
    return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 1 }}
            transition={{ duration: .4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="md:hidden absolute top-18 left-0 z-40 bg-white w-full flex flex-col border-gray-200 border-y overflow-hidden"
        >
            <NavItem navItem={navItem} className='py-3 px-4 text-center hover:bg-gray-50' onClose={onClose} />
        </motion.div>
    );
};