"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Bot, Check, Code2, Copy, Cpu,
  ExternalLink, Github, Layers3, Menu, Sparkles, Terminal,
  Workflow, X, Zap
} from "lucide-react";
import { projects } from "@/data/projects";

const tools = [
  { name: "OpenAI Codex", type: "AI coding agent & synthesis", symbol: "✳", status: "Active" },
  { name: "Google Antigravity", type: "AI development environment", symbol: "◈", status: "Core Stack" },
  { name: "Grok", type: "Real-time reasoning & research", symbol: "𝕏", status: "Integrated" },
  { name: "OpenBot", type: "Autonomous agent workflows", symbol: "⌘", status: "Active" }
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Projects", href: "#projects" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" }
];

const skills = [
  "AI-Assisted Engineering", "Agentic Workflows", "Next.js 15", "React 19",
  "TypeScript", "Rust Systems", "Flutter & Dart", "Automation Pipelines",
  "Prompt Architecture", "Tailwind CSS", "Local-First Architecture", "Vercel Deployments"
];

function Reveal({
  children,
  delay = 0,
  className = "",
  style
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: reduce ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portraitFailed, setPortraitFailed] = useState(false);
  const [officeFailed, setOfficeFailed] = useState(false);
  const [techFailed, setTechFailed] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@malsanka.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <main>
      {/* Background Atmosphere */}
      <div className="cyber-grid" aria-hidden="true" />
      <div className="ambient-glow-1" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      {/* Floating Pill Navigation */}
      <header className="header-wrapper">
        <nav className="floating-nav" aria-label="Main navigation">
          <a href="#top" className="nav-brand" aria-label="Charitha Portfolio">
            C<span>.</span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="nav-cta">
            Contact
          </a>

          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <motion.div
          className="mobile-drawer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
              <span>{item.label}</span>
              <ArrowUpRight size={15} />
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            <span>Contact</span>
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      )}

      {/* =========================================
          MASTER CINEMATIC HERO SECTION
          ========================================= */}
      <section className="hero-stage" id="top">
        {/* Star Particles & Ambient Glow */}
        <div className="hero-particles" aria-hidden="true" />
        <div className="hero-radial-glow" aria-hidden="true" />

        {/* Giant Glowing Typography Behind Subject */}
        <div className="hero-backdrop-text-wrap" aria-hidden="true">
          <h1 className="hero-giant-word">PORTFOLIO</h1>
          <div className="hero-tech-banner">
            <span>Tech Stack: Next.js, React, TypeScript, Rust, Tailwind CSS, AI Agents</span>
          </div>
        </div>

        {/* Master Center Subject Portrait (Transparent Cutout) */}
        <div className="hero-subject-container">
          {!portraitFailed ? (
            <img
              src="/images/portfolio-portrait-hero-transparent.png"
              alt="Charitha — Web & AI Developer"
              className="hero-subject-image"
              width={720}
              height={532}
              fetchPriority="high"
              onError={() => setPortraitFailed(true)}
            />
          ) : (
            <img
              src="/images/portfolio-portrait-dark-hero.webp"
              alt="Charitha — Developer"
              className="hero-subject-image"
              width={728}
              height={540}
            />
          )}
        </div>

        {/* Bottom Left Corner Content */}
        <motion.div
          className="hero-corner-left"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="corner-tag">I AM</span>
          <h2 className="corner-heading">
            WEB &amp; AI<br />DEVELOPER
          </h2>
          <p className="corner-desc">
            I design and develop modern, high-performance web applications with a focus on
            exceptional user experiences and intelligent agent systems.
          </p>
          <a href="#projects" className="corner-cta-pill">
            Explore Work <ArrowDown size={13} />
          </a>
        </motion.div>

        {/* Bottom Right Corner Content */}
        <motion.div
          className="hero-corner-right"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="corner-slogan">
            <span>DESIGN THAT INSPIRES.</span>
            <span className="slogan-gold">CODE THAT PERFORMS.</span>
          </div>
          <div className="corner-origin">
            <span>Based in Sri Lanka</span>
            <span className="origin-name">/ Charitha</span>
          </div>
        </motion.div>

        {/* Golden Light Ray Swoosh */}
        <div className="hero-bottom-swoosh" aria-hidden="true" />

        {/* Floating Corner Chat Pill */}
        <a href="#contact" className="hero-floating-chat" aria-label="Get in touch">
          <Sparkles size={18} />
        </a>
      </section>

      {/* Infinite Focus Ticker */}
      <section className="ticker-section" aria-label="Areas of expertise">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div className="ticker-group" key={i}>
              {[
                "AI VIBE CODING",
                "AGENT ARCHITECTURE",
                "SYSTEMS ENGINEERING",
                "FULL-STACK NEXT.JS",
                "WORKFLOW AUTOMATION",
                "LOCAL-FIRST APPS"
              ].map((text) => (
                <span className="ticker-item" key={text}>
                  <Sparkles size={12} /> {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Bento Capabilities Section */}
      <section className="section-shell" id="capabilities" style={{ paddingTop: 130, paddingBottom: 60 }}>
        <Reveal>
          <span className="section-kicker">01 / CORE CAPABILITIES</span>
        </Reveal>

        <div className="section-heading-block">
          <Reveal>
            <h2 className="section-title">
              Engineered with precision.<br />
              <span className="gradient-text">Powered by AI intelligence.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-description">
              Bridging modern software engineering with agentic capabilities to deliver robust, scalable,
              and delight-inducing user experiences.
            </p>
          </Reveal>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Bento Card 1: Full-Stack & Systems (Large) */}
          <Reveal className="bento-card">
            <div>
              <div className="bento-card-header">
                <div className="bento-icon-box">
                  <Code2 size={22} />
                </div>
                <span className="bento-number">01 / SYSTEMS</span>
              </div>
              <h3 className="bento-title">Full-Stack &amp; Systems Engineering</h3>
              <p className="bento-text">
                Developing resilient, type-safe web and desktop applications from clean architectural
                foundations to production cloud deployments.
              </p>
            </div>

            <div className="code-mockup">
              <div className="code-header">
                <span className="window-dot dot-red" />
                <span className="window-dot dot-yellow" />
                <span className="window-dot dot-green" />
                <span className="code-file">core/orchestrator.ts</span>
              </div>
              <div>
                <span className="code-syntax-comm">// Type-safe agent execution pipeline</span>
                <br />
                <span className="code-syntax-kw">async function</span>{" "}
                <span className="code-syntax-fn">dispatchMission</span>(goal: AgentIntent) &#123;
                <br />
                &nbsp;&nbsp;<span className="code-syntax-kw">const</span> engine ={" "}
                <span className="code-syntax-kw">await</span>{" "}
                <span className="code-syntax-fn">initSystemsCore</span>(&#123; rustSecurity:{" "}
                <span className="code-syntax-str">true</span> &#125;);
                <br />
                &nbsp;&nbsp;<span className="code-syntax-kw">return</span>{" "}
                <span className="code-syntax-kw">await</span> engine.
                <span className="code-syntax-fn">runAutonomousLoop</span>(goal);
                <br />
                &#125;
              </div>
            </div>

            <div className="tech-pills" style={{ marginTop: 20 }}>
              <span className="tech-pill">Next.js 15</span>
              <span className="tech-pill">React 19</span>
              <span className="tech-pill">TypeScript</span>
              <span className="tech-pill">Rust Core</span>
            </div>
          </Reveal>

          {/* Bento Card 2: AI Agent Systems */}
          <div className="bento-subgrid" style={{ gridTemplateColumns: "1fr" }}>
            <Reveal delay={0.08} className="bento-card">
              <div>
                <div className="bento-card-header">
                  <div className="bento-icon-box">
                    <Bot size={22} />
                  </div>
                  <span className="bento-number">02 / AGENTS</span>
                </div>
                <h3 className="bento-title">AI Agents &amp; Autonomous Workflows</h3>
                <p className="bento-text">
                  Designing multi-step agent toolsets, prompt frameworks, and self-verifying pipelines
                  that automate real-world complexity.
                </p>
              </div>

              <div className="workflow-nodes">
                <span className="node-box">User Goal</span>
                <span className="node-arrow">➔</span>
                <span className="node-box node-active">Agent Logic</span>
                <span className="node-arrow">➔</span>
                <span className="node-box">Tool Exec</span>
              </div>
            </Reveal>

            <Reveal delay={0.16} className="bento-card">
              <div>
                <div className="bento-card-header">
                  <div className="bento-icon-box">
                    <Workflow size={22} />
                  </div>
                  <span className="bento-number">03 / AUTOMATION</span>
                </div>
                <h3 className="bento-title">Workflow Automation &amp; Tooling</h3>
                <p className="bento-text">
                  Connecting APIs, local databases, and cloud infrastructure to eliminate repetitive
                  manual operations.
                </p>
              </div>
              <div className="tech-pills">
                <span className="tech-pill">&lt; 100ms Response</span>
                <span className="tech-pill">Event-Driven</span>
                <span className="tech-pill">Zero Manual Friction</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="section-shell projects-section" id="projects">
        <Reveal>
          <span className="section-kicker">02 / FEATURED WORK</span>
        </Reveal>

        <div className="section-heading-block">
          <Reveal>
            <h2 className="section-title">
              Selected Projects &amp;<br />
              <span className="gradient-text">Open Source Systems.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-description">
              A curated collection of public repositories showcasing systems engineering, desktop
              applications, and creative AI skills.
            </p>
          </Reveal>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.06}>
              <article className="project-card">
                <div>
                  <div className="project-top-row">
                    <span className="project-cat-badge">{project.category}</span>
                    <span className="project-status-pill">
                      <span className="project-status-dot" />
                      {project.status}
                    </span>
                  </div>

                  <h3 className="project-card-title">
                    <span>{project.name}</span>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <ArrowUpRight size={22} className="project-title-arrow" />
                    </a>
                  </h3>

                  <p className="project-card-desc">{project.description}</p>
                </div>

                <div className="project-card-footer">
                  <div className="tech-pills">
                    {project.stack.map((item) => (
                      <span key={item} className="tech-pill">
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-link"
                  >
                    <Github size={14} /> View Repository
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} style={{ textAlign: "center", marginTop: 48 }}>
          <a
            href="https://github.com/charitha-only?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Explore All Repositories on GitHub <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </section>

      {/* About & Dual Portrait Gallery */}
      <section className="section-shell about-section" id="about">
        <Reveal>
          <span className="section-kicker">03 / THE BUILDER</span>
        </Reveal>

        <div className="about-layout">
          <div>
            <Reveal>
              <h2 className="section-title" style={{ marginBottom: 24 }}>
                Curiosity first.<br />
                <span className="gradient-text">Build with intent.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08} className="about-prose">
              <p className="about-lead">
                I&apos;m an independent developer exploring what becomes possible when human ingenuity
                collaborates with modern AI tooling.
              </p>
              <p>
                Rather than treating AI as a novelty, I use AI-first workflows to research faster,
                architect deeper, and ship reliable software. My focus spans reactive web interfaces,
                secure desktop applications, mobile tools, and autonomous agent loops.
              </p>
              <p>
                I care deeply about software craftsmanship: smooth 60fps transitions, resilient error
                boundaries, accessible markup, and products people love using every day.
              </p>
            </Reveal>
          </div>

          {/* Dual Portrait Gallery */}
          <Reveal delay={0.15}>
            <div className="dual-portrait-grid">
              <div className="portrait-showcase-item">
                {!officeFailed ? (
                  <img
                    src="/images/portfolio-portrait-office-hd.webp"
                    alt="Charitha in workspace environment"
                    width={1000}
                    height={750}
                    loading="lazy"
                    onError={() => setOfficeFailed(true)}
                  />
                ) : (
                  <img
                    src="/images/portfolio-portrait-office.webp"
                    alt="Charitha in workspace environment"
                    width={728}
                    height={540}
                  />
                )}
                <div className="portrait-card-caption">
                  <span>01 — WORKSPACE PROFILE</span>
                  <span className="portrait-caption-tag">THE BUILDER</span>
                </div>
              </div>

              <div className="portrait-showcase-item">
                {!techFailed ? (
                  <img
                    src="/images/portfolio-portrait-tech.webp"
                    alt="Charitha in cinematic technology portrait"
                    width={728}
                    height={540}
                    loading="lazy"
                    onError={() => setTechFailed(true)}
                  />
                ) : (
                  <div className="portrait-card-caption">
                    <span>02 — COGNITIVE PROFILE</span>
                    <span className="portrait-caption-tag">THE THINKER</span>
                  </div>
                )}
                <div className="portrait-card-caption">
                  <span>02 — COGNITIVE PROFILE</span>
                  <span className="portrait-caption-tag">THE THINKER</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="approach-capsule">
            <span className="approach-tag">MY CORE PHILOSOPHY</span>
            <p className="approach-text">
              &ldquo;Think deeply. Build with AI. Test rigorously. Keep refining.&rdquo;
            </p>
            <Sparkles size={20} style={{ color: "var(--accent)" }} />
          </div>
        </Reveal>
      </section>

      {/* AI Toolkit Section */}
      <section className="section-shell toolkit-section" id="toolkit">
        <Reveal>
          <span className="section-kicker">04 / INTELLIGENCE TOOLKIT</span>
        </Reveal>

        <div className="section-heading-block">
          <Reveal>
            <h2 className="section-title">
              Working with<br />
              <span className="gradient-text">Augmented Intelligence.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-description">
              State-of-the-art AI systems form my everyday workbench—augmenting code generation,
              debugging, system refactoring, and creative development.
            </p>
          </Reveal>
        </div>

        <div className="toolkit-grid">
          {tools.map((tool, idx) => (
            <Reveal key={tool.name} delay={idx * 0.06}>
              <div className="tool-card">
                <div className="tool-symbol-box">{tool.symbol}</div>
                <div className="tool-info">
                  <h3>{tool.name}</h3>
                  <p>{tool.type}</p>
                </div>
                <div style={{ marginTop: "auto" }}>
                  <span className="tech-pill">{tool.status}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="skills-cloud-box">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Contact Section */}
      <section className="section-shell contact-section" id="contact">
        <Reveal>
          <div className="contact-card-cinematic">
            <span className="section-kicker">05 / GET IN TOUCH</span>
            <h2 className="contact-big-title">
              Let&apos;s build something<br />
              <span className="contact-outline-word">exceptional.</span>
            </h2>
            <p className="contact-desc">
              Have an ambitious vision, a challenging technical problem, or an agent automation concept?
              Let&apos;s connect and make it a reality.
            </p>

            <div className="contact-action-row">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn-copy-email"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                {copiedEmail ? "Email copied to clipboard!" : "contact@malsanka.com"}
              </button>

              <a
                href="https://github.com/charitha-only"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <Github size={16} /> Connect on GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <div className="footer-brand">
            C<span>.</span>
          </div>

          <div>Designed with intention · Built with curiosity · Sri Lanka</div>

          <div className="footer-links">
            <a href="https://github.com/charitha-only" target="_blank" rel="noreferrer">
              GitHub <ExternalLink size={12} />
            </a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
