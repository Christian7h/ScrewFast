// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Productos", url: "/products" },
  { name: "Servicios", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contacto", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentacion", url: "/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/products" },
      { name: "Construcción Servicios", url: "/services" },
    ],
  },
  {
    section: "Compañia",
    links: [
      { name: "Acerda de", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};