import fs from "fs";
import matter from "gray-matter";

type FrontMatter = {
  title: string;
  description: string;
  date?: string;
  tag?: string[];

  // recipes
  prep_time?: string;
  cook_time?: string;
};

export default function getDisplayMetadata(basepath: string): {
  slug: string;
  metadata: FrontMatter;
  content: string;
}[] {
  const folder = basepath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((f) => f.endsWith("md"));

  const metadata = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basepath}/${filename}`, "utf8");
    const { data, content } = matter(fileContents);

    if (!data.title) {
      throw new Error(`Missing title in ${filename}`);
    }

    return {
      slug: filename.replace(".md", ""),
      metadata: data as FrontMatter,
      content,
    };
  });
  return metadata;
}
