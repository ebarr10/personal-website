import {
  youtubeChannels,
  websitesAndPlatforms,
  newlettersAndBlogs,
  podcasts,
  appsAndTools,
} from "./data/data";

export default function LearnPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-4">📚 Where I Learn</h1>
        <p className="text-lg text-gray-600">
          A curated list of YouTubers, websites, and other resources that shape
          how I learn, grow, and build. This will keep adding to these tables as
          I find new resources. Always open to recommendations.
        </p>
      </section>

      <Section title="🎥 YouTube Channels">
        <ResourceTable
          headers={youtubeChannels.headers}
          rows={youtubeChannels.rows}
          links={youtubeChannels.links}
        />
      </Section>

      <Section title="🌐 Websites & Platforms">
        <ResourceTable
          headers={websitesAndPlatforms.headers}
          rows={websitesAndPlatforms.rows}
          links={websitesAndPlatforms.links}
        />
      </Section>

      <Section title="📘 Newsletters & Blogs">
        <ResourceTable
          headers={newlettersAndBlogs.headers}
          rows={newlettersAndBlogs.rows}
          links={newlettersAndBlogs.links}
        />
      </Section>

      <Section title="🎧 Podcasts">
        <ResourceTable
          headers={podcasts.headers}
          rows={podcasts.rows}
          links={podcasts.links}
        />
      </Section>

      <Section title="📱 Apps & Tools">
        <ResourceTable
          headers={appsAndTools.headers}
          rows={appsAndTools.rows}
          links={appsAndTools.links}
        />
      </Section>

      <Section title="💡 Other Sources">
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Reddit:</strong> r/webdev, r/learnprogramming, r/django
          </li>
        </ul>
      </Section>

      <footer className="pt-8 border-t text-sm text-gray-500">
        <blockquote className="italic">
          “Learning is not a phase—it's a practice.”
        </blockquote>
      </footer>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}

function ResourceTable({
  headers,
  rows,
  links,
}: {
  headers: string[];
  rows: string[][];
  links: string[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left border rounded-md">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-2 font-medium text-gray-700">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t">
              {row.map((cell, j) =>
                j === 0 ? (
                  <td key={j} className="px-4 py-2">
                    <a
                      href={links?.[i] || "#"}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cell}
                    </a>
                  </td>
                ) : (
                  <td key={j} className="px-4 py-2 text-gray-800">
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
