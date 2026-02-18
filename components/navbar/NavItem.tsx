'use client'
import Link from "next/link";
import { NavItemProps } from "./Navbar.types"
import { usePathname } from "next/navigation";

export const NavItem = ({ navItem, className, onClose }: NavItemProps) => {
    const pathname = usePathname();
    return (
        <>
            {navItem.map(item => {
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.id}
                        href={item.href}
                        onClick={onClose}
                        className={`transition-colors duration-200 ${className || ""}
                            ${isActive ? "text-uno-primary font-semibold" : "text-gray-500 hover:text-uno-primary"}`}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </>
    )
}
