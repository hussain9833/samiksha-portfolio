"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

function Pill({ label, value }: { label: string; value: string }) {
  return (
    <div style={{
      background: "rgba(147,51,234,0.05)", border: "1px solid rgba(147,51,234,0.12)",
      borderRadius: 12, padding: "14px 10px", textAlign: "center",
    }}>
      <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: "#2E1065", marginBottom: 4 }}>{value}</p>
      <p style={{ color: "rgba(88,28,135,0.5)", fontSize: 11 }}>{label}</p>
    </div>
  );
}

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
      onClick={onClose}
    >
      <div style={{ position: "absolute", inset: 0, background: "rgba(46,16,101,0.5)", backdropFilter: "blur(16px)" }} />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 24 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative", width: "100%", maxWidth: 780,
          maxHeight: "88vh", overflowY: "auto", background: "#FFFFFF",
          borderRadius: 24, border: "1px solid rgba(147,51,234,0.15)",
          boxShadow: "0 40px 120px rgba(46,16,101,0.2), 0 0 0 1px rgba(147,51,234,0.08)",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 16, right: 16, zIndex: 10,
            width: 34, height: 34, borderRadius: "50%", border: "1px solid rgba(147,51,234,0.15)",
            background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "rgba(88,28,135,0.55)",
          }}
        ><X size={14} /></button>

        {/* Cover image */}
        <div style={{ position: "relative", width: "100%", height: 240, background: "#FAF5FF", borderRadius: "24px 24px 0 0", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 50%, ${project.color}20, transparent 70%)` }} />
          <Image src={project.coverImage} alt={project.title} fill style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(255,255,255,0.9))" }} />
        </div>

        <div style={{ padding: "28px 32px 32px" }}>
          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
            {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>

          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 24, fontWeight: 700, color: "#2E1065", marginBottom: 6, lineHeight: 1.2 }}>{project.title}</h2>
          <p style={{ color: "rgba(88,28,135,0.45)", fontSize: 13, marginBottom: 24 }}>{project.category}</p>

          {/* Overview */}
          <div style={{ marginBottom: 24 }}>
            <p style={{ color: "rgba(88,28,135,0.35)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>Overview</p>
            <p style={{ color: "rgba(88,28,135,0.7)", fontSize: 14, lineHeight: 1.75 }}>{project.overview}</p>
          </div>

          {/* Objective & Strategy */}
          {(project.objective || project.strategy) && (
            <div className="grid sm:grid-cols-2" style={{ gap: 14, marginBottom: 24 }}>
              {project.objective && (
                <div style={{ background: "rgba(147,51,234,0.04)", border: "1px solid rgba(147,51,234,0.1)", borderRadius: 14, padding: "18px 20px" }}>
                  <p style={{ color: "rgba(88,28,135,0.35)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>Objective</p>
                  <p style={{ color: "rgba(88,28,135,0.65)", fontSize: 13, lineHeight: 1.65 }}>{project.objective}</p>
                </div>
              )}
              {project.strategy && (
                <div style={{ background: "rgba(147,51,234,0.04)", border: "1px solid rgba(147,51,234,0.1)", borderRadius: 14, padding: "18px 20px" }}>
                  <p style={{ color: "rgba(88,28,135,0.35)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>Strategy</p>
                  <p style={{ color: "rgba(88,28,135,0.65)", fontSize: 13, lineHeight: 1.65 }}>{project.strategy}</p>
                </div>
              )}
            </div>
          )}

          {/* Phases */}
          {project.phases && (
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
              {project.phases.map((ph) => (
                <div key={ph.title} style={{ background: "rgba(147,51,234,0.04)", border: "1px solid rgba(147,51,234,0.1)", borderRadius: 14, padding: "18px 20px" }}>
                  <p style={{ color: "#9333EA", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>{ph.title}</p>
                  <p style={{ color: "rgba(88,28,135,0.6)", fontSize: 13, marginBottom: 16 }}>{ph.description}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
                    {ph.results.map((r) => <Pill key={r.label} label={r.label} value={r.value} />)}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Results */}
          {!project.phases && (
            <div style={{ marginBottom: 8 }}>
              <p style={{ color: "rgba(88,28,135,0.35)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Campaign Results</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                {project.results.map((r) => <Pill key={r.label} label={r.label} value={r.value} />)}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="card-hover"
        onClick={() => setOpen(true)}
        style={{
          background: "rgba(255,255,255,0.9)", border: "1px solid rgba(147,51,234,0.1)",
          borderRadius: 20, overflow: "hidden", cursor: "pointer",
          boxShadow: "0 4px 16px rgba(147,51,234,0.05)",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative", height: 200, background: "#FAF5FF", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 60% 40%, ${project.color}20, transparent 65%)` }} />
          <Image
            src={project.coverImage} alt={project.title} fill
            style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
            className="group-hover:scale-105"
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.85))" }} />
          {/* Badge */}
          <div style={{ position: "absolute", top: 14, left: 14 }}>
            <span className="tag">{project.category.split("•")[0].trim()}</span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "20px 22px 22px" }}>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", color: "#2E1065", fontWeight: 700, fontSize: 15, marginBottom: 8, lineHeight: 1.35 }}>{project.title}</h3>
          <p style={{ color: "rgba(88,28,135,0.5)", fontSize: 13, marginBottom: 16, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {project.overview}
          </p>

          {/* Metrics */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 18 }}>
            {project.results.slice(0, 2).map((r) => (
              <div key={r.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: project.color }} />
                <span style={{ color: "rgba(88,28,135,0.55)", fontSize: 12 }}>
                  <span style={{ color: "#2E1065", fontWeight: 600 }}>{r.value}</span> {r.label}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#9333EA", fontSize: 13, fontWeight: 500 }}>
            View Case Study <ArrowRight size={13} />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && <Modal project={project} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
