"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const EASE = [0.22, 1, 0.36, 1] as const;

const overallStats = [
  { value: "1M+",    label: "Total Reach" },
  { value: "408",    label: "Leads Generated" },
  { value: "₹75.25", label: "Best CPL" },
  { value: "5",      label: "Brands Handled" },
];

export default function Projects() {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} style={{ background: "#050508", padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        <motion.div
          initial={{ opacity: 0, y: 28 }} animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: EASE }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}
        >
          <div>
            <p style={{ color: "#A78BFA", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Portfolio</p>
            <h2 style={{ fontSize: "clamp(40px,5.5vw,72px)", fontWeight: 700, color: "#fff", lineHeight: 1.08 }}>
              Featured <span className="gradient-text">Case Studies</span>
            </h2>
          </div>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 16, maxWidth: 320, lineHeight: 1.65 }}>
            Real campaigns. Real results. Meta Ads performance from 5 brands.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.12, duration: 0.4, ease: EASE }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, overflow: "hidden", marginBottom: 52 }}
        >
          {overallStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }} animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18 + i * 0.06, duration: 0.35 }}
              whileHover={{ background: "rgba(124,58,237,0.06)" }}
              style={{ padding: "22px 16px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none", transition: "background 0.2s" }}
            >
              <p className="gradient-text" style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 30, fontWeight: 700, marginBottom: 5 }}>{s.value}</p>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} inView={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
