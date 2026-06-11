"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Brain, Palette, Zap, BarChart3, Users } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const cards = [
  { icon: Target,   label: "Performance Marketing", desc: "ROI-focused campaigns built on data" },
  { icon: Palette,  label: "Branding",               desc: "Identities that resonate and endure" },
  { icon: Brain,    label: "AI Content Creation",     desc: "Scaling content with intelligent tools" },
  { icon: Zap,      label: "Creative Direction",      desc: "Visual storytelling with strategy behind it" },
  { icon: BarChart3,label: "Campaign Management",     desc: "End-to-end planning and execution" },
  { icon: Users,    label: "Team Leadership",         desc: "Guiding creative teams to deliver results" },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi",   level: "Native" },
  { name: "Marathi", level: "Native" },
  { name: "Turkish", level: "Basic" },
];

export default function About() {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} style={{ background: "#FAF5FF", padding: "100px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: EASE }} style={{ marginBottom: 72 }}
        >
          <p style={{ color: "#EC4899", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Who I Am</p>
          <h2 style={{ fontSize: "clamp(40px,5.5vw,72px)", fontWeight: 700, color: "#2E1065", lineHeight: 1.08 }}>
            The Marketer Behind{" "}
            <span className="gradient-text">The Strategy</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2" style={{ gap: 72, alignItems: "start" }}>
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }} animate={visible ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.45, delay: 0.08, ease: EASE }}
              style={{ fontSize: 19, color: "rgba(88,28,135,0.75)", lineHeight: 1.8, marginBottom: 22 }}
            >
              Creative and performance-driven Digital Marketing Professional with{" "}
              <span style={{ color: "#2E1065", fontWeight: 600 }}>3+ years of experience</span> in
              performance marketing, branding, social media strategy, AI-powered content creation,
              and creative direction.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }} animate={visible ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.45, delay: 0.14, ease: EASE }}
              style={{ fontSize: 16, color: "rgba(88,28,135,0.5)", lineHeight: 1.85, marginBottom: 40 }}
            >
              I bridge the gap between data and creativity — building brands that don't just look good,
              but convert. From running Meta Ads that generate hundreds of qualified leads to directing
              full visual identities, I bring strategic thinking to every touchpoint.
            </motion.p>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -24 }} animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.18, ease: EASE }}
              whileHover={{ scale: 1.01, borderColor: "rgba(147,51,234,0.25)" }}
              style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(147,51,234,0.14)", borderRadius: 18, padding: "22px 26px", marginBottom: 16, transition: "border-color 0.2s", boxShadow: "0 4px 16px rgba(147,51,234,0.05)" }}
            >
              <p style={{ color: "rgba(88,28,135,0.38)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>Education</p>
              <p style={{ color: "#2E1065", fontWeight: 600, fontSize: 16 }}>Bhartiya Vidya Bhavan's College</p>
              <p style={{ color: "#9333EA", fontSize: 14, marginTop: 5 }}>Bachelor's Degree in Marketing</p>
              <p style={{ color: "rgba(88,28,135,0.4)", fontSize: 13, marginTop: 4 }}>2021 – 2023</p>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: -24 }} animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.22, ease: EASE }}
              style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(147,51,234,0.14)", borderRadius: 18, padding: "22px 26px", boxShadow: "0 4px 16px rgba(147,51,234,0.05)" }}
            >
              <p style={{ color: "rgba(88,28,135,0.38)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 18 }}>Languages</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {languages.map((l, i) => (
                  <motion.div
                    key={l.name}
                    initial={{ opacity: 0, scale: 0.9 }} animate={visible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.28 + i * 0.05, duration: 0.35 }}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: "linear-gradient(135deg,#9333EA,#EC4899)", flexShrink: 0 }} />
                    <div>
                      <p style={{ color: "#2E1065", fontSize: 14, fontWeight: 500 }}>{l.name}</p>
                      <p style={{ color: "rgba(88,28,135,0.45)", fontSize: 12 }}>{l.level}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {cards.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 28, scale: 0.94 }}
                  animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.06 + i * 0.06, duration: 0.4, ease: EASE }}
                  whileHover={{ y: -6, scale: 1.03, borderColor: "rgba(147,51,234,0.25)", boxShadow: "0 16px 40px rgba(147,51,234,0.1)" }}
                  style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(147,51,234,0.12)", borderRadius: 20, padding: "24px 22px", cursor: "default", transition: "border-color 0.2s, box-shadow 0.2s", boxShadow: "0 4px 16px rgba(147,51,234,0.05)" }}
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{ width: 44, height: 44, borderRadius: 13, background: "rgba(147,51,234,0.08)", border: "1px solid rgba(147,51,234,0.18)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}
                  >
                    <Icon size={20} color="#9333EA" />
                  </motion.div>
                  <p style={{ color: "#2E1065", fontSize: 14, fontWeight: 600, marginBottom: 7 }}>{c.label}</p>
                  <p style={{ color: "rgba(88,28,135,0.5)", fontSize: 13, lineHeight: 1.55 }}>{c.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
