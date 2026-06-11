"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setPct((p) => {
        if (p >= 100) { clearInterval(t); setTimeout(() => setDone(true), 350); return 100; }
        return p + Math.random() * 14 + 4;
      });
    }, 70);
    return () => clearInterval(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "fixed", inset: 0, zIndex: 9999, background: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
        >
          {/* Orbs */}
          <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", background: "rgba(147,51,234,0.06)", filter: "blur(80px)", top: "20%", left: "30%" }} />
          <div style={{ position: "absolute", width: 240, height: 240, borderRadius: "50%", background: "rgba(236,72,153,0.05)", filter: "blur(60px)", bottom: "25%", right: "25%" }} />

          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, position: "relative" }}
          >
            {/* Logo mark */}
            <div style={{
              width: 64, height: 64, borderRadius: 18,
              background: "linear-gradient(135deg, #9333EA, #EC4899)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 40px rgba(147,51,234,0.25)",
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 28, color: "#fff"
            }}>S</div>

            <p style={{ color: "rgba(88,28,135,0.4)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Loading Portfolio
            </p>

            {/* Progress bar */}
            <div style={{ width: 160, height: 2, background: "rgba(147,51,234,0.1)", borderRadius: 2, overflow: "hidden" }}>
              <motion.div
                style={{ height: "100%", background: "linear-gradient(90deg,#9333EA,#EC4899)", borderRadius: 2 }}
                animate={{ width: `${Math.min(pct, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <p style={{ color: "rgba(88,28,135,0.3)", fontSize: 11, fontFamily: "monospace" }}>
              {Math.min(Math.round(pct), 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
