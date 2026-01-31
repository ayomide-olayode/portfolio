import Container from "@/components/layout/Container";
import Link from "next/link";
import { projects } from "@/content/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: rawSlug } = await params;

  const slug = decodeURIComponent(rawSlug).trim().toLowerCase();

  const project = projects.find(
    (p) => p.slug.trim().toLowerCase() === slug
  );

  if (!project) {
    return (
      <Container>
        <div className="py-16">
          <Link
            href="/projects"
            className="text-sm text-neutral-600 hover:text-neutral-900"
          >
            ← Back to projects
          </Link>

          <h1 className="mt-6 text-2xl font-semibold">Project not found</h1>
          <p className="mt-2 text-neutral-600">
            This slug doesn’t exist:{" "}
            <span className="font-mono text-neutral-900">{rawSlug}</span>
          </p>

          <div className="mt-8">
            <p className="text-sm font-semibold">Available slugs:</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-neutral-600">
              {projects.map((p) => (
                <li key={p.slug} className="font-mono">
                  {p.slug}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-16">
        <Link
          href="/projects"
          className="text-sm text-neutral-600 hover:text-neutral-900"
        >
          ← Back to projects
        </Link>

        <div className="mt-6 flex items-start justify-between gap-4">
          <h1 className="text-3xl font-semibold">{project.title}</h1>
          <span className="rounded-full border border-neutral-200 px-2 py-1 text-xs text-neutral-600">
            {project.status}
          </span>
        </div>

        <p className="mt-4 text-neutral-700">{project.summary}</p>

        <div className="mt-8">
          <h2 className="text-lg font-semibold">Stack</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li
                key={s}
                className="rounded-full bg-neutral-100 px-2 py-1 text-sm text-neutral-700"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <section className="rounded-xl border border-neutral-200 p-5">
            <h3 className="font-semibold">Problem</h3>
            <p className="mt-2 text-sm text-neutral-600">
              (Write the real-world problem this solves.)
            </p>
          </section>

          <section className="rounded-xl border border-neutral-200 p-5">
            <h3 className="font-semibold">Solution</h3>
            <p className="mt-2 text-sm text-neutral-600">
              (Write what you built and why your approach works.)
            </p>
          </section>

          <section className="rounded-xl border border-neutral-200 p-5">
            <h3 className="font-semibold">Key features</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-neutral-600">
              <li>(Feature 1)</li>
              <li>(Feature 2)</li>
              <li>(Feature 3)</li>
            </ul>
          </section>

          <section className="rounded-xl border border-neutral-200 p-5">
            <h3 className="font-semibold">Links</h3>
            <div className="mt-2 flex flex-col gap-2 text-sm">
              {project.links.live ? (
                <a
                  className="text-neutral-700 underline"
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo
                </a>
              ) : (
                <span className="text-neutral-500">Live demo: coming soon</span>
              )}

              {project.links.github ? (
                <a
                  className="text-neutral-700 underline"
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub repo
                </a>
              ) : (
                <span className="text-neutral-500">GitHub: coming soon</span>
              )}
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}
