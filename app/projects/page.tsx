import Link from "next/link";
import Container from "@/components/layout/Container";
import { projects } from "@/content/projects";

export default function ProjectsPage() {

    const statusStyles: Record<string, string> = {
  planned: "border-neutral-200 text-neutral-600",
  building: "border-blue-200 text-blue-700",
  shipped: "border-green-200 text-green-700",
};

  return (
    <Container>
      <div className="py-16">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-3 text-neutral-600">
          A mix of shipped work and learning builds.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="rounded-xl border border-neutral-200 p-5 hover:border-neutral-300"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-semibold">{p.title}</h2>
               <span
  className={`rounded-full border px-2 py-1 text-xs ${
    statusStyles[p.status]
  }`}
>
  {p.status}
</span>

              </div>

              <p className="mt-3 text-sm text-neutral-600">{p.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
