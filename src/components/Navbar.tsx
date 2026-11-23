"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "AI Lab", href: "#ai-lab" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = links.map((l) => l.href.slice(1)).reverse();
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 120 >= el.offsetTop) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          transition: "all 0.4s ease",
          ...(scrolled ? {
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(147,51,234,0.1)",
            boxShadow: "0 2px 20px rgba(147,51,234,0.06)",
          } : {}),
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", background: "none", border: "none" }}
          >
            <div style={{
              width: 34, height: 34, borderRadius: 10,
              background: "linear-gradient(135deg, #9333EA, #EC4899)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16, color: "#fff",
              boxShadow: "0 0 20px rgba(147,51,234,0.25)",
            }}>S</div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 15, color: "#2E1065", letterSpacing: "-0.01em" }}>
              Samiksha Shelar
            </span>
          </button>

          {/* Desktop links */}
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden md:flex">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                style={{
                  cursor: "pointer", background: "none", border: "none",
                  padding: "6px 14px", borderRadius: 8, fontSize: 14, fontWeight: 500,
                  color: active === l.href.slice(1) ? "#7C3AED" : "rgba(88,28,135,0.55)",
                  backgroundColor: active === l.href.slice(1) ? "rgba(147,51,234,0.07)" : "transparent",
                  transition: "all 0.2s",
                }}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={() => scrollTo("#contact")}
              className="hidden sm:block"
              style={{
                cursor: "pointer", border: "none", borderRadius: 10, padding: "8px 20px",
                background: "linear-gradient(135deg, #9333EA, #EC4899)",
                color: "#fff", fontSize: 13, fontWeight: 600,
                boxShadow: "0 4px 20px rgba(147,51,234,0.25)",
                transition: "opacity 0.2s",
              }}
            >
              Let's Talk
            </button>
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(88,28,135,0.6)", padding: 4 }}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
            style={{
              position: "fixed", top: 68, left: 0, right: 0, zIndex: 99,
              background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(147,51,234,0.1)",
              padding: "12px 24px 20px",
            }}
          >
            {links.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => { scrollTo(l.href); setOpen(false); }}
                style={{
                  display: "block", width: "100%", textAlign: "left", background: "none", border: "none",
                  padding: "14px 0", color: "rgba(88,28,135,0.7)", fontSize: 15, fontWeight: 500,
                  borderBottom: "1px solid rgba(147,51,234,0.07)", cursor: "pointer",
                }}
              >
                {l.label}
              </motion.button>
            ))}
            <button
              onClick={() => { scrollTo("#contact"); setOpen(false); }}
              style={{
                marginTop: 16, width: "100%", padding: "13px 0", borderRadius: 12, border: "none",
                background: "linear-gradient(135deg, #9333EA, #EC4899)",
                color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer",
              }}
            >Let's Talk</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
