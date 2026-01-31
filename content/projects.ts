export type ProjectStatus = "planned" | "building" | "shipped";

export type Project = {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  stack: string[];
  status: ProjectStatus;
  links: {
    live?: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    title: "Design-System Playground",
    slug: "design-system-playground",
    summary:
      "A component library with documented variants, tokens, and Storybook.",
    tags: ["Design system", "Storybook"],
    stack: ["Next.js", "TypeScript", "Tailwind", "Storybook"],
    status: "planned",
    links: { github: "", live: "" },
  },
  {
    title: "Subscription Reality Checker",
    slug: "subscription-reality-checker",
    summary:
      "Track subscriptions by value and usage, with simple insights and charts.",
    tags: ["Fintech", "Dashboard"],
    stack: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    status: "planned",
    links: { github: "", live: "" },
  },
  {
    title: "Offline-First App",
    slug: "offline-first-app",
    summary:
      "A notes app that works offline using IndexedDB, with sync status UI.",
    tags: ["Offline-first", "IndexedDB"],
    stack: ["Next.js", "TypeScript", "Tailwind", "IndexedDB"],
    status: "planned",
    links: { github: "", live: "" },
  },
  {
    title: "Real-Time Collaboration App",
    slug: "real-time-collaboration-app",
    summary:
      "A shared checklist with live updates and optimistic UI.",
    tags: ["Realtime", "WebSockets"],
    stack: ["Next.js", "TypeScript", "Tailwind", "WebSockets"],
    status: "planned",
    links: { github: "", live: "" },
  },
  {
    title: "Buy Later, Not Now Store",
    slug: "buy-later-not-now-store",
    summary:
      "An ecommerce demo built around saving items with reminders instead of impulse checkout.",
    tags: ["Ecommerce", "UX"],
    stack: ["Next.js", "TypeScript", "Tailwind"],
    status: "planned",
    links: { github: "", live: "" },
  },
];
