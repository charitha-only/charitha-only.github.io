export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  href: string;
  status: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Aegis Desktop",
    category: "DESKTOP FRAMEWORK · SYSTEMS",
    description: "An experimental, security-focused desktop application framework pairing a Rust systems core with modern web frontends. Explores capability-based IPC, sandboxing and post-quantum security concepts.",
    stack: ["Rust", "TypeScript", "React", "Security Engineering"],
    href: "https://github.com/charitha-only/aegis-desktop",
    status: "Active development",
    featured: true
  },
  {
    number: "02",
    name: "ToonForge AI Studio",
    category: "AI AGENTS · CREATIVE WORKFLOWS",
    description: "A reusable agent skill for planning original animated stories, building character packets and maintaining visual identity and scene-to-scene continuity.",
    stack: ["Agent Skills", "Prompt Engineering", "Storyboarding", "AI Video"],
    href: "https://github.com/charitha-only/ToonForge-AI-Studio",
    status: "Open source",
    featured: true
  },
  {
    number: "03",
    name: "Sara Note",
    category: "WINDOWS APP · PRODUCTIVITY",
    description: "A cozy offline-first desktop notebook for notes, sketches and everyday tasks, with folders, tags, note history and local backup features.",
    stack: ["Desktop Development", "Local-first", "Product Design"],
    href: "https://github.com/charitha-only/Sara-Note",
    status: "Released · v1.4.0",
    featured: true
  },
  {
    number: "04",
    name: "Sara PDF Reader",
    category: "ANDROID APP · DOCUMENTS",
    description: "A Flutter-based document reader for Android, supporting PDF, EPUB, Office document previews, text and image viewing with offline resources.",
    stack: ["Flutter", "Dart", "Android", "Document Rendering"],
    href: "https://github.com/charitha-only/sara-pdf-reader",
    status: "Released · v1.16",
    featured: true
  },
  {
    number: "05",
    name: "Doni UI",
    category: "REACT · UI COMPONENT LIBRARY",
    description: "A React component library focused on reusable interface building blocks, spring-inspired interactions, theming and developer experience.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    href: "https://github.com/charitha-only/doni-ui",
    status: "Released · v2.7.0",
    featured: true
  }
];