"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Globe, ArrowRight, Copy, Check } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const details = [
  { icon: MapPin, label: "Location", value: "Andheri East, MIDC, Mumbai", href: null,    copy: false },
  { icon: Phone,  label: "Phone",    value: "+91 7045885811",                href: "tel:+917045885811",                            copy: true  },
  { icon: Mail,   label: "Email",    value: "shelarsamiksha1998@gmail.com",  href: "mailto:shelarsamiksha1998@gmail.com",          copy: true  },
  { icon: Globe,  label: "LinkedIn", value: "samiksha-shelar-5464b51b7",    href: "https://linkedin.com/in/samiksha-shelar-5464b51b7", copy: false },
];

function DetailRow({ icon: Icon, label, value, href, copy }: typeof details[0]) {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(value).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };
  const inner = (
    <motion.div
      whileHover={{ x: 5, borderColor: "rgba(124,58,237,0.3)" }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 22px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, transition: "border-color 0.2s" }}
    >
      <div style={{ width: 44, height: 44, borderRadius: 13, flexShrink: 0, background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon size={18} color="#A78BFA" />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginBottom: 3 }}>{label}</p>
        <p style={{ color: "#fff", fontSize: 14, fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{value}</p>
      </div>
      {copy && (
        <button onClick={handleCopy} style={{ background: "none", border: "none", cursor: "pointer", padding: 6, borderRadius: 8, color: "rgba(255,255,255,0.3)", flexShrink: 0 }}>
          {copied ? <Check size={14} color="#4ADE80" /> : <Copy size={14} />}
        </button>
      )}
      {href && !copy && <ArrowRight size={14} color="rgba(255,255,255,0.2)" style={{ flexShrink: 0 }} />}
    </motion.div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ display: "block", textDecoration: "none" }}>{inner}</a>
  ) : <div>{inner}</div>;
}

export default function Contact() {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} style={{ background: "#050508", padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid lg:grid-cols-2" style={{ gap: 72, alignItems: "start" }}>

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28, filter: "blur(4px)" }}
            animate={visible ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <p style={{ color: "#A78BFA", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Get In Touch</p>
            <h2 style={{ fontSize: "clamp(40px,5vw,68px)", fontWeight: 700, color: "#fff", lineHeight: 1.08, marginBottom: 20 }}>
              Let's Build Something{" "}<span className="gradient-text">Extraordinary</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17, lineHeight: 1.8, marginBottom: 44 }}>
              Whether you need a full performance marketing strategy, a brand identity, or
              AI-powered content — I'd love to hear about your project.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {details.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, x: -16 }} animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.38, ease: EASE }}
                >
                  <DetailRow {...d} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 28, filter: "blur(4px)" }}
            animate={visible ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
          >
            {/* CTA card */}
            <div style={{ background: "rgba(124,58,237,0.04)", border: "1px solid rgba(124,58,237,0.18)", borderRadius: 26, padding: "38px 36px", marginBottom: 16, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(124,58,237,0.65),transparent)" }} />
              <div style={{ position: "absolute", bottom: -70, right: -70, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,58,237,0.08),transparent 70%)", filter: "blur(20px)" }} />

              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 22 }}>
                <motion.div animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                  <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#4ADE80", boxShadow: "0 0 12px #4ADE80" }} />
                </motion.div>
                <span style={{ color: "#4ADE80", fontSize: 14, fontWeight: 500 }}>Available for new projects</span>
              </div>

              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 26, fontWeight: 700, color: "#fff", marginBottom: 14, lineHeight: 1.25 }}>
                Ready to elevate your brand?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, lineHeight: 1.75, marginBottom: 32 }}>
                From Meta Ads campaigns to complete brand overhauls — let's discuss how performance
                marketing and AI can transform your business.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <motion.a
                  href="mailto:shelarsamiksha1998@gmail.com"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(124,58,237,0.45)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "16px 28px", borderRadius: 16, textDecoration: "none", background: "linear-gradient(135deg,#7C3AED,#3B82F6)", color: "#fff", fontSize: 15, fontWeight: 600, boxShadow: "0 4px 24px rgba(124,58,237,0.3)" }}
                >
                  <Mail size={16} /> Send Me an Email <ArrowRight size={15} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/samiksha-shelar-5464b51b7"
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, borderColor: "rgba(124,58,237,0.45)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "16px 28px", borderRadius: 16, textDecoration: "none", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", fontSize: 15, fontWeight: 600, transition: "border-color 0.2s" }}
                >
                  <Globe size={16} /> Connect on LinkedIn
                </motion.a>
              </div>
            </div>

            {/* Tags */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: "24px 26px" }}>
              <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 18 }}>I Can Help With</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                {["Meta Ads Campaigns","Brand Strategy","AI Content Creation","Lead Generation","Creative Direction","Social Media Strategy","Campaign Analytics","Marketing Audits"].map((s, i) => (
                  <motion.span
                    key={s} className="tag"
                    initial={{ opacity: 0, scale: 0.85 }} animate={visible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.04 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                  >{s}</motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
