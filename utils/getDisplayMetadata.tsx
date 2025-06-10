import fs from "fs";
import matter from "gray-matter";

type ProjectMeta = {
  title: string;
  description: string;
  tags?: string[];
};

type RecipeMeta = {
  title: string;
  prep_time: string;
  cook_time: string;
  description: string;
};

type PostMeta = {
  title: string;
  description: string;
  date: string;
  tag?: string[];
};

type FrontMatter = ProjectMeta | RecipeMeta | PostMeta;

export default function getDisplayMetadata<T = FrontMatter>(
  basepath: string
): {
  slug: string;
  metadata: T;
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
      metadata: data as T,
      content,
    };
  });
  return metadata;
}
