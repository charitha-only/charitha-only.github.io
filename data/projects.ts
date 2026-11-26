export type Project = {
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  purpose: string;
  howItWorks: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  href: string;
  status: string;
  featured?: boolean;
  demoKey: "aegis" | "toonforge" | "saranote" | "sarapdf" | "doniui";
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Aegis Desktop",
    category: "DESKTOP FRAMEWORK · SYSTEMS",
    tagline: "Post-Quantum Secure Rust Systems Core paired with Web Frontends",
    description:
      "An experimental, security-focused desktop application framework pairing a high-performance Rust systems core with modern web frontends. Explores capability-based IPC, strict memory sandboxing, and post-quantum cryptographic primitives.",
    purpose: "Zero-Trust Desktop Sandboxing & Low-Latency IPC",
    howItWorks: [
      "Strict Process Isolation: Rust kernel runs in a separate memory space from web UI viewports.",
      "Capability-Gated IPC: Permissions (fs, network, hardware) are explicitly authorized per channel.",
      "Cryptographic Enclave: In-memory IPC payloads encrypted with post-quantum key exchange."
    ],
    metrics: [
      { label: "IPC Roundtrip", value: "< 0.4ms" },
      { label: "Memory Footprint", value: "~18 MB" },
      { label: "Security Level", value: "Post-Quantum Ready" }
    ],
    stack: ["Rust", "TypeScript", "React", "Security Engineering", "IPC Systems"],
    href: "https://github.com/charitha-only/aegis-desktop",
    status: "Active development",
    featured: true,
    demoKey: "aegis"
  },
  {
    number: "02",
    name: "ToonForge AI Studio",
    category: "AI AGENTS · CREATIVE WORKFLOWS",
    tagline: "Autonomous Agent Skill for Storyboarding & Visual Continuity",
    description:
      "A reusable agent skill for planning original animated stories, constructing precise character packets, and enforcing visual identity and scene-to-scene continuity across generative video workflows.",
    purpose: "Multimodal AI Storyboarding & Identity Preservation",
    howItWorks: [
      "Character Packet Extraction: Computes facial embeddings, wardrobe anchors, and palette rules.",
      "Narrative Beat Decomposer: Breaks screenplays into keyframe storyboard sequences.",
      "Temporal Latent Anchoring: Guides video diffusion models to prevent visual character drift."
    ],
    metrics: [
      { label: "Character Consistency", value: "98.2%" },
      { label: "Scene Latency", value: "~1.8s / beat" },
      { label: "Workflow Type", value: "Autonomous Agentic" }
    ],
    stack: ["Agent Skills", "Prompt Architecture", "Storyboarding", "AI Video", "Computer Vision"],
    href: "https://github.com/charitha-only/ToonForge-AI-Studio",
    status: "Open source",
    featured: true,
    demoKey: "toonforge"
  },
  {
    number: "03",
    name: "Sara Note",
    category: "WINDOWS APP · PRODUCTIVITY",
    tagline: "Cozy Offline-First Desktop Notebook & Local Data Engine",
    description:
      "A cozy, offline-first desktop notebook for markdown notes, sketches, and everyday productivity. Built for users who demand privacy, lightning-fast search, folders, tags, revision history, and zero cloud dependency.",
    purpose: "100% On-Device Privacy & Instant Local-First Writing",
    howItWorks: [
      "Local-First SQLite Engine: Zero network lag; reads and writes complete in microsecond intervals.",
      "Atomic Revision Journaling: Every keystroke and edit versioned locally with instant snapshot rollback.",
      "Hybrid Rich Markdown: Live rendering parser supporting LaTeX equations, sketches, and checklists."
    ],
    metrics: [
      { label: "Cloud Dependency", value: "0% (Local-First)" },
      { label: "Search Latency", value: "< 1.2ms" },
      { label: "Data Portability", value: "Open SQLite + JSON" }
    ],
    stack: ["Desktop Development", "Local-first", "Product Design", "SQLite", "Markdown"],
    href: "https://github.com/charitha-only/Sara-Note",
    status: "Released · v1.4.0",
    featured: true,
    demoKey: "saranote"
  },
  {
    number: "04",
    name: "Sara PDF Reader",
    category: "ANDROID APP · DOCUMENTS",
    tagline: "Hardware-Accelerated Document & Book Rendering Engine",
    description:
      "A Flutter-based document reader for Android engineered for speed and clarity. Supports PDF, EPUB, and Office document previews with custom shader rendering, smooth reflow, night mode, and offline caching.",
    purpose: "Ultra-Fast Multi-Format Document Engine & Reader",
    howItWorks: [
      "Skia & Impeller GPU Shaders: Renders heavy vector pages and vector fonts at a locked 120 FPS.",
      "Smart Content Reflow: Formats dense document text into comfortable reading columns on any screen.",
      "Offline Memory Ring Buffer: Pre-renders upcoming pages into RAM for seamless instantaneous page flips."
    ],
    metrics: [
      { label: "Rendering Rate", value: "120 FPS" },
      { label: "Formats Supported", value: "PDF, EPUB, DOCX" },
      { label: "Battery Efficiency", value: "GPU Shader Optimized" }
    ],
    stack: ["Flutter", "Dart", "Android", "Document Rendering", "Shader Shading"],
    href: "https://github.com/charitha-only/sara-pdf-reader",
    status: "Released · v1.16",
    featured: true,
    demoKey: "sarapdf"
  },
  {
    number: "05",
    name: "Doni UI",
    category: "REACT · UI COMPONENT LIBRARY",
    tagline: "Kinetic UI Component Library with Spring Physics & Dark Tokens",
    description:
      "A React component library built with spring-inspired physics, magnetic interactions, accessible ARIA primitives, and dark-first amber design tokens engineered for developer happiness.",
    purpose: "Physics-Driven Spring Interactions & Design System",
    howItWorks: [
      "Spring Dynamics Calculus: Damping ratios and stiffness coefficients emulate physical mass.",
      "Zero-Runtime Token Optimization: Built on Tailwind CSS and CSS variables for maximum performance.",
      "Magnetic Cursor Affordances: UI elements gently gravitational-pull towards touch and pointer inputs."
    ],
    metrics: [
      { label: "Bundle Size", value: "< 4.2 kB" },
      { label: "Frame Rate", value: "60 FPS (Hardware Accel)" },
      { label: "Accessibility", value: "100% WAI-ARIA" }
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Spring Motion", "Design Systems"],
    href: "https://github.com/charitha-only/doni-ui",
    status: "Released · v2.7.0",
    featured: true,
    demoKey: "doniui"
  }
];
