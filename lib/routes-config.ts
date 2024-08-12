// Utility function to join paths safely
const joinPaths = (...paths: string[]): string => {
  return paths.join("/").replace(/\/{2,}/g, "/"); // Handle multiple slashes
};

// For page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Índices",
    href: "índices",
    items: [
      { title: "Índice de índices", href: "/índice-de-índices" },
      { title: "Installation", href: "/installation" },
      { title: "Quick Start Guide", href: "/quick-start-guide" },
      { title: "Project Structure", href: "/project-structure" },
      { title: "Changelog", href: "/changelog" },
      { title: "FAQ", href: "/faq" },
      { title: "DITA Documentation", href: "/output/html5/index.html" }, // Correct path to static HTML
    ],
  },
];

export const page_routes = ROUTES.flatMap(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: joinPaths(href, link.href),
    };
  });
});
