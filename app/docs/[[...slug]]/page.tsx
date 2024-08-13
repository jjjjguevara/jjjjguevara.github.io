import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { page_routes } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getMarkdownForSlug } from "@/lib/markdown";
import { PropsWithChildren, cache } from "react";
import Head from "next/head"; // Import Head

type PageProps = {
  params: { slug: string[] };
};

const cachedGetMarkdownForSlug = cache(getMarkdownForSlug);

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  const pathName = decodeURIComponent(slug.join("/")).replace(/\/{2,}/g, "/");
  const res = await cachedGetMarkdownForSlug(pathName);

  if (!res) {
    notFound();
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="flex items-start gap-12">
        <div className="flex-[3] pt-10">
          <DocsBreadcrumb
            paths={slug.map((part) => decodeURIComponent(part))}
          />
          <Markdown>
            <h1>{res.frontmatter.title}</h1>
            <p className="-mt-4 text-muted-foreground text-[16.5px]">
              {res.frontmatter.description}
            </p>
            <div>{res.content}</div>
            <Pagination pathname={pathName} />
          </Markdown>
        </div>
        <Toc path={pathName} />
      </div>
    </>
  );
}

function Markdown({ children }: PropsWithChildren) {
  return (
    <div className="prose prose-zinc dark:prose-invert prose-code:font-code dark:prose-code:bg-neutral-900 dark:prose-pre:bg-neutral-900 prose-code:bg-neutral-100 prose-pre:bg-neutral-100 prose-headings:scroll-m-20 w-[85vw] sm:w-full sm:mx-auto prose-code:text-sm prose-code:leading-6 dark:prose-code:text-white prose-code:text-neutral-800 prose-code:p-1 prose-code:rounded-md prose-pre:border pt-2 prose-code:before:content-none prose-code:after:content-none">
      {children}
    </div>
  );
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  const pathName = decodeURIComponent(slug.join("/")).replace(/\/{2,}/g, "/");
  const res = await cachedGetMarkdownForSlug(pathName);
  if (!res) return null;
  const { frontmatter } = res;
  return {
    metadataBase: new URL("https://jjjjguevara.vercel.app"),
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split("/").filter(Boolean), // Ensure no empty strings are included
  }));
}
