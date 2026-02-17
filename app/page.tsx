import { getHomePage } from "@/lib/strapi/home";

export async function generateMetadata() {
  const homeData = await getHomePage();
  return {
    title: homeData?.title || "Universidad de Oriente",
    description: homeData?.description || "Sitio Web Oficial de la Universidad de Oriente",
  }
}

export default async function Home() {
  const homeData = await getHomePage();
  return (
    <div className="p-18">
      <h1>{homeData?.title || "Bienvenido a la Universidad de Oriente"}</h1>
    </div>
  );
}