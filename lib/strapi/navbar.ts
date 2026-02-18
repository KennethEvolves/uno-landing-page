import qs from 'qs';
import { getStrapiData } from './client';
import { NavbarAttributes } from '@/components/navbar/Navbar.types';

const QUERY_NAVBAR = qs.stringify({
    populate: {
        logo: {
            fields: ['url', 'alternativeText', 'width', 'height']
        },
        navItem: {
            fields: ['label', 'href', 'isExternal'],
        },
        mobileMenu: {
            populate: {
                logoClose: {
                    fields: ['url', 'alternativeText']
                },
                logoMenu: {
                    fields: ['url', 'alternativeText']
                }
            }
        }
    }
});

export async function getNavbarData(): Promise<NavbarAttributes | null> {
    const query = QUERY_NAVBAR;
    const response = await getStrapiData(`/api/navbar?${query}`);
    return response?.data ?? null;
}
