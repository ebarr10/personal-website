import Markdown from "markdown-to-jsx";

export default async function SpecificProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  return (
    <main>
      <article>
        <p>This is a specific project</p>
        <Markdown>{slug}</Markdown>
      </article>
    </main>
  );
}
