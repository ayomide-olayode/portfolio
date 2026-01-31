import Container from "@/components/layout/Container";
import { site } from "@/lib/site";

export default function AboutPage() {
  return (
    <Container>
      <div className="py-16">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="mt-4 text-neutral-700">
          I’m {site.name}. I build modern web apps, ship MVPs, and care about clean UX.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <section className="rounded-xl border border-neutral-200 p-5">
            <h2 className="font-semibold">Focus</h2>
            <ul className="mt-2 list-disc pl-5 text-sm text-neutral-600">
              <li>Frontend systems and dashboards</li>
              <li>Product-led UX</li>
              <li>Fast shipping</li>
            </ul>
          </section>

          <section className="rounded-xl border border-neutral-200 p-5">
            <h2 className="font-semibold">Tools</h2>
            <ul className="mt-2 list-disc pl-5 text-sm text-neutral-600">
              <li>Next.js, React, TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Supabase (when needed)</li>
            </ul>
          </section>
        </div>
      </div>
    </Container>
  );
}
