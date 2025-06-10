import Markdown from "markdown-to-jsx";

export default async function SpecificRecipePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  return (
    <main>
      <article>
        <p>This is a specific recipe</p>
        <Markdown>{slug}</Markdown>
      </article>
    </main>
  );
}
