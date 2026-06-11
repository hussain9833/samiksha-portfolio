"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/experience";
import { ChevronDown, Calendar, Briefcase } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<string>("zar-media");

  return (
    <section id="experience" ref={ref} style={{ background: "#FAF5FF", padding: "100px 0" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>

        <motion.div
          initial={{ opacity: 0, y: 28 }} animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: EASE }} style={{ marginBottom: 72 }}
        >
          <p style={{ color: "#EC4899", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Career</p>
          <h2 style={{ fontSize: "clamp(40px,5.5vw,72px)", fontWeight: 700, color: "#2E1065", lineHeight: 1.08 }}>
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }} animate={visible ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ position: "absolute", left: 19, top: 8, bottom: 8, width: 1, background: "linear-gradient(180deg,#9333EA,rgba(236,72,153,0.3),transparent)", transformOrigin: "top", display: "none" }}
            className="sm:block"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {experiences.map((exp, i) => {
              const open = expanded === exp.id;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -28, filter: "blur(4px)" }}
                  animate={visible ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: EASE }}
                  style={{ position: "relative" }}
                  className="sm:pl-14"
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }} animate={visible ? { scale: 1 } : {}}
                    transition={{ delay: i * 0.07 + 0.1, type: "spring", stiffness: 400 }}
                    className="hidden sm:block"
                    style={{ position: "absolute", left: 12, top: 24, width: 14, height: 14, borderRadius: "50%", background: exp.color, border: "2px solid #FAF5FF", boxShadow: `0 0 14px ${exp.color}80` }}
                  />

                  {/* Card */}
                  <div style={{ background: open ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.8)", border: `1px solid ${open ? "rgba(147,51,234,0.2)" : "rgba(147,51,234,0.1)"}`, borderRadius: 20, overflow: "hidden", transition: "border-color 0.3s, box-shadow 0.3s", boxShadow: open ? "0 8px 40px rgba(147,51,234,0.1)" : "0 2px 12px rgba(147,51,234,0.04)" }}>
                    <button
                      onClick={() => setExpanded(open ? "" : exp.id)}
                      style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "22px 26px", cursor: "pointer", display: "flex", alignItems: "flex-start", gap: 16, justifyContent: "space-between" }}
                    >
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                          {exp.current && (
                            <motion.span
                              animate={{ opacity: [1, 0.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              style={{ background: "rgba(22,163,74,0.1)", border: "1px solid rgba(22,163,74,0.25)", color: "#16A34A", fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", padding: "2px 10px", borderRadius: 100, textTransform: "uppercase" }}
                            >Current</motion.span>
                          )}
                          <div style={{ width: 7, height: 7, borderRadius: "50%", background: exp.color, boxShadow: `0 0 8px ${exp.color}80`, flexShrink: 0 }} />
                        </div>
                        <h3 style={{ color: "#2E1065", fontWeight: 700, fontSize: 18, marginBottom: 4 }}>{exp.company}</h3>
                        <p style={{ color: "#9333EA", fontSize: 14, fontWeight: 500 }}>{exp.role}</p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10, flexShrink: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 5, color: "rgba(88,28,135,0.45)", fontSize: 12 }}>
                          <Calendar size={11} />{exp.period}
                        </div>
                        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25, ease: EASE }}>
                          <ChevronDown size={15} color="rgba(88,28,135,0.4)" />
                        </motion.div>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: EASE }}
                          style={{ overflow: "hidden" }}
                        >
                          <div style={{ padding: "4px 26px 26px", borderTop: "1px solid rgba(147,51,234,0.08)" }}>
                            <p style={{ color: "rgba(88,28,135,0.6)", fontSize: 15, lineHeight: 1.75, marginBottom: 22, marginTop: 18 }}>{exp.description}</p>
                            <p style={{ color: "rgba(88,28,135,0.38)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Key Achievements</p>
                            <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                              {exp.achievements.map((a, j) => (
                                <motion.li
                                  key={j}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: j * 0.04, ease: EASE }}
                                  style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, color: "rgba(88,28,135,0.65)" }}
                                >
                                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: exp.color, flexShrink: 0, marginTop: 7, boxShadow: `0 0 6px ${exp.color}` }} />
                                  {a}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
