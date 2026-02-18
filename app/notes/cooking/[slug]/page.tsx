import { getNoteSlugs } from "@/lib/notes";
import NotesTable from "@/components/notes/notes-table";

export function generateStaticParams() {
    return getNoteSlugs("cooking").map((slug) => ({ slug }));
}

export default function CookingNotePage({
    params,
}: {
    params: { slug: string };
}) {
    return <NotesTable category="cooking" params={params} />;
}
