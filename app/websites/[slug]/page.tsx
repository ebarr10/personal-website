import { generateStatic } from "@/utils/generateStaticParams";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

function getContent(slug: string): matter.GrayMatterFile<string> {
  const folder = "markdown/websites/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export function generateStaticParams() {
  return generateStatic("markdown/websites");
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getContent(slug);

  return (
    <main>
      <article className="markdown-page p-5 md:p-10">
        <Markdown>{page.content}</Markdown>
      </article>
    </main>
  );
}
