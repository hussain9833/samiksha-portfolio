"use client";

import { motion } from "framer-motion";

const items = [
  "Performance Marketing", "★", "Meta Ads", "★", "Brand Strategy", "★",
  "AI Content Creation", "★", "Lead Generation", "★", "Creative Direction", "★",
  "Campaign Analytics", "★", "Social Media Strategy", "★", "Meta Ads Expert", "★",
];

function Strip({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <motion.div
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 0, whiteSpace: "nowrap" }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{
            display: "inline-flex", alignItems: "center",
            padding: "0 28px", fontSize: 13, fontWeight: 500, letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: item === "★" ? "#7C3AED" : "rgba(255,255,255,0.3)",
          }}>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div style={{ background: "#07070C", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", padding: "18px 0", overflow: "hidden" }}>
      <Strip />
      <div style={{ marginTop: 10 }}>
        <Strip reverse />
      </div>
    </div>
  );
}
