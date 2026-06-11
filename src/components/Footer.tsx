"use client";

import { motion } from "framer-motion";
import { Mail, Globe, Share2, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "AI Lab", href: "#ai-lab" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Mail, href: "mailto:shelarsamiksha1998@gmail.com", label: "Email" },
  { icon: Globe, href: "https://linkedin.com/in/samiksha-shelar-5464b51b7", label: "LinkedIn" },
  { icon: Share2, href: "#", label: "Social" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#FAF5FF", borderTop: "1px solid rgba(147,51,234,0.1)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(147,51,234,0.3), transparent)" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px 32px" }}>
        <div className="grid sm:grid-cols-3" style={{ gap: 40, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 34, height: 34, borderRadius: 10,
                background: "linear-gradient(135deg,#9333EA,#EC4899)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 16, color: "#fff",
              }}>S</div>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 15, color: "#2E1065" }}>Samiksha Shelar</span>
            </div>
            <p style={{ color: "rgba(88,28,135,0.45)", fontSize: 13, lineHeight: 1.7, maxWidth: 240 }}>
              Digital Marketing Strategist. Performance Marketer. AI Content Creator. Brand Builder.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p style={{ color: "rgba(88,28,135,0.38)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 18 }}>Navigation</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 16px" }}>
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" })}
                  style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", color: "rgba(88,28,135,0.5)", fontSize: 13, padding: 0, transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#7C3AED")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(88,28,135,0.5)")}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <p style={{ color: "rgba(88,28,135,0.38)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 18 }}>Connect</p>
            <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: 38, height: 38, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
                      background: "rgba(255,255,255,0.8)", border: "1px solid rgba(147,51,234,0.14)",
                      color: "rgba(88,28,135,0.5)", textDecoration: "none", transition: "all 0.2s",
                    }}
                  >
                    <Icon size={15} />
                  </motion.a>
                );
              })}
            </div>
            <p style={{ color: "rgba(88,28,135,0.45)", fontSize: 12, marginBottom: 4 }}>Mumbai, India</p>
            <p style={{ color: "rgba(88,28,135,0.45)", fontSize: 12 }}>+91 7045885811</p>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, borderTop: "1px solid rgba(147,51,234,0.08)" }}>
          <p style={{ color: "rgba(88,28,135,0.35)", fontSize: 12 }}>
            © {new Date().getFullYear()} Samiksha Shelar. All rights reserved.
          </p>
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            style={{
              width: 36, height: 36, borderRadius: 10, border: "1px solid rgba(147,51,234,0.14)",
              background: "rgba(255,255,255,0.8)", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "rgba(88,28,135,0.45)", transition: "all 0.2s",
            }}
          >
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
