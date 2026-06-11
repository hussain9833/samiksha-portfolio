"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AISection from "@/components/AISection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let rx = -100, ry = -100;
    let dx = -100, dy = -100;

    const move = (e: MouseEvent) => {
      rx = e.clientX; ry = e.clientY;
      if (dot.current) {
        dot.current.style.left = rx + "px";
        dot.current.style.top = ry + "px";
      }
    };

    const loop = () => {
      dx += (rx - dx) * 0.12;
      dy += (ry - dy) * 0.12;
      if (ring.current) {
        ring.current.style.left = dx + "px";
        ring.current.style.top = dy + "px";
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollBar />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AISection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
