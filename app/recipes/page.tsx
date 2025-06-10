import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Ethan's Recipes",
  };
}

export default async function RecipePage() {
  return (
    <main>
      <Link href={"/recipes/123/"}>This is a link to a recipe</Link>
    </main>
  );
}
