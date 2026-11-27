"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, Terminal, Play, Pause, RefreshCw, Cpu,
  CheckCircle2, Lock, FileText, BookOpen, Layers, Sparkles,
  Zap, ArrowRight, Folder, ChevronRight, Sliders, Laptop
} from "lucide-react";

// ============================================================================
// 01. AEGIS DESKTOP: RUST SYSTEMS & CAPABILITY-BASED IPC SANDBOX VISUALIZER
// ============================================================================
export function AegisIpcDemo({ activeStep = 0 }: { activeStep?: number }) {
  const [packets, setPackets] = useState<number[]>([1, 2]);
  const [activeCap, setActiveCap] = useState("crypto.sign");
  const [simulatedAttack, setSimulatedAttack] = useState(false);
  const [ipcLatency, setIpcLatency] = useState("0.38ms");

  const triggerIpc = () => {
    setPackets((prev) => [...prev.slice(-3), Date.now()]);
    setIpcLatency((0.25 + Math.random() * 0.25).toFixed(2) + "ms");
  };

  useEffect(() => {
    if (activeStep === 1) {
      const interval = setInterval(() => {
        setPackets((prev) => [...prev.slice(-4), Date.now()]);
        setIpcLatency((0.22 + Math.random() * 0.18).toFixed(2) + "ms");
      }, 800);
      return () => clearInterval(interval);
    }
  }, [activeStep]);

  const capabilities = [
    { name: "crypto.sign", status: "ALLOW", delay: "0.2ms" },
    { name: "fs.readSafe", status: "ALLOW", delay: "0.4ms" },
    { name: "net.whitelisted", status: "ALLOW", delay: "0.5ms" },
    { name: "sys.raw_socket", status: "BLOCKED", delay: "EPERM" }
  ];

  return (
    <div className={`anime-demo-container aegis-demo step-mode-${activeStep}`}>
      {/* Top HUD Status */}
      <div className="anime-demo-header">
        <div className={`anime-hud-chip green ${activeStep === 2 ? "active-glow" : ""}`}>
          <ShieldCheck size={13} />
          <span>CAPABILITY ENCLAVE // POST-QUANTUM</span>
        </div>
        <div className={`anime-hud-chip amber ${activeStep === 1 ? "active-glow" : ""}`}>
          <Zap size={13} />
          <span>IPC: {ipcLatency}</span>
        </div>
      </div>

      {/* IPC Sandbox Pipeline Visualization */}
      <div className="aegis-pipeline">
        {/* Node 1: Rust Core */}
        <div className={`aegis-node rust-node ${activeStep === 0 ? "active-highlight" : ""}`}>
          <div className="aegis-node-ring" />
          <Cpu size={22} className="aegis-icon" />
          <span className="aegis-node-title">Rust Core</span>
          <span className="aegis-node-sub">Ring 0 • Memory Safe</span>
          {activeStep === 0 && <span className="kinetic-node-tag">ACTIVE FOCUS</span>}
        </div>

        {/* Center: Encrypted IPC Bridge with animated flying packets */}
        <div className={`aegis-bridge ${activeStep === 1 ? "active-highlight" : ""}`}>
          <div className="aegis-bridge-wire" />
          <div className="aegis-bridge-wire-pulse" />

          {/* Animated packets */}
          <motion.div
            key={packets[packets.length - 1]}
            className="aegis-packet"
            initial={{ left: "10%", opacity: 0 }}
            animate={{ left: "85%", opacity: [0, 1, 1, 0] }}
            transition={{ duration: activeStep === 1 ? 0.8 : 1.2, ease: "easeInOut" }}
          >
            <Lock size={10} />
          </motion.div>

          <div className="aegis-bridge-badge">
            <span>AES-256-GCM IPC</span>
          </div>
        </div>

        {/* Node 2: React Web Frontend */}
        <div className={`aegis-node web-node ${activeStep === 1 ? "active-highlight" : ""}`}>
          <div className="aegis-node-ring web" />
          <Laptop size={22} className="aegis-icon web" />
          <span className="aegis-node-title">Web Viewport</span>
          <span className="aegis-node-sub">Sandboxed UI</span>
        </div>
      </div>

      {/* Capability Permission Inspector */}
      <div className={`aegis-caps-list ${activeStep === 2 ? "active-highlight" : ""}`}>
        <div className="aegis-caps-title">
          <span>CAPABILITY ACCESS CONTROL LIST:</span>
          <button onClick={triggerIpc} className="anime-interactive-btn">
            <RefreshCw size={11} /> Test IPC Roundtrip
          </button>
        </div>
        <div className="aegis-caps-grid">
          {capabilities.map((cap) => (
            <div
              key={cap.name}
              className={`aegis-cap-card ${
                cap.status === "BLOCKED" ? "blocked" : "allowed"
              }`}
            >
              <div className="aegis-cap-header">
                <code>{cap.name}</code>
                <span className="aegis-status-tag">{cap.status}</span>
              </div>
              <span className="aegis-cap-meta">{cap.delay}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 02. TOONFORGE AI STUDIO: AI STORYBOARDING & VISUAL IDENTITY CONTINUITY
// ============================================================================
export function ToonForgeStoryDemo({ activeStep }: { activeStep?: number }) {
  const [activeFrame, setActiveFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (activeStep !== undefined) {
      setActiveFrame(Math.min(activeStep, 3));
      setIsPlaying(false);
    }
  }, [activeStep]);

  const frames = [
    {
      id: "01",
      beat: "CHARACTER ANCHOR",
      action: "Facial Latent Embeddings",
      tag: "Identity Lock",
      desc: "Locking hair physics, jawline geometry, and signature collar.",
      seed: "Seed: #9401"
    },
    {
      id: "02",
      beat: "DYNAMIC COMPOSITION",
      action: "Cinematic Low-Angle",
      tag: "Scene 14B",
      desc: "Enforcing amber directional rim lighting across protagonist silhouette.",
      seed: "Seed: #9402"
    },
    {
      id: "03",
      beat: "MOTION INTERPOLATION",
      action: "Temporal Frame Blending",
      tag: "24 FPS Continuity",
      desc: "Zero character deformation across high-speed action arcs.",
      seed: "Seed: #9403"
    },
    {
      id: "04",
      beat: "FINAL VIDEO SYNTH",
      action: "Video Agent Assembly",
      tag: "Master Render",
      desc: "Complete scene rendered with visual fidelity and audio sync markers.",
      seed: "Seed: #9404"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % frames.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isPlaying, frames.length]);

  return (
    <div className="anime-demo-container toonforge-demo">
      {/* Top Header */}
      <div className="anime-demo-header">
        <div className="anime-hud-chip purple">
          <Sparkles size={13} />
          <span>VISUAL CONTINUITY // 98.2% EMBEDDING RETENTION</span>
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="anime-interactive-btn"
        >
          {isPlaying ? <Pause size={11} /> : <Play size={11} />}
          <span>{isPlaying ? "Pause Sequence" : "Play Sequence"}</span>
        </button>
      </div>

      {/* Storyboard Reel (4 Cinematic Frames) */}
      <div className="storyboard-track">
        {frames.map((frame, idx) => {
          const isActive = idx === activeFrame;
          return (
            <motion.div
              key={frame.id}
              className={`storyboard-card ${isActive ? "active" : ""}`}
              onClick={() => {
                setActiveFrame(idx);
                setIsPlaying(false);
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
            >
              <div className="storyboard-card-top">
                <span className="storyboard-num">FRAME {frame.id}</span>
                <span className="storyboard-tag">{frame.tag}</span>
              </div>

              {/* Cinematic Silhouette Canvas Preview */}
              <div className="storyboard-canvas">
                <svg viewBox="0 0 160 100" className="storyboard-svg">
                  <defs>
                    <linearGradient id={`frameGrad-${idx}`} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#d6ad7a" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#b0844c" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  {/* Perspective grid */}
                  <line x1="10" y1="90" x2="150" y2="90" stroke="rgba(214,173,122,0.2)" strokeWidth="1" />
                  <line x1="20" y1="90" x2="50" y2="30" stroke="rgba(214,173,122,0.1)" strokeWidth="1" />
                  <line x1="140" y1="90" x2="110" y2="30" stroke="rgba(214,173,122,0.1)" strokeWidth="1" />

                  {/* Character Silhouette with identity anchor */}
                  <circle cx={45 + idx * 22} cy="42" r="14" fill={`url(#frameGrad-${idx})`} />
                  <path
                    d={`M ${30 + idx * 22} 90 L ${45 + idx * 22} 56 L ${60 + idx * 22} 90 Z`}
                    fill={`url(#frameGrad-${idx})`}
                  />
                  {/* Identity target reticle */}
                  {isActive && (
                    <circle
                      cx={45 + idx * 22}
                      cy="42"
                      r="20"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1.2"
                      strokeDasharray="3,3"
                    />
                  )}
                </svg>
              </div>

              <div className="storyboard-card-info">
                <span className="storyboard-beat">{frame.beat}</span>
                <span className="storyboard-seed">{frame.seed}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Active Narrative Prompt Bar */}
      <div className="toonforge-prompt-box">
        <div className="toonforge-prompt-label">
          <Terminal size={12} />
          <span>LATENT PROMPT ORCHESTRATOR:</span>
        </div>
        <p className="toonforge-prompt-text">
          &quot;Scene {frames[activeFrame].id}: {frames[activeFrame].action} — {frames[activeFrame].desc}&quot;
        </p>
      </div>
    </div>
  );
}

// ============================================================================
// 03. SARA NOTE: COZY OFFLINE-FIRST DESKTOP NOTEBOOK & LOCAL DATA ENGINE
// ============================================================================
export function SaraNoteDemo({ activeStep = 0 }: { activeStep?: number }) {
  const [selectedFolder, setSelectedFolder] = useState("Architecture");
  const [typedChars, setTypedChars] = useState(0);

  useEffect(() => {
    if (activeStep === 0) setSelectedFolder("Architecture");
    if (activeStep === 1) setSelectedFolder("AI Agents");
    if (activeStep === 2) setSelectedFolder("Drafts");
  }, [activeStep]);

  const noteSnippet = `# Systems Engineering Notebook\n> 100% On-Device • Zero Cloud Dependency\n\n- [x] SQLite ACID storage (instant reads)\n- [x] Atomic JSON snapshot rollbacks\n- [x] Zero network telemetry or cloud lag`;

  useEffect(() => {
    const timer = setInterval(() => {
      setTypedChars((prev) => (prev >= noteSnippet.length ? 15 : prev + 1));
    }, 45);
    return () => clearInterval(timer);
  }, [noteSnippet.length]);

  return (
    <div className={`anime-demo-container saranote-demo step-mode-${activeStep}`}>
      {/* Desktop App Window Header */}
      <div className="desktop-window-header">
        <div className="window-dots">
          <span className="window-dot red" />
          <span className="window-dot yellow" />
          <span className="window-dot green" />
        </div>
        <div className="window-title">Sara Note v1.4.0 — [Offline-First Vault]</div>
        <div className="window-badge">SQLite Local</div>
      </div>

      {/* Desktop Split View: Sidebar + Editor */}
      <div className="saranote-body">
        {/* Sidebar */}
        <div className="saranote-sidebar">
          <div className="saranote-folder-title">VAULT FOLDERS</div>
          {["Architecture", "AI Agents", "Drafts", "Archive"].map((folder) => (
            <div
              key={folder}
              className={`saranote-folder-item ${
                selectedFolder === folder ? "active" : ""
              }`}
              onClick={() => setSelectedFolder(folder)}
            >
              <Folder size={12} />
              <span>{folder}</span>
            </div>
          ))}

          <div className="saranote-stats">
            <span className="saranote-stat-item">142 Local Notes</span>
            <span className="saranote-stat-item">0 KB Cloud Sync</span>
          </div>
        </div>

        {/* Note Editor Pane */}
        <div className="saranote-editor">
          <div className="saranote-editor-header">
            <div className="saranote-doc-name">
              <FileText size={13} />
              <span>systems_spec_2025.md</span>
            </div>
            <span className="saranote-saved-badge">
              <CheckCircle2 size={11} /> Saved (0.4ms)
            </span>
          </div>

          <pre className="saranote-textarea">
            <code>{noteSnippet.slice(0, typedChars)}</code>
            <span className="anime-cursor" />
          </pre>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 04. SARA PDF READER: 120 FPS FLUTTER DOCUMENT RENDERING ENGINE
// ============================================================================
export function SaraPdfDemo({ activeStep = 0 }: { activeStep?: number }) {
  const [currentPage, setCurrentPage] = useState(42);
  const [format, setFormat] = useState<"PDF" | "EPUB" | "DOCX">("PDF");
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (activeStep === 0) setFormat("PDF");
    if (activeStep === 1) setFormat("EPUB");
    if (activeStep === 2) {
      setIsFlipping(true);
      setCurrentPage((p) => (p >= 248 ? 1 : p + 1));
      setTimeout(() => setIsFlipping(false), 350);
    }
  }, [activeStep]);

  const flipPage = () => {
    setIsFlipping(true);
    setCurrentPage((p) => (p >= 248 ? 1 : p + 1));
    setTimeout(() => setIsFlipping(false), 350);
  };

  return (
    <div className={`anime-demo-container sarapdf-demo step-mode-${activeStep}`}>
      {/* Top Format Selector Header */}
      <div className="anime-demo-header">
        <div className="pdf-format-tabs">
          {(["PDF", "EPUB", "DOCX"] as const).map((fmt) => (
            <button
              key={fmt}
              className={`pdf-tab ${format === fmt ? "active" : ""}`}
              onClick={() => setFormat(fmt)}
            >
              {fmt}
            </button>
          ))}
        </div>
        <div className="anime-hud-chip green">
          <Sliders size={12} />
          <span>SKIA SHADER // 120 FPS</span>
        </div>
      </div>

      {/* Interactive Mobile Tablet Bezel Frame */}
      <div className="pdf-bezel">
        <div className="pdf-document-sheet">
          {/* Document Header */}
          <div className="pdf-sheet-top">
            <span className="pdf-doc-title">Distributed Systems &amp; Compilers.pdf</span>
            <span className="pdf-page-indicator">
              Page {currentPage} of 248
            </span>
          </div>

          {/* Document Body with animated 3D Page Flip */}
          <motion.div
            className={`pdf-sheet-content ${isFlipping ? "flipping" : ""}`}
            animate={isFlipping ? { rotateY: -15, scale: 0.98 } : { rotateY: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pdf-paragraph-skeleton w-90" />
            <div className="pdf-paragraph-skeleton w-100" />
            <div className="pdf-paragraph-skeleton w-75" />
            <div className="pdf-diagram-box">
              <Layers size={18} />
              <span>GPU TILE BUFFER // ZERO-JANK VECTOR TEXT REFLOW</span>
            </div>
            <div className="pdf-paragraph-skeleton w-85" />
            <div className="pdf-paragraph-skeleton w-60" />
          </motion.div>

          {/* Document Control Footer */}
          <div className="pdf-sheet-bottom">
            <div className="pdf-scrubber-track">
              <div
                className="pdf-scrubber-fill"
                style={{ width: `${(currentPage / 248) * 100}%` }}
              />
            </div>
            <button onClick={flipPage} className="anime-interactive-btn primary">
              <BookOpen size={12} /> Flip Page Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 05. DONI UI: KINETIC COMPONENT LIBRARY & SPRING PHYSICS PLAYGROUND
// ============================================================================
export function DoniUiSpringDemo({ activeStep = 0 }: { activeStep?: number }) {
  const [springStrength, setSpringStrength] = useState(1);
  const [activeToggle, setActiveToggle] = useState(true);
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    setPulseCount((c) => c + 1);
  }, [activeStep]);

  const kickSpring = () => {
    setPulseCount((c) => c + 1);
  };

  return (
    <div className={`anime-demo-container doniui-demo step-mode-${activeStep}`}>
      {/* Top Header */}
      <div className="anime-demo-header">
        <div className="anime-hud-chip amber">
          <Zap size={13} />
          <span>SPRING CALCULUS // DAMPING: 14 • STIFFNESS: 170</span>
        </div>
        <button onClick={kickSpring} className="anime-interactive-btn primary">
          <RefreshCw size={11} /> Kick Spring Wave
        </button>
      </div>

      {/* Interactive Spring Widgets Showcase */}
      <div className="doni-widgets-grid">
        {/* Kinetic Magnetic Button */}
        <motion.button
          key={`btn-${pulseCount}`}
          className="doni-magnetic-btn"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          animate={{ y: [0, -10, 6, -3, 0] }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Sparkles size={14} />
          <span>Magnetic Spring Pill</span>
        </motion.button>

        {/* Kinetic Toggle Switch */}
        <div
          className={`doni-spring-switch ${activeToggle ? "on" : "off"}`}
          onClick={() => setActiveToggle(!activeToggle)}
        >
          <motion.div
            className="doni-switch-thumb"
            layout
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
          />
          <span className="doni-switch-label">
            {activeToggle ? "SPRING MOTION: ON" : "SPRING MOTION: OFF"}
          </span>
        </div>
      </div>

      {/* Live Spring Waveform Graph (Anime.js Style Damped Sine Wave) */}
      <div className="doni-graph-card">
        <div className="doni-graph-header">
          <span>REAL-TIME DAMPING CURVE: f(t) = e^(-ζωt) · cos(ωd t)</span>
          <code>60 FPS SMOOTH</code>
        </div>
        <svg viewBox="0 0 360 80" className="doni-graph-svg">
          <line x1="0" y1="40" x2="360" y2="40" stroke="rgba(214,173,122,0.18)" strokeWidth="1" strokeDasharray="4,4" />
          <motion.path
            key={`wave-${pulseCount}`}
            d="M 10 40 Q 50 -10 90 40 T 170 40 T 250 40 T 330 40"
            fill="none"
            stroke="#d6ad7a"
            strokeWidth="2.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN WRAPPER: PICKS THE RIGHT DEMO ACCORDING TO DEMO KEY & ACTIVE STEP
// ============================================================================
export function ProjectMotionDemo({
  demoKey,
  activeStep = 0
}: {
  demoKey: string;
  activeStep?: number;
}) {
  switch (demoKey) {
    case "aegis":
      return <AegisIpcDemo activeStep={activeStep} />;
    case "toonforge":
      return <ToonForgeStoryDemo activeStep={activeStep} />;
    case "saranote":
      return <SaraNoteDemo activeStep={activeStep} />;
    case "sarapdf":
      return <SaraPdfDemo activeStep={activeStep} />;
    case "doniui":
      return <DoniUiSpringDemo activeStep={activeStep} />;
    default:
      return <AegisIpcDemo activeStep={activeStep} />;
  }
}
