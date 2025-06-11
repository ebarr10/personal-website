import Markdown from "markdown-to-jsx";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main>
      <article>
        <p>This is a specific note</p>
        <Markdown>{slug}</Markdown>
      </article>
    </main>
  );
}
