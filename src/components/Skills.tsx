"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills, designTools, marketingTools } from "@/data/skills";

const EASE = [0.22, 1, 0.36, 1] as const;

function Bar({ name, level, delay, visible }: { name: string; level: number; delay: number; visible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={visible ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.38, ease: EASE }}
      style={{ marginBottom: 24 }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 9 }}>
        <span style={{ color: "rgba(88,28,135,0.8)", fontSize: 15, fontWeight: 500 }}>{name}</span>
        <motion.span
          initial={{ opacity: 0 }} animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5, duration: 0.3 }}
          style={{ color: "#9333EA", fontSize: 13, fontWeight: 700 }}
        >{level}%</motion.span>
      </div>
      <div style={{ height: 5, background: "rgba(147,51,234,0.1)", borderRadius: 6, overflow: "hidden", position: "relative" }}>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={visible ? { width: `${level}%`, opacity: 1 } : { width: 0 }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
          style={{ height: "100%", borderRadius: 6, background: "linear-gradient(90deg, #9333EA, #EC4899)", position: "relative" }}
        >
          {/* Shimmer */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ delay: delay + 1, duration: 0.8, repeat: Infinity, repeatDelay: 4 }}
            style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)", borderRadius: 6 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function ToolChip({ name, icon, delay, visible }: { name: string; icon: string; delay: number; visible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 16 }}
      animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.35, ease: EASE }}
      whileHover={{ y: -6, scale: 1.06, borderColor: "rgba(147,51,234,0.35)", boxShadow: "0 12px 32px rgba(147,51,234,0.12)" }}
      style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(147,51,234,0.12)", borderRadius: 16, padding: "18px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, cursor: "default", transition: "border-color 0.2s, box-shadow 0.2s", boxShadow: "0 4px 12px rgba(147,51,234,0.05)" }}
    >
      <div style={{ width: 42, height: 42, borderRadius: 12, background: "linear-gradient(135deg,rgba(147,51,234,0.1),rgba(236,72,153,0.06))", border: "1px solid rgba(147,51,234,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#9333EA", fontSize: 12, fontWeight: 700 }}>{icon}</div>
      <span style={{ color: "rgba(88,28,135,0.6)", fontSize: 12, textAlign: "center", lineHeight: 1.35 }}>{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} style={{ background: "#FFFFFF", padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        <motion.div
          initial={{ opacity: 0, y: 28 }} animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: EASE }} style={{ marginBottom: 72 }}
        >
          <p style={{ color: "#EC4899", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Expertise</p>
          <h2 style={{ fontSize: "clamp(40px,5.5vw,72px)", fontWeight: 700, color: "#2E1065", lineHeight: 1.08 }}>
            Skills & <span className="gradient-text">Proficiency</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2" style={{ gap: 72 }}>
          {/* Bars */}
          <div>
            <motion.p
              initial={{ opacity: 0 }} animate={visible ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }} style={{ color: "rgba(88,28,135,0.38)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 36 }}
            >Core Competencies</motion.p>
            {skills.map((s, i) => (
              <Bar key={s.name} name={s.name} level={s.level} delay={i * 0.05} visible={visible} />
            ))}
          </div>

          {/* Tools */}
          <div>
            <motion.p
              initial={{ opacity: 0 }} animate={visible ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }} style={{ color: "rgba(88,28,135,0.38)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 36 }}
            >Tools & Platforms</motion.p>

            <p style={{ color: "rgba(88,28,135,0.45)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Design</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 36 }}>
              {designTools.map((t, i) => <ToolChip key={t.name} name={t.name} icon={t.icon} delay={0.04 * i} visible={visible} />)}
            </div>

            <p style={{ color: "rgba(88,28,135,0.45)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Analytics & Marketing</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
              {marketingTools.map((t, i) => <ToolChip key={t.name} name={t.name} icon={t.icon} delay={0.04 * i + 0.16} visible={visible} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
