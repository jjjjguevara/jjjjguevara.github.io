import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const CONTENT_PATH = path.join(process.cwd(), "@/contents/docs/main/"); // Adjust if necessary

export async function getMdxData(slug: string) {
  const filePath = path.join(CONTENT_PATH, `${slug}.mdx`);

  console.log("Reading MDX file from:", filePath); // Debugging log

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(fileContent);
    const mdxSource = await serialize(content);

    return {
      content: mdxSource,
      data,
    };
  } catch (error) {
    console.error("Error reading MDX file:", error); // Debugging log
    throw error; // Rethrow to be handled in getStaticProps
  }
}
