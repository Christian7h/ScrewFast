import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "SunSummer",
  tagline: "Construcción Profesional de Piscinas",
  description: "SunSummer ofrece servicios profesionales de construcción de piscinas personalizadas y de calidad para transformar tu espacio exterior. Explora nuestras opciones y contacta a nuestro equipo para obtener la mejor calidad y confiabilidad.",
  description_short: "SunSummer ofrece servicios profesionales de construcción de piscinas personalizadas y de calidad para transformar tu espacio exterior.",
  url: "https://screwfast.uk",
  author: "Emil Gulamov/Nombre del equipo de SunSummer",
};


export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es_CL",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Construcción Profesional de Piscinas`,
  description: "Transforma tu espacio exterior con las piscinas personalizadas y de calidad de SunSummer. Descubre nuestros servicios de construcción experta, confiables y adaptados a tus necesidades. Comienza tu proyecto hoy mismo y disfruta de la diferencia con diseño centrado en el usuario y herramientas de vanguardia.",
  image: ogImageSrc,
};
