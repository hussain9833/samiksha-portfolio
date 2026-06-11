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
            color: item === "★" ? "#EC4899" : "rgba(88,28,135,0.45)",
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
    <div style={{ background: "#FAF5FF", borderTop: "1px solid rgba(147,51,234,0.08)", borderBottom: "1px solid rgba(147,51,234,0.08)", padding: "18px 0", overflow: "hidden" }}>
      <Strip />
      <div style={{ marginTop: 10 }}>
        <Strip reverse />
      </div>
    </div>
  );
}
