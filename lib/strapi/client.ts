const BASE_URL = 'http://localhost:1337';

export async function getStrapiData(url: string) {
    try {
        const response = await fetch(`${BASE_URL}${url}`, {
            next: { revalidate: 60 }
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Strapi Fetch Error:', error);
        return null;
    }
}