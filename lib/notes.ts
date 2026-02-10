import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type NoteMeta = {
    title: string;
    date: string; // YYYY-MM-DD
    tags?: string[];
    preview?: string;
};

export type Note = {
    slug: string;
    meta: NoteMeta;
    content: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content", "notes");

function categoryDir(category: string) {
    return path.join(CONTENT_ROOT, category);
}

export function getNoteSlugs(category: string): string[] {
    const dir = categoryDir(category);
    if (!fs.existsSync(dir)) return [];

    return fs
        .readdirSync(dir)
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => f.replace(/\.mdx$/, ""));
}

export function getNote(category: string, slug: string): Note {
    const filePath = path.join(categoryDir(category), `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(raw);

    // Minimal validation (keep it simple)
    const meta: NoteMeta = {
        title: String(data.title ?? slug),
        date: String(data.date ?? "1970-01-01"),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
        preview: data.preview ? String(data.preview) : undefined,
    };

    return { slug, meta, content };
}

export function getAllNotes(category: string): Note[] {
    const slugs = getNoteSlugs(category);
    const notes = slugs.map((slug) => getNote(category, slug));

    // newest first
    notes.sort((a, b) => b.meta.date.localeCompare(a.meta.date));
    return notes;
}
