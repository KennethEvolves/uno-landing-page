import qs from 'qs';
import { getStrapiData } from './client';

const QUERY_HOME_PAGE = qs.stringify({
    populate: {
    }
});

export async function getHomePage() {
    const query = QUERY_HOME_PAGE;
    const response = await getStrapiData(`/api/home-page?${query}`);
    return response?.data;
}
