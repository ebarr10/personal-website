import { getNoteSlugs } from "@/lib/notes";
import NotesTable from "@/components/notes/notes-table";

export function generateStaticParams() {
    return getNoteSlugs("chinese").map((slug) => ({ slug }));
}

export default function ChineseNotePage({
    params,
}: {
    params: { slug: string };
}) {
    return <NotesTable category="chinese" params={params} />;
}
