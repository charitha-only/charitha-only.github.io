"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight, Check, Copy, ExternalLink, Github, Mail,
  MessageSquare, Sparkles, Star, Zap, Shield, Laptop
} from "lucide-react";

interface ClientShowcaseProps {
  onCopyEmail: () => void;
  copiedEmail: boolean;
}

export function ClientShowcase({ onCopyEmail, copiedEmail }: ClientShowcaseProps) {
  const reduce = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(true);

  const services = [
    {
      title: "Awwwards-Grade Portfolios & Sites",
      desc: "Custom typography, fluid 60fps motion graphics, and luxury dark aesthetics that convert."
    },
    {
      title: "Full-Stack Next.js 15 & React 19",
      desc: "Blazing fast server components, resilient error boundaries, and scalable web architectures."
    },
    {
      title: "Autonomous AI Agents & Workflows",
      desc: "Custom reasoning loops, prompt architecture, and intelligent workflow automation."
    },
    {
      title: "Rust Systems & Native Desktop Apps",
      desc: "Memory-safe, high-performance backends, zero-cloud local tools, and sandboxed IPC."
    }
  ];

  return (
    <section className="section-shell client-showcase-section" id="contact">
      <div className="client-showcase-container">
        {/* Left Side: Cinematic Portrait that smoothly slides into place */}
        <motion.div
          className="client-image-column"
          initial={reduce ? false : { opacity: 0, x: -45, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="client-image-card">
            {/* Corner Tech Reticles */}
            <div className="client-reticle tl">+</div>
            <div className="client-reticle tr">+</div>
            <div className="client-reticle bl">+</div>
            <div className="client-reticle br">+</div>

            {/* Top Availability Badge */}
            <div className="client-avail-badge">
              <span className="client-avail-dot" />
              <span>OPEN FOR SELECT COMMISSIONS</span>
            </div>

            {/* Cinematic Portrait */}
            <div className="client-portrait-wrap">
              <img
                src="/images/portfolio-portrait-tech.webp"
                alt="Charitha Malsanka — Available for Bespoke Web & AI Development"
                className="client-portrait-img"
                width={728}
                height={540}
                loading="lazy"
                onError={() => setImageLoaded(false)}
              />
              <div className="client-portrait-gradient-overlay" />
              <div className="client-scan-line" />
            </div>

            {/* Bottom ID Caption */}
            <div className="client-card-footer">
              <div className="client-footer-title">
                <span>CHARITHA MALSANKA</span>
                <code>FULL STACK &amp; AI BUILDER</code>
              </div>
              <div className="client-footer-tag">SRI LANKA // GLOBAL</div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Business & Freelance Offering (Slides in from side) */}
        <motion.div
          className="client-content-column"
          initial={reduce ? false : { opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="client-kicker-row">
            <span className="section-kicker">05 / BESPOKE DIGITAL COMMISSIONS</span>
            <span className="client-guarantee-pill">
              <Sparkles size={11} /> 100% BESPOKE ARCHITECTURE
            </span>
          </div>

          <h2 className="client-headline">
            Want an experience like this?<br />
            <span className="gradient-text">Let&apos;s build your advantage.</span>
          </h2>

          <p className="client-lead-text">
            Every animation, 60fps shader, and autonomous agent on this site was architected
            by hand with zero shortcuts. If you need a high-impact portfolio, custom web platform,
            or intelligent AI system that stands out worldwide, I am currently taking on select client partnerships.
          </p>

          {/* Service Capabilities Grid */}
          <div className="client-services-grid">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                className="client-service-item"
                initial={reduce ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              >
                <div className="client-service-header">
                  <span className="client-service-bullet">✦</span>
                  <h4>{svc.title}</h4>
                </div>
                <p>{svc.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Direct Action Row */}
          <div className="client-actions-row">
            <button
              type="button"
              onClick={onCopyEmail}
              className="client-action-btn primary"
              aria-label="Copy email address"
            >
              {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
              <span>{copiedEmail ? "Email Copied to Clipboard!" : "contact@malsanka.com"}</span>
            </button>

            <a
              href="mailto:contact@malsanka.com?subject=Project%20Inquiry%20via%20Portfolio&body=Hi%20Charitha,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project..."
              className="client-action-btn secondary"
            >
              <Mail size={15} />
              <span>Send Direct Inquiry</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://github.com/charitha-only"
              target="_blank"
              rel="noreferrer"
              className="client-action-btn ghost"
              aria-label="View Charitha on GitHub"
            >
              <Github size={16} />
            </a>
          </div>

          <div className="client-trust-badge">
            <span className="client-dot-pulse" />
            <span>DIRECT FOUNDER COLLABORATION • ZERO AGENCY OVERHEAD • GLOBAL AVAILABILITY</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
