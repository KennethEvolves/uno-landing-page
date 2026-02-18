export interface StrapiImage {
    url: string;
    alternativeText: string;
    width?: number;
    height?: number;
}

export interface NavItemTypes {
    id?: number;
    href: string;
    label: string;
    isExternal?: boolean;
}

export interface NavItemProps {
    navItem: NavItemTypes[];
    className?: string;
    onClose?: () => void;
}

export interface MobileMenuProps extends NavItemProps { }

export interface MobileButtonTypes {
    ariaLabel: string;
    logoClose: StrapiImage;
    logoMenu: StrapiImage;
}

export interface NavbarAttributes {
    logo: StrapiImage;
    navItem: NavItemTypes[];
    mobileMenu: MobileButtonTypes;
}