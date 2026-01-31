import Container from "@/components/layout/Container";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <Container>
      <div className="py-16">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-3 text-neutral-600">
          Reach me through any of the links below.
        </p>

        <div className="mt-8 space-y-3 text-sm">
          <p>
            Email:{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a className="underline" href={site.links.github} target="_blank" rel="noreferrer">
              {site.links.github}
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a className="underline" href={site.links.linkedin} target="_blank" rel="noreferrer">
              {site.links.linkedin}
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}
