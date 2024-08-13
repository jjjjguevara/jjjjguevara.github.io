import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import { ThemeAwareIcon } from "@/components/ui/theme-aware-icon";

export const NAVLINKS = [
  {
    title: "Portfolio",
    href: `/docs/${page_routes[0].href}`,
  },
  {
    title: "Articles",
    href: "#",
  },
  {
    title: "Guides",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "About",
    href: "/docs/main/about",
  },
];

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <ThemeAwareIcon icon="muonBrain" alt="Logo" />
      <h2 className="text-md font-bold">μ/jjjjguevara</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="text-black dark:text-white font-semibold"
            absolute
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 lg:px-4 px-2 backdrop-filter backdrop-blur-xl bg-opacity-5">
      <div className="sm:p-3 p-2 max-w-[1530px] mx-auto h-full flex items-center justify-between gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-8">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Search />
            <div className="flex">
              <Link
                href="https://github.com/jjjjguevara/"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <ThemeAwareIcon icon="github" alt="GitHub" />{" "}
              </Link>

              <Link
                href="https://x.com/jjjjguevara/"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <ThemeAwareIcon icon="twitter" alt="Twitter" />{" "}
              </Link>
              <Link
                href="https://substack.com/@jjjjguevara/"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <ThemeAwareIcon icon="substack" alt="Substack" />{" "}
              </Link>

              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
