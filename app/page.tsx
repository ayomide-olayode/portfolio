import Container from "@/components/layout/Container";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container>
      <div className="py-24">
        <h1 className="text-4xl font-semibold leading-tight">
          Frontend developer building modern web apps.
        </h1>

        <p className="mt-4 max-w-xl text-neutral-600">
          I design and ship SaaS-style products with clean UX and strong frontend
          architecture.
        </p>

        <div className="mt-8">
          <Link
            href="/projects"
            className="inline-block rounded-lg border border-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-900 hover:text-white"
          >
            View projects
          </Link>
        </div>
      </div>
    </Container>
  );
}
