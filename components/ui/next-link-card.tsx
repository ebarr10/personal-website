import Link from "next/link";

export default function NextLinkCard({
    title,
    description,
    href,
}: {
    title: string;
    description: string;
    href: string;
}) {
    return (
        <Link
            href={href}
            className="rounded-xl border bg-white shadow-sm p-5 hover:bg-slate-50 transition"
        >
            <div className="font-semibold text-slate-900">{title} →</div>
            <div className="mt-1 text-sm text-slate-600">{description}</div>
        </Link>
    );
}
