"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aiTools } from "@/data/skills";
import { Cpu, Sparkles } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const icons: Record<string, string> = {
  "ChatGPT": "✦", "Gemini": "◈", "Sora": "◉",
  "Magnific AI": "⊕", "ImagineArt AI": "✺", "Adobe Firefly": "⌁", "Google Flow": "⌾",
};

export default function AISection() {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ai-lab" ref={ref} style={{ background: "#07070C", padding: "100px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        <motion.div
          initial={{ opacity: 0, y: 28 }} animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: EASE }} style={{ marginBottom: 60 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
            <div style={{ width: 24, height: 24, borderRadius: 7, background: "linear-gradient(135deg,#7C3AED,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Cpu size={13} color="#fff" />
            </div>
            <p style={{ color: "#A78BFA", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}>AI Integration</p>
          </div>
          <h2 style={{ fontSize: "clamp(40px,5.5vw,72px)", fontWeight: 700, color: "#fff", lineHeight: 1.08, marginBottom: 18 }}>
            Marketing Meets{" "}<span className="gradient-text">Artificial Intelligence</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17, maxWidth: 540, lineHeight: 1.75 }}>
            Leveraging cutting-edge AI tools to create content at scale, enhance creativity,
            and deliver measurable marketing results.
          </p>
        </motion.div>

        {/* Tools grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 14, marginBottom: 52 }}>
          {aiTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 24, scale: 0.88 }}
              animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.06, duration: 0.38, ease: EASE }}
              whileHover={{ y: -10, scale: 1.05, boxShadow: `0 20px 50px ${tool.color}25` }}
              style={{ position: "relative", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "26px 20px", cursor: "default", overflow: "hidden", transition: "box-shadow 0.25s" }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${tool.color}50,transparent)` }} />

              <motion.div
                whileHover={{ rotate: 12, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ width: 48, height: 48, borderRadius: 14, marginBottom: 16, background: `linear-gradient(135deg,${tool.color}25,${tool.color}0a)`, border: `1px solid ${tool.color}35`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: tool.color, fontWeight: 700 }}
              >
                {icons[tool.name] || "◆"}
              </motion.div>

              <p style={{ fontFamily: "'Space Grotesk',sans-serif", color: "#fff", fontSize: 15, fontWeight: 600, marginBottom: 7 }}>{tool.name}</p>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, lineHeight: 1.5 }}>{tool.description}</p>

              <div style={{ position: "absolute", top: 14, right: 14, width: 6, height: 6, borderRadius: "50%", background: tool.color, opacity: 0.7 }} />
            </motion.div>
          ))}

          {/* Grow card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: aiTools.length * 0.06, duration: 0.38 }}
            style={{ background: "rgba(255,255,255,0.015)", border: "1px dashed rgba(255,255,255,0.07)", borderRadius: 20, padding: "26px 20px", cursor: "default", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 10, minHeight: 150 }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <Sparkles size={20} color="rgba(255,255,255,0.15)" />
            </motion.div>
            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 13, lineHeight: 1.5 }}>Always exploring new tools</p>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.45, ease: EASE }}
          style={{ background: "rgba(124,58,237,0.04)", border: "1px solid rgba(124,58,237,0.15)", borderRadius: 26, padding: "44px 52px", position: "relative", overflow: "hidden" }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(124,58,237,0.55),transparent)" }} />
          <div style={{ position: "absolute", bottom: -80, right: -80, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,58,237,0.07),transparent 70%)", filter: "blur(20px)" }} />

          <div className="grid sm:grid-cols-3" style={{ gap: 44, alignItems: "center" }}>
            <div className="col-span-2">
              <p style={{ color: "#A78BFA", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>AI-Powered Marketing</p>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, color: "#fff", lineHeight: 1.25, marginBottom: 14 }}>
                Creativity enhanced by intelligence,{" "}
                <span className="gradient-text">not replaced by it.</span>
              </h3>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, lineHeight: 1.75 }}>
                AI tools help produce more content faster, but human strategy, empathy,
                and creative direction remain at the core of everything I build.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[{ v: "10x", l: "Content Speed" }, { v: "7+", l: "AI Tools" }, { v: "∞", l: "Workflows" }, { v: "100%", l: "Human Touch" }].map((s, i) => (
                <motion.div
                  key={s.l}
                  whileHover={{ scale: 1.06, borderColor: "rgba(124,58,237,0.3)" }}
                  initial={{ opacity: 0, y: 10 }} animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 14, padding: "16px 10px", textAlign: "center", transition: "border-color 0.2s" }}
                >
                  <p className="gradient-text" style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 26, fontWeight: 700 }}>{s.v}</p>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 5 }}>{s.l}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
