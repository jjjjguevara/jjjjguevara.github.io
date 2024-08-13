// Utility function to join paths safely
const joinPaths = (...paths: string[]): string => {
  return paths.join("/").replace(/\/{2,}/g, "/"); // Handle multiple slashes
};

// For page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Índices",
    basePath: "/docs/índices",
    items: [
      { title: "Índice de índices", href: "/índice-de-índices" }, // Ensure file extension is correct
      { title: "Installation", href: "/installation" },
      { title: "Quick Start Guide", href: "/quick-start-guide" },
      { title: "Project Structure", href: "/project-structure" },
      { title: "Changelog", href: "/changelog" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Main",
    basePath: "/docs/main",
    items: [
      { title: "Greetings", href: "/greetings" },
      { title: "About", href: "/about" },
      { title: "DITA Documentation", href: "/dita" }, // Ensure file extension is correct
    ],
  },
];

export const page_routes = ROUTES.flatMap(({ basePath, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: joinPaths(basePath, link.href), // Use basePath for correct directory
    };
  });
});
