import Link from "next/link";

export default function RecipePage() {
  return (
    <main>
      <Link href={"/recipes/123/"}>This is a link to a recipe</Link>
    </main>
  );
}
