import Markdown from "markdown-to-jsx";

export default async function SpecificProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return (
    <main>
      <article>
        <p>This is a specific blog</p>
        <Markdown>{slug}</Markdown>
      </article>
    </main>
  );
}
