import { getNoteSlugs } from "@/lib/notes";
import NotesTable from "@/components/notes/notes-table";

export function generateStaticParams() {
    return getNoteSlugs("developer").map((slug) => ({ slug }));
}

export default function DeveloperNotePage({
    params,
}: {
    params: { slug: string };
}) {
    return <NotesTable category="developer" params={params} />;
}
