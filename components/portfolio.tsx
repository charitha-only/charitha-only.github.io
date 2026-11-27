"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Bot, Check, CheckCircle2, Code2, Copy, Cpu,
  ExternalLink, Github, Layers3, Menu, Sparkles, Terminal,
  Workflow, X, Zap
} from "lucide-react";
import { projects } from "@/data/projects";
import { HumanEvolution } from "@/components/human-evolution";
import { MotionGraphicCard } from "@/components/motion-graphic-card";
import { ProjectMotionDemo } from "@/components/project-motion-demos";
import { KineticProjectCard } from "@/components/kinetic-project-card";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ClientShowcase } from "@/components/client-showcase";

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
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState("00 // HERO");
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setScrollPct(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 350;
      const contactEl = document.getElementById("contact");
      const toolkitEl = document.getElementById("toolkit");
      const aboutEl = document.getElementById("about");
      const projectsEl = document.getElementById("projects");
      const capEl = document.getElementById("capabilities");

      if (contactEl && scrollPos >= contactEl.offsetTop) {
        setActiveSection("05 // COMMISSIONS");
      } else if (toolkitEl && scrollPos >= toolkitEl.offsetTop) {
        setActiveSection("04 // TOOLKIT");
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop) {
        setActiveSection("03 // THE BUILDER");
      } else if (projectsEl && scrollPos >= projectsEl.offsetTop) {
        setActiveSection("02 // PROJECTS");
      } else if (capEl && scrollPos >= capEl.offsetTop) {
        setActiveSection("01 // CAPABILITIES");
      } else {
        setActiveSection("00 // HERO");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let currentPct = 0;
    const timer = setInterval(() => {
      currentPct += 1;
      setProgress(currentPct);

      if (currentPct >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setLoading(false);
        }, 350); // dramatic pause at 100% before reveal
      }
    }, 28); // 100 steps * 28ms = 2.8s progress + 0.35s pause = ~3.15s total

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  const getLoadingStep = (pct: number) => {
    if (pct < 22) return "ERA 01 // AUSTRALOPITHECUS (~4M BC) • BIPEDAL ORIGINS";
    if (pct < 44) return "ERA 02 // HOMO HABILIS (~2M BC) • FIRST TOOLMAKERS";
    if (pct < 66) return "ERA 03 // HOMO ERECTUS (~300K BC) • MASTERY OF FIRE";
    if (pct < 88) return "ERA 04 // HOMO SAPIENS (~50K BC) • COGNITIVE REVOLUTION";
    return "ERA 05 // HOMO SYNTHETICUS (PRESENT) • AI AGENT ARCHITECT";
  };

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
      {/* Top Laser Scroll Progress Bar */}
      <motion.div
        className="top-laser-scroll-bar"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating Scroll Telemetry HUD (fades in only when scrolling past hero) */}
      <div
        className="floating-scroll-hud"
        aria-hidden="true"
        style={{
          opacity: scrollPct > 2 ? 1 : 0,
          pointerEvents: "none",
          transition: "opacity 0.3s ease"
        }}
      >
        <span className="scroll-hud-dot" />
        <span className="scroll-hud-section">{activeSection}</span>
        <span className="scroll-hud-pct">{scrollPct}%</span>
      </div>

      {/* Cinematic Motion Graphics Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            className="preloader-overlay"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: -30,
              filter: "blur(12px)",
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }}
          >
            <div className="preloader-glow" aria-hidden="true" />
            <div className="preloader-grid" aria-hidden="true" />

            <div className="preloader-content">
              <motion.div
                className="preloader-badge"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="preloader-dot" />
                <span>MARCH OF PROGRESS // HUMAN EVOLUTION TO AI</span>
              </motion.div>

              <motion.h1
                className="preloader-title"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.08 }}
              >
                WELCOME TO MY <span className="gold-text">PORTFOLIO</span>
              </motion.h1>

              <motion.p
                className="preloader-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.16 }}
              >
                FROM PRIMAL TOOLMAKERS TO AUTONOMOUS AI ARCHITECTS
              </motion.p>

              {/* March of Progress: Human Evolution Motion Graphic */}
              <motion.div
                className="preloader-evolution-wrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
              >
                <HumanEvolution progress={progress} />
              </motion.div>

              {/* Code Compilation Progress Box */}
              <motion.div
                className="preloader-code-box"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
              >
                <div className="preloader-code-header">
                  <div className="preloader-code-header-left">
                    <Code2 size={13} />
                    <span>evolution/homo_syntheticus.ts</span>
                  </div>
                  <span>{progress < 100 ? "EVOLVING..." : "ONLINE"}</span>
                </div>

                <div className="preloader-counter-wrap">
                  <div className="preloader-percentage">
                    {progress.toString().padStart(2, "0")}
                    <span>%</span>
                  </div>
                  <div className="preloader-status-step">
                    {getLoadingStep(progress)}
                  </div>
                </div>

                {/* Progress bar track & fill */}
                <div
                  className="preloader-track"
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="preloader-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Terminal line */}
                <div className="preloader-terminal-line">
                  <span className="preloader-terminal-prompt">charitha@evolution:~$</span>
                  <span>{getLoadingStep(progress).toLowerCase()}</span>
                  <span className="preloader-cursor" />
                </div>
              </motion.div>

              {/* Tech Stack tags */}
              <motion.div
                className="preloader-tags"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="preloader-tag">NEXT.JS 15</span>
                <span className="preloader-tag">REACT 19</span>
                <span className="preloader-tag">AI AGENTS</span>
                <span className="preloader-tag">FULL STACK</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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

          {/* Luxury Color Theme Switcher */}
          <ThemeSwitcher />

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
          <div style={{ padding: "12px 0", display: "flex", justifyContent: "center" }}>
            <ThemeSwitcher />
          </div>
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
            <picture>
              <source srcSet="/images/portfolio-portrait-hero-transparent.webp" type="image/webp" />
              <img
                src="/images/portfolio-portrait-hero-transparent.png"
                alt="Charitha — Web & AI Developer"
                className="hero-subject-image"
                width={728}
                height={540}
                fetchPriority="high"
                onError={() => setPortraitFailed(true)}
              />
            </picture>
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
        <div className="hero-corner-left">
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
        </div>

        {/* Bottom Right Corner Content */}
        <div className="hero-corner-right">
          <div className="corner-slogan">
            <span>DESIGN THAT INSPIRES.</span>
            <span className="slogan-gold">CODE THAT PERFORMS.</span>
          </div>
          <div className="corner-origin">
            <span>Based in Sri Lanka</span>
            <span className="origin-name">/ Charitha</span>
          </div>
        </div>

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

        {/* Kinetic Projects Showcase: Scroll-Driven Drop-in Explanations & Synchronized Motion Graphics */}
        <div className="anime-projects-stack">
          {projects.map((project, index) => (
            <KineticProjectCard
              key={project.name}
              project={project}
              index={index}
            />
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

          {/* Dual Showcase: Black Portrait & Modern Motion Graphics */}
          <Reveal delay={0.15}>
            <div className="dual-portrait-grid">
              <div className="portrait-showcase-item">
                <div className="portrait-hud-badge">
                  <span className="portrait-hud-dot" />
                  <span>WORKSPACE PROFILE</span>
                </div>
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
                  <span>01 — THE BUILDER</span>
                  <span className="portrait-caption-tag">PRIMARY VISUAL</span>
                </div>
              </div>

              {/* Modern Animation Motion Graphic Showcase */}
              <div className="portrait-showcase-item motion-graphic-showcase">
                <MotionGraphicCard />
                <div className="portrait-card-caption">
                  <span>02 — COGNITIVE RUNTIME</span>
                  <span className="portrait-caption-tag">MOTION GRAPHICS</span>
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

      {/* Signature Client Commissions & Side-Slide Showcase */}
      <ClientShowcase
        onCopyEmail={handleCopyEmail}
        copiedEmail={copiedEmail}
      />

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
