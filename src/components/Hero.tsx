"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles, TrendingUp, Users, Zap, Award } from "lucide-react";
import Image from "next/image";

const roles = ["Performance Marketer", "Meta Ads Expert", "Brand Strategist", "AI Content Creator", "Creative Director"];

const EASE = [0.22, 1, 0.36, 1] as const;

/* Animated counter */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const ctrl = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return ctrl.stop;
  }, [to]);
  return <>{val}{suffix}</>;
}

const statData = [
  { icon: Award,      num: 3,   suffix: "+", label: "Years Experience" },
  { icon: Users,      num: 5,   suffix: "+", label: "Brands Managed" },
  { icon: TrendingUp, num: 70,  suffix: "%", label: "Engagement Growth" },
  { icon: Zap,        num: 100, suffix: "+", label: "Campaigns Executed" },
];

/* Word-by-word heading reveal */
function WordReveal({ text, delay = 0, className = "", style = {} }: { text: string; delay?: number; className?: string; style?: React.CSSProperties }) {
  const words = text.split(" ");
  return (
    <span style={{ display: "inline", ...style }}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4, delay: delay + i * 0.07, ease: EASE }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
          className={className}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const word = roles[roleIdx];
    if (typing) {
      if (text.length < word.length) {
        timer.current = setTimeout(() => setText(word.slice(0, text.length + 1)), 45);
      } else {
        timer.current = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (text.length > 0) {
        timer.current = setTimeout(() => setText(text.slice(0, -1)), 22);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [text, typing, roleIdx]);

  return (
    <section id="hero" style={{ minHeight: "100vh", background: "#050508", position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}>
      {/* Animated background orbs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,1) 0%, transparent 70%)", top: "0%", left: "-10%", filter: "blur(60px)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,1) 0%, transparent 70%)", bottom: "-5%", right: "-5%", filter: "blur(60px)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(236,72,153,1) 0%, transparent 70%)", top: "50%", left: "40%", filter: "blur(80px)" }}
        />
      </div>

      {/* Grid */}
      <div className="section-grid" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "120px 24px 80px", width: "100%", position: "relative", zIndex: 1 }}>
        <div className="grid lg:grid-cols-2" style={{ gap: 64, alignItems: "center" }}>

          {/* ── Left ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", borderRadius: 100, background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)", marginBottom: 32 }}
            >
              <motion.span animate={{ rotate: [0, 15, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 2 }}>
                <Sparkles size={13} color="#A78BFA" />
              </motion.span>
              <span style={{ color: "#C4B5FD", fontSize: 12, fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase" }}>Digital Marketing Strategist · Mumbai</span>
            </motion.div>

            {/* Heading — word by word */}
            <h1 style={{ fontSize: "clamp(48px, 6.5vw, 88px)", fontWeight: 700, lineHeight: 1.06, marginBottom: 24, color: "#fff", letterSpacing: "-0.03em" }}>
              <WordReveal text="I Build Brands" delay={0.1} /><br />
              <WordReveal text="That People" delay={0.3} className="gradient-text" /><br />
              <WordReveal text="Remember." delay={0.5} />
            </h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.3 }}
              style={{ height: 38, display: "flex", alignItems: "center", marginBottom: 20 }}
            >
              <span style={{ color: "#A78BFA", fontSize: 22, fontWeight: 500 }}>{text}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ display: "inline-block", width: 2.5, height: 26, background: "#A78BFA", marginLeft: 3, borderRadius: 2 }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.4, ease: EASE }}
              style={{ color: "rgba(255,255,255,0.45)", fontSize: 17, lineHeight: 1.75, maxWidth: 480, marginBottom: 44 }}
            >
              Performance Marketing · Meta Ads · AI Content Strategy · Creative Direction.<br />
              Turning data into strategy and strategy into growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72, duration: 0.4, ease: EASE }}
              style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 50px rgba(124,58,237,0.55)" }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "15px 30px", borderRadius: 14, background: "linear-gradient(135deg, #7C3AED, #3B82F6)", color: "#fff", fontSize: 15, fontWeight: 600, border: "none", cursor: "pointer", boxShadow: "0 4px 24px rgba(124,58,237,0.35)" }}
              >
                View My Work <ArrowRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "rgba(124,58,237,0.5)", background: "rgba(124,58,237,0.08)" }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "15px 30px", borderRadius: 14, background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.85)", fontSize: 15, fontWeight: 600, border: "1px solid rgba(255,255,255,0.12)", cursor: "pointer", transition: "all 0.25s" }}
              >
                Let's Collaborate
              </motion.button>
            </motion.div>

            {/* Stats with counters */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.4 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              {statData.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85 + i * 0.06, duration: 0.35, ease: EASE }}
                    style={{ textAlign: "center", padding: "14px 8px" }}
                  >
                    <Icon size={13} color="rgba(167,139,250,0.5)" style={{ margin: "0 auto 7px", display: "block" }} />
                    <div className="gradient-text" style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, fontWeight: 700 }}>
                      <Counter to={s.num} suffix={s.suffix} />
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.32)", fontSize: 11, marginTop: 4, letterSpacing: "0.02em" }}>{s.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* ── Right — Profile ── */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.25, ease: EASE }}
            style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}
            className="hidden lg:flex"
          >
            {/* Rotating rings */}
            <div className="animate-spin-slow" style={{ position: "absolute", width: 390, height: 390, borderRadius: "50%", border: "1px solid rgba(124,58,237,0.15)" }} />
            <div className="animate-spin-reverse" style={{ position: "absolute", width: 460, height: 460, borderRadius: "50%", border: "1px dashed rgba(59,130,246,0.1)" }} />
            {/* Third pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.06, 0.14, 0.06] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", width: 520, height: 520, borderRadius: "50%", border: "1px solid rgba(167,139,250,0.2)" }}
            />

            {/* Glow */}
            <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)", filter: "blur(24px)" }} />

            {/* Avatar — NO initials fallback */}
            <div style={{ position: "relative", width: 330, height: 330, borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 80px rgba(124,58,237,0.25), 0 0 0 1px rgba(124,58,237,0.1)" }}>
              <Image src="/images/profile/samiksha-profile.jpg" alt="Samiksha Shelar" fill style={{ objectFit: "cover", objectPosition: "top" }} priority />
            </div>

            {/* Floating chips */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", right: -18, top: 56, background: "rgba(8,8,14,0.92)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 16, padding: "12px 18px", backdropFilter: "blur(16px)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
            >
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, marginBottom: 3 }}>Campaigns Executed</p>
              <p className="gradient-text" style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 700 }}>100+</p>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", left: -18, bottom: 80, background: "rgba(8,8,14,0.92)", border: "1px solid rgba(74,222,128,0.15)", borderRadius: 16, padding: "12px 18px", backdropFilter: "blur(16px)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
            >
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, marginBottom: 3 }}>Best CPL Achieved</p>
              <p style={{ color: "#4ADE80", fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 700 }}>₹75.25</p>
            </motion.div>

            {/* Third chip — new */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{ position: "absolute", right: -24, bottom: 110, background: "rgba(8,8,14,0.92)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 16, padding: "10px 16px", backdropFilter: "blur(16px)" }}
            >
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, marginBottom: 2 }}>Total Reach</p>
              <p style={{ color: "#60A5FA", fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700 }}>1M+</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer" }}
        >
          <span style={{ color: "rgba(255,255,255,0.18)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase" }}>Scroll</span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
            <ChevronDown size={16} color="rgba(255,255,255,0.18)" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
