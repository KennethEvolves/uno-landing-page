export const getStrapiData = async (url: string) => {
  const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      next: { revalidate: 2 },
    })
    if (!response.ok) throw new Error(`HTTP error! status:${response.status}`)
    return await response.json()
  } catch (error) {
    console.error(`Strapi Fetch error: ${error}`)
  }
}
