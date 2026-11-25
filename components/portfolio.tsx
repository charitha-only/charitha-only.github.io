"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowDownRight, ArrowUpRight, Bot, Braces, Check,
  Code2, Cpu, Github, Layers3, Menu, MousePointer2, Workflow, X,
  Sparkles, Zap, Globe2, Terminal, WandSparkles
} from "lucide-react";
import { projects } from "@/data/projects";

const tools = [
  { name: "OpenAI Codex", type: "AI coding agent", icon: "✳" },
  { name: "Google Antigravity", type: "AI development environment", icon: "◈" },
  { name: "Grok", type: "AI assistant", icon: "𝕏" },
  { name: "OpenBot", type: "AI tooling & workflows", icon: "⌘" }
];

const capabilities = [
  { icon: Bot, title: "AI agent creation", text: "Designing useful agents, structured instructions and multi-step AI workflows." },
  { icon: Workflow, title: "Automation systems", text: "Connecting tools and repeatable processes to reduce manual work." },
  { icon: Code2, title: "Full-stack development", text: "Building responsive interfaces and application logic from idea to deployment." },
  { icon: Layers3, title: "Product engineering", text: "Turning rough concepts into usable desktop, web and mobile experiences." }
];

const nav = [
  ["About", "#about"], ["Capabilities", "#capabilities"], ["Work", "#work"], ["Toolkit", "#toolkit"], ["Contact", "#contact"]
];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: reduce ? 0 : 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");
  const [portraitFailed, setPortraitFailed] = useState(false);

  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en", {
      timeZone: "Asia/Colombo", hour: "2-digit", minute: "2-digit", hour12: false
    }).format(new Date()));
    update();
    const timer = window.setInterval(update, 30000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Charitha home">C<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={14} /></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <motion.nav className="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={16}/></a>)}
        </motion.nav>
      )}

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <Reveal><div className="eyebrow"><span className="status-dot" /> INDEPENDENT DEVELOPER · SRI LANKA <span className="eyebrow-line" /></div></Reveal>
          <Reveal delay={0.08}>
            <h1>Designing<br /><span className="muted-word">what’s</span> next<span className="outline-word">.</span></h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="hero-description">I&apos;m Charitha — a <strong>developer and AI builder</strong> creating thoughtful digital products, intelligent tools and automation systems.</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="hero-actions">
              <a className="button button-light" href="#work">Explore my work <ArrowDownRight size={17}/></a>
              <a className="text-link" href="#about">Get to know me <ArrowUpRight size={15}/></a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="hero-meta">
              <div><span className="meta-label">BASED IN</span><span>Sri Lanka · UTC +5:30</span></div>
              <div><span className="meta-label">LOCAL TIME</span><span>{time || "—"} <span className="live-dot" /></span></div>
              <div><span className="meta-label">FOCUS</span><span>AI-first development</span></div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="hero-visual-wrap">
          <div className="hero-visual">
            <div className="portrait-frame">
              {!portraitFailed ? (
                <img src="/images/portfolio-portrait-dark-hero.webp" alt="Charitha, developer and AI builder" fetchPriority="high" onError={() => setPortraitFailed(true)} />
              ) : (
                <div className="portrait-fallback">
                  <span className="fallback-initials">C.</span>
                  <span className="fallback-caption">PORTRAIT IMAGE<br/>WILL APPEAR HERE</span>
                </div>
              )}
              <div className="portrait-vignette" />
              <div className="portrait-index">01 / CREATOR PROFILE</div>
            </div>
            <div className="visual-stamp"><span>AI</span><small>IDEAS INTO<br/>REALITY</small></div>
            <div className="visual-caption"><span>INDEPENDENT BUILDER</span><span>2026 — NOW</span></div>
          </div>
        </Reveal>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
        <div className="hero-index">01 — 05</div>
      </section>

      <section className="ticker" aria-label="Areas of focus">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, i) => <div className="ticker-set" key={i}>
            {["AI VIBE CODING", "AGENT SYSTEMS", "AUTOMATION", "FULL-STACK", "PRODUCT BUILDING"].map((item) => <span key={item}>{item}<i>✳</i></span>)}
          </div>)}
        </div>
      </section>

      <section className="content-section section-shell about-section" id="about">
        <Reveal><div className="section-kicker">01 / THE PERSON BEHIND THE BUILDS</div></Reveal>
        <div className="about-grid">
          <Reveal><h2>Curiosity first.<br/><span className="muted-word">Build with intent.</span></h2></Reveal>
          <Reveal delay={0.1}>
            <div className="about-copy">
              <p className="large-copy">I&apos;m an independent developer exploring what becomes possible when human ideas meet modern AI tools.</p>
              <p>I use AI-assisted coding as a practical way to research, design, build and improve real software. My work spans web experiences, desktop applications, mobile products, AI agent workflows and automation.</p>
              <p>I care about more than getting code to run. I care about the details — a clear user experience, thoughtful engineering, useful features and products people enjoy using.</p>
              <a className="underlined-link" href="https://github.com/charitha-only" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={15}/></a>
            </div>
          </Reveal>
        </div>
        <Reveal><div className="portrait-gallery" aria-label="Portrait photography"><figure><img src="/images/portfolio-portrait-office.webp" alt="Charitha in a modern workspace" loading="lazy" /><figcaption>01 — THE BUILDER</figcaption></figure><figure><img src="/images/portfolio-portrait-tech.webp" alt="Charitha in a cinematic technology portrait" loading="lazy" /><figcaption>02 — THE THINKER</figcaption></figure></div></Reveal>
        <Reveal><div className="principle-strip"><span>MY APPROACH</span><p>Think deeply. Build with AI. Test carefully. Keep improving.</p><Sparkles size={18}/></div></Reveal>
      </section>

      <section className="content-section section-shell capabilities-section" id="capabilities">
        <Reveal><div className="section-kicker">02 / WHAT I DO</div></Reveal>
        <div className="section-heading-row">
          <Reveal><h2>From a blank page<br/>to <span className="muted-word">something real.</span></h2></Reveal>
          <Reveal><p className="section-intro">A flexible, AI-first approach to building digital products — from the first sketch to the final details.</p></Reveal>
        </div>
        <div className="capability-grid">
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return <Reveal key={item.title} delay={i * 0.07}>
              <article className="capability-card">
                <div className="capability-top"><Icon size={21}/><span>0{i + 1}</span></div>
                <h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight className="card-arrow" size={18}/>
              </article>
            </Reveal>;
          })}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-shell">
          <Reveal><div className="section-kicker">03 / SELECTED WORK <span className="kicker-count">05 PROJECTS</span></div></Reveal>
          <div className="section-heading-row work-heading">
            <Reveal><h2>Ideas made<br/><span className="muted-word">tangible.</span></h2></Reveal>
            <Reveal><p className="section-intro">A selection of experiments and products from my GitHub. Each one is a chance to learn, solve a problem and push an idea further.</p></Reveal>
          </div>
          <div className="project-list">
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={i * 0.035}>
                <a className="project-row" href={project.href} target="_blank" rel="noreferrer">
                  <span className="project-number">{project.number}</span>
                  <div className="project-main">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <div className="project-side"><span>{project.status}</span><span className="project-open"><ArrowUpRight size={19}/></span></div>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal><a className="all-projects" href="https://github.com/charitha-only?tab=repositories" target="_blank" rel="noreferrer">Explore all repositories <ArrowUpRight size={16}/></a></Reveal>
        </div>
      </section>

      <section className="content-section section-shell toolkit-section" id="toolkit">
        <Reveal><div className="section-kicker">04 / MY AI TOOLKIT</div></Reveal>
        <div className="toolkit-grid">
          <Reveal><div><h2>Working with<br/><span className="muted-word">intelligence.</span></h2><p className="section-intro toolkit-intro">AI is part of my everyday build process — helping me move from research and planning to implementation, iteration and automation.</p><div className="toolkit-note"><Zap size={17}/><span>Tools are collaborators. Product thinking still leads.</span></div></div></Reveal>
          <div className="tool-list">
            {tools.map((tool, i) => <Reveal key={tool.name} delay={i * 0.06}><div className="tool-row"><span className="tool-symbol">{tool.icon}</span><div><h3>{tool.name}</h3><p>{tool.type}</p></div><span className="tool-arrow"><ArrowUpRight size={16}/></span></div></Reveal>)}
          </div>
        </div>
        <Reveal><div className="capability-cloud">
          {["AI-assisted coding", "Agent design", "Workflow automation", "Prompt engineering", "React", "Next.js", "TypeScript", "Node.js", "Rust", "Flutter", "Git & GitHub", "Vercel"].map((skill) => <span key={skill}>{skill}</span>)}
        </div></Reveal>
        <p className="small-note">The toolkit reflects technologies and platforms I work with or explore. Specific tools and frameworks vary by project.</p>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-inner">
          <Reveal><div className="section-kicker">05 / HAVE AN IDEA?</div></Reveal>
          <Reveal><h2>Let&apos;s make<br/>it <span className="outline-word">happen.</span></h2></Reveal>
          <Reveal><p>Have a meaningful idea, an interesting challenge or a project in mind? Let’s build something useful.</p></Reveal>
          <Reveal><div className="contact-actions">
            <a className="button button-light" href="https://github.com/charitha-only" target="_blank" rel="noreferrer">Connect on GitHub <Github size={17}/></a>
            <a className="text-link" href="https://github.com/charitha-only?tab=repositories" target="_blank" rel="noreferrer">Explore my work <ArrowUpRight size={15}/></a>
          </div></Reveal>
          <div className="contact-orbit orbit-one"/><div className="contact-orbit orbit-two"/>
        </div>
      </section>

      <footer className="footer section-shell">
        <a className="brand footer-brand" href="#top">C<span>.</span></a>
        <span>Designed with intention · Built with curiosity.</span>
        <div><a href="https://github.com/charitha-only" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={12}/></a><span>© {new Date().getFullYear()} CHARITHA</span></div>
      </footer>
    </main>
  );
}