"use client";

import React, { useEffect, useRef } from "react";
import { Activity, Cpu, Sparkles, Zap } from "lucide-react";

export function MotionGraphicCard() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * 2 || 600);
    let height = (canvas.height = canvas.offsetHeight * 2 || 750);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * 2 || 600;
      height = canvas.height = canvas.offsetHeight * 2 || 750;
    };

    window.addEventListener("resize", handleResize);

    let time = 0;
    const waveCount = 5;

    // Generative nodes for floating particles
    const particles = Array.from({ length: 32 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1,
      baseAlpha: Math.random() * 0.5 + 0.25
    }));

    const render = () => {
      time += 0.025;
      ctx.clearRect(0, 0, width, height);

      // Deep dark tech background
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        20,
        width * 0.5,
        height * 0.45,
        width * 0.85
      );
      bgGrad.addColorStop(0, "rgba(35, 26, 15, 0.45)");
      bgGrad.addColorStop(0.55, "rgba(14, 13, 11, 0.8)");
      bgGrad.addColorStop(1, "#090908");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Cyber Matrix Grid Lines
      ctx.strokeStyle = "rgba(214, 173, 122, 0.05)";
      ctx.lineWidth = 1;
      const gridSize = 36;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw floating neural nodes and connection lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(214, 173, 122, ${
              (1 - dist / 90) * 0.25
            })`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 235, 205, ${p.baseAlpha})`;
        ctx.fill();
      }

      // Generative 3D Flowing Holographic Waves
      const midY = height * 0.52;
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        const progress = w / waveCount;
        const amplitude = 32 + w * 12;
        const frequency = 0.007 - w * 0.0008;
        const phase = time * (1.2 + w * 0.3);

        const alpha = 0.18 + (w / waveCount) * 0.65;
        ctx.strokeStyle = `rgba(214, 173, 122, ${alpha})`;
        ctx.lineWidth = 2 + w * 0.6;

        for (let x = 0; x <= width; x += 6) {
          const envelope = Math.sin((x / width) * Math.PI); // tapering ends
          const y =
            midY +
            Math.sin(x * frequency + phase) * amplitude * envelope +
            Math.cos(x * frequency * 1.5 - phase * 0.8) *
              (amplitude * 0.45) *
              envelope;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Glowing Central AI Synapse Core
      const centerX = width * 0.5;
      const centerY = height * 0.42;

      // Orbit Ring 1 (expanding pulse)
      const pulse1 = (time * 1.5) % 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 30 + pulse1 * 60, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(214, 173, 122, ${(1 - pulse1) * 0.4})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Orbit Ring 2 (dashed rotating ring)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(time * 0.4);
      ctx.beginPath();
      ctx.arc(0, 0, 52, 0, Math.PI * 2);
      ctx.setLineDash([8, 8]);
      ctx.strokeStyle = "rgba(255, 240, 218, 0.35)";
      ctx.lineWidth = 1.8;
      ctx.stroke();
      ctx.restore();

      // Orbit Ring 3 (outer segmented circle)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-time * 0.25);
      ctx.beginPath();
      ctx.arc(0, 0, 74, 0, Math.PI * 2);
      ctx.setLineDash([14, 22]);
      ctx.strokeStyle = "rgba(214, 173, 122, 0.45)";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      // Core Glowing Orb
      const coreGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        28
      );
      coreGrad.addColorStop(0, "#ffffff");
      coreGrad.addColorStop(0.35, "rgba(255, 228, 185, 0.95)");
      coreGrad.addColorStop(0.7, "rgba(214, 173, 122, 0.5)");
      coreGrad.addColorStop(1, "rgba(214, 173, 122, 0)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, 28, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      // Frequency / Spectrum Equalizer Bars at bottom
      const barCount = 28;
      const barWidth = 4;
      const barGap = 6;
      const startX =
        centerX - (barCount * (barWidth + barGap)) / 2;
      const bottomY = height - 42;

      for (let b = 0; b < barCount; b++) {
        const barHeight =
          12 +
          Math.abs(Math.sin(time * 2.8 + b * 0.45)) * 36 +
          Math.cos(time * 1.5 + b * 0.3) * 14;
        const bx = startX + b * (barWidth + barGap);

        const barGrad = ctx.createLinearGradient(
          bx,
          bottomY - barHeight,
          bx,
          bottomY
        );
        barGrad.addColorStop(0, "#fff5e6");
        barGrad.addColorStop(0.6, "#d6ad7a");
        barGrad.addColorStop(1, "rgba(176, 132, 76, 0.2)");

        ctx.fillStyle = barGrad;
        ctx.fillRect(bx, bottomY - barHeight, barWidth, barHeight);
      }

      // Vertical Laser Scanning Line (sweeps from top to bottom)
      const scanY = ((time * 75) % (height + 60)) - 30;
      if (scanY >= 0 && scanY <= height) {
        const scanGrad = ctx.createLinearGradient(0, scanY, width, scanY);
        scanGrad.addColorStop(0, "rgba(214, 173, 122, 0)");
        scanGrad.addColorStop(0.5, "rgba(255, 245, 230, 0.45)");
        scanGrad.addColorStop(1, "rgba(214, 173, 122, 0)");

        ctx.strokeStyle = scanGrad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, scanY);
        ctx.lineTo(width, scanY);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="motion-graphic-box">
      {/* Background Interactive Canvas */}
      <canvas ref={canvasRef} className="motion-graphic-canvas" />

      {/* Futuristic HUD Glass Overlays */}
      <div className="motion-hud-overlay">
        {/* Top telemetry bar */}
        <div className="motion-hud-top">
          <div className="motion-hud-badge">
            <span className="motion-hud-dot" />
            <span>NEURAL CORE // ACTIVE</span>
          </div>
          <div className="motion-hud-fps">
            <Activity size={12} />
            <span>60 FPS</span>
          </div>
        </div>

        {/* Center telemetry crosshairs */}
        <div className="motion-hud-center">
          <div className="motion-crosshair tl">+</div>
          <div className="motion-crosshair tr">+</div>
          <div className="motion-crosshair bl">+</div>
          <div className="motion-crosshair br">+</div>
          <div className="motion-tech-label">
            <span>SYS_ORCHESTRATOR v2.5</span>
            <code>COGNITIVE STREAM</code>
          </div>
        </div>

        {/* Bottom telemetry indicators */}
        <div className="motion-hud-bottom">
          <div className="motion-stat-chip">
            <Cpu size={12} />
            <span>AGENTIC RUNTIME</span>
          </div>
          <div className="motion-stat-chip">
            <Zap size={12} />
            <span>LATENCY: 11ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
