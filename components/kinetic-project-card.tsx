"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, type Variants } from "framer-motion";
import {
  CheckCircle2, Github, Sparkles, ArrowRight,
  Activity, Play, Pause, Zap, Cpu
} from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectMotionDemo } from "@/components/project-motion-demos";

interface KineticProjectCardProps {
  project: Project;
  index: number;
}

// Spring Drop-In Variants for Staggered Scroll Animation ("watenna oni")
const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

const dropItem: Variants = {
  hidden: { opacity: 0, y: -26, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 24,
      mass: 0.8
    }
  }
};

export function KineticProjectCard({ project, index }: KineticProjectCardProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { margin: "-80px 0px -80px 0px" });

  const totalSteps = project.howItWorks.length;

  // Auto-cycle through the 3 "How It Works" steps to keep text & motion graphic in sync
  useEffect(() => {
    if (!isInView || isPaused || totalSteps === 0) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % totalSteps);
    }, 3600);

    return () => clearInterval(timer);
  }, [isInView, isPaused, totalSteps]);

  const handleStepClick = (sIdx: number) => {
    setActiveStep(sIdx);
    setIsPaused(true);
    // Resume auto-cycle after 10s of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <motion.article
      ref={cardRef}
      className="anime-project-card kinetic-card-interactive"
      id={`project-${project.demoKey}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={cardVariants}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient background glow bound to current theme */}
      <div className="kinetic-card-ambient-glow" aria-hidden="true" />

      {/* ===================================================================
          LEFT COLUMN: TEXT EXPLANATIONS (DROP IN SYNCHRONIZED ON SCROLL)
          =================================================================== */}
      <div className="anime-project-details kinetic-details-column">
        {/* Drop Item 1: Category Badge & Status Pill */}
        <motion.div variants={dropItem} className="anime-project-top-row">
          <span className="project-cat-badge">{project.category}</span>
          <div className="kinetic-status-cluster">
            <span className="kinetic-sync-pill">
              <Activity size={10} className="kinetic-pulse-icon" />
              <span>STAGE {String(activeStep + 1).padStart(2, "0")} / {String(totalSteps).padStart(2, "0")}</span>
            </span>
            <span className="project-status-pill">
              <span className="project-status-dot" />
              {project.status}
            </span>
          </div>
        </motion.div>

        {/* Drop Item 2: Project Title & Number */}
        <motion.div variants={dropItem}>
          <h3 className="anime-project-title">
            <span className="anime-project-num">{project.number}</span>
            <span>{project.name}</span>
          </h3>
          <p className="anime-project-tagline">{project.tagline}</p>
        </motion.div>

        {/* Drop Item 3: Project Description Overview */}
        <motion.p variants={dropItem} className="project-card-desc">
          {project.description}
        </motion.p>

        {/* Drop Item 4: Primary Function Box with Laser Scanner */}
        <motion.div variants={dropItem} className="anime-purpose-box kinetic-purpose-box">
          <div className="kinetic-purpose-header">
            <span className="anime-section-label">PRIMARY FUNCTION:</span>
            <span className="kinetic-live-indicator">ACTIVE ARCHITECTURE</span>
          </div>
          <p className="anime-purpose-text">{project.purpose}</p>
          <div className="kinetic-scanner-line" />
        </motion.div>

        {/* Drop Item 5: HOW IT WORKS (Synchronized Step Cards that react to the Motion Graphic) */}
        <motion.div variants={dropItem} className="anime-how-box kinetic-how-box">
          <div className="kinetic-how-header">
            <span className="anime-section-label">HOW IT WORKS // MOTION ARCHITECTURE:</span>
            <span className="kinetic-step-hint">CLICK STEP TO PREVIEW IN DEMO</span>
          </div>

          <div className="kinetic-steps-container">
            {project.howItWorks.map((step, sIdx) => {
              const isActive = sIdx === activeStep;
              // Extract step title (before the colon) and description (after the colon)
              const parts = step.split(":");
              const stepTitle = parts[0] || `Phase ${sIdx + 1}`;
              const stepBody = parts.slice(1).join(":").trim();

              return (
                <div
                  key={sIdx}
                  className={`kinetic-step-card ${isActive ? "active-step" : ""}`}
                  onClick={() => handleStepClick(sIdx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleStepClick(sIdx);
                    }
                  }}
                  aria-label={`Jump demo to step ${sIdx + 1}: ${stepTitle}`}
                >
                  <div className="kinetic-step-left">
                    <span className="kinetic-step-index">
                      {isActive ? (
                        <span className="kinetic-step-active-dot" />
                      ) : (
                        `0${sIdx + 1}`
                      )}
                    </span>
                  </div>

                  <div className="kinetic-step-content">
                    <div className="kinetic-step-heading">
                      <span className="kinetic-step-title">{stepTitle}</span>
                      {isActive && (
                        <span className="kinetic-active-badge">
                          <span>IN DEMO</span>
                          <ArrowRight size={10} />
                        </span>
                      )}
                    </div>
                    {stepBody && (
                      <p className="kinetic-step-body">{stepBody}</p>
                    )}
                  </div>

                  {/* Animated Progress Rail for Active Step */}
                  {isActive && isInView && !isPaused && (
                    <motion.div
                      className="kinetic-step-progress-rail"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 3.6, ease: "linear" }}
                      style={{ transformOrigin: "0%" }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Drop Item 6: Telemetry Metrics Cards */}
        <motion.div variants={dropItem} className="anime-metrics-grid">
          {project.metrics.map((m, mIdx) => (
            <div key={mIdx} className="anime-metric-card kinetic-metric-card">
              <span className="anime-metric-val">{m.value}</span>
              <span className="anime-metric-label">{m.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Drop Item 7: Footer Tech Stack & Repository Link */}
        <motion.div variants={dropItem} className="project-card-footer">
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
        </motion.div>
      </div>

      {/* ===================================================================
          RIGHT COLUMN: MOTION GRAPHIC (SYNCHRONIZED WITH TEXT EXPLANATIONS)
          =================================================================== */}
      <div className="anime-project-visual kinetic-visual-column">
        <div className="anime-visual-frame kinetic-visual-frame">
          {/* Top Bar with Stage Pills & Live Telemetry Controls */}
          <div className="anime-visual-topbar kinetic-visual-topbar">
            <div className="anime-visual-tag">
              <Sparkles size={11} className="kinetic-sparkle-icon" />
              <span>KINETIC MOTION GRAPHIC // {project.name.toUpperCase()}</span>
            </div>

            {/* Stage Selector Buttons */}
            <div className="kinetic-stage-pills">
              {project.howItWorks.map((_, sIdx) => (
                <button
                  key={sIdx}
                  type="button"
                  className={`kinetic-stage-pill ${activeStep === sIdx ? "active" : ""}`}
                  onClick={() => handleStepClick(sIdx)}
                  aria-label={`Select stage ${sIdx + 1}`}
                >
                  <span className="stage-pill-dot" />
                  <span>S{sIdx + 1}</span>
                </button>
              ))}
              <button
                type="button"
                className="kinetic-play-toggle"
                onClick={() => setIsPaused(!isPaused)}
                aria-label={isPaused ? "Resume auto-play" : "Pause auto-play"}
                title={isPaused ? "Auto-sync paused (click to resume)" : "Auto-sync playing (click to pause)"}
              >
                {isPaused ? <Play size={10} /> : <Pause size={10} />}
              </button>
            </div>
          </div>

          {/* Active Stage Banner */}
          <div className="kinetic-stage-banner">
            <div className="kinetic-stage-banner-left">
              <Zap size={11} className="stage-banner-icon" />
              <span>STAGE {String(activeStep + 1).padStart(2, "0")}:</span>
              <strong className="stage-banner-name">
                {project.howItWorks[activeStep]?.split(":")[0] || `Phase ${activeStep + 1}`}
              </strong>
            </div>
            <span className="kinetic-stage-sync-tag">SYNCHRONIZED</span>
          </div>

          {/* The Kinetic Motion Graphic Demo */}
          <div className="kinetic-demo-body">
            <ProjectMotionDemo demoKey={project.demoKey} activeStep={activeStep} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
