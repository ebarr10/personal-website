export default function InfoCard({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="rounded-xl border bg-white shadow-sm">
            <div className="px-5 py-4 border-b">
                <h2 className="text-sm font-semibold tracking-wide text-slate-600 uppercase">
                    {title}
                </h2>
            </div>
            <div className="px-5 py-4 text-slate-700 leading-relaxed">
                {children}
            </div>
        </section>
    );
}
