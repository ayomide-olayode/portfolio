import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 py-10">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-neutral-600">
          <p>© {year} OLAYODE AYOMIDE OLUWAFERANMI</p>
          <p>Built with Next.js and Tailwind.</p>
        </div>
      </Container>
    </footer>
  );
}
