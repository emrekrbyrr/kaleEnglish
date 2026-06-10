"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

// Deterministic window config (no Math.random — avoids SSR/client mismatch)
function buildWindows(floors, cols, seedA, seedB, seedC) {
  return Array.from({ length: floors }, (_, floor) =>
    Array.from({ length: cols }, (_, col) => {
      const seed = (floor * seedA + col * seedB + seedC) % 10;
      return { floor, col, lit: seed > 3, blue: seed > 8 };
    })
  ).flat();
}

const LEFT_WINDOWS  = buildWindows(14, 4, 7, 3, 0);
const RIGHT_WINDOWS = buildWindows(14, 4, 5, 7, 2);

// Simple worker silhouette as SVG
function Worker({ x, mirrored }) {
  const scale = mirrored ? "scale(-1,1)" : "scale(1,1)";
  return (
    <g transform={`translate(${x}, 0) ${scale}`}>
      {/* Hard hat */}
      <ellipse cx="10" cy="3" rx="9" ry="4" fill="#dc2626" />
      {/* Head */}
      <circle cx="10" cy="10" r="5.5" fill="#2d1a0e" />
      {/* Body */}
      <rect x="4" y="16" width="12" height="18" rx="2" fill="#1e3a5f" />
      {/* Hi-vis stripe */}
      <rect x="4" y="22" width="12" height="3" rx="1" fill="#fbbf24" opacity="0.85" />
      {/* Left arm — raised working */}
      <line x1="4"  y1="20" x2="-4" y2="12" stroke="#2d1a0e" strokeWidth="3.5" strokeLinecap="round" />
      {/* Right arm — at side */}
      <line x1="16" y1="20" x2="22" y2="25" stroke="#2d1a0e" strokeWidth="3.5" strokeLinecap="round" />
      {/* Tool in left hand */}
      <line x1="-4" y1="12" x2="-8" y2="5" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      {/* Legs */}
      <line x1="8"  y1="34" x2="6"  y2="48" stroke="#1e3a5f" strokeWidth="4" strokeLinecap="round" />
      <line x1="12" y1="34" x2="14" y2="48" stroke="#1e3a5f" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
}

// One column of building windows
function WindowColumn({ windows, cols, className }) {
  const W = 22; // window width
  const H = 16; // window height
  const GX = 10; // horizontal gap
  const GY = 12; // vertical gap
  const colWidth = cols * (W + GX);

  return (
    <svg
      viewBox={`0 0 ${colWidth} ${14 * (H + GY)}`}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {windows.map(({ floor, col, lit, blue }) => (
        <rect
          key={`${floor}-${col}`}
          x={col * (W + GX) + 5}
          y={floor * (H + GY) + 4}
          width={W}
          height={H}
          rx="2"
          fill={lit ? (blue ? "#60a5fa" : "#fbbf24") : "#0f2035"}
          opacity={lit ? (blue ? 0.7 : 0.85) : 0.5}
        />
      ))}
    </svg>
  );
}

export default function HeroSection({ companyInfo }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scaffold rises as user scrolls (starts at 58% from top, ends at 8%)
  const scaffoldY = useTransform(scrollYProgress, [0, 1], ["58%", "8%"]);

  // Ropes stretch upward with the scaffold
  const ropeHeight = useTransform(scrollYProgress, [0, 1], ["62%", "12%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020c18 0%, #05111f 60%, #0a1929 100%)" }}
    >
      {/* ── Stars / atmospheric dots ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: i % 4 === 0 ? 2 : 1,
              height: i % 4 === 0 ? 2 : 1,
              top:  `${(i * 37 + 11) % 70}%`,
              left: `${(i * 53 + 7) % 100}%`,
              opacity: 0.2 + (i % 5) * 0.08,
            }}
          />
        ))}
      </div>

      {/* ── Building — LEFT ──────────────────────────────────────── */}
      <div className="absolute left-0 top-0 bottom-0 w-[30%] md:w-[28%] flex flex-col">
        {/* Building body */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, #040e1c 0%, #071a2e 100%)" }}
        />
        {/* Floor separation lines */}
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full"
            style={{
              top: `${(i + 1) * (100 / 15)}%`,
              height: 1,
              background: "rgba(148,163,184,0.06)",
            }}
          />
        ))}
        {/* Windows */}
        <WindowColumn
          windows={LEFT_WINDOWS}
          cols={4}
          className="absolute inset-0 w-full h-full"
        />
        {/* Edge shadow toward center */}
        <div
          className="absolute top-0 right-0 bottom-0 w-16 pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(2,12,24,0.9))" }}
        />
      </div>

      {/* ── Building — RIGHT ─────────────────────────────────────── */}
      <div className="absolute right-0 top-0 bottom-0 w-[30%] md:w-[28%] flex flex-col">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(270deg, #040e1c 0%, #071a2e 100%)" }}
        />
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full"
            style={{
              top: `${(i + 1) * (100 / 15)}%`,
              height: 1,
              background: "rgba(148,163,184,0.06)",
            }}
          />
        ))}
        <WindowColumn
          windows={RIGHT_WINDOWS}
          cols={4}
          className="absolute inset-0 w-full h-full"
        />
        <div
          className="absolute top-0 left-0 bottom-0 w-16 pointer-events-none"
          style={{ background: "linear-gradient(270deg, transparent, rgba(2,12,24,0.9))" }}
        />
      </div>

      {/* ── Wire ropes ───────────────────────────────────────────── */}
      <motion.div
        className="absolute left-1/2 top-0 pointer-events-none"
        style={{ height: ropeHeight }}
        aria-hidden="true"
      >
        {/* Left rope */}
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: "calc(50% - 90px)",
            width: 2,
            background: "linear-gradient(180deg, transparent 0%, #475569 15%, #475569 100%)",
          }}
        />
        {/* Right rope */}
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: "calc(50% + 88px)",
            width: 2,
            background: "linear-gradient(180deg, transparent 0%, #475569 15%, #475569 100%)",
          }}
        />
        {/* Safety rope (thin, center) */}
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: "calc(50%)",
            width: 1,
            background: "linear-gradient(180deg, transparent 0%, #334155 20%, #334155 100%)",
          }}
        />
      </motion.div>

      {/* ── Scaffold platform ────────────────────────────────────── */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ top: scaffoldY }}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Glow under scaffold */}
        <div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2"
          style={{
            width: 260,
            height: 40,
            background: "radial-gradient(ellipse, rgba(220,38,38,0.25) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />

        {/* Workers SVG */}
        <svg
          viewBox="0 0 200 60"
          className="absolute -top-14 left-1/2 -translate-x-1/2"
          style={{ width: 200, height: 60 }}
          aria-label="Workers on scaffold"
        >
          <Worker x={40} mirrored={false} />
          <Worker x={120} mirrored={true} />
        </svg>

        {/* The actual scaffold image */}
        <Image
          src="/suspended-scaffold.png"
          alt="KaleLift suspended scaffold platform"
          width={280}
          height={110}
          priority
          className="relative z-10 drop-shadow-2xl"
          style={{ filter: "drop-shadow(0 8px 24px rgba(220,38,38,0.3))" }}
        />
      </motion.div>

      {/* ── Text content ─────────────────────────────────────────── */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="w-full px-6 md:px-16 max-w-2xl pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-red-500 text-sm font-semibold tracking-widest uppercase mb-4 border border-red-500/30 px-3 py-1 rounded-full">
              Africa & Europe
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Suspended Platform &{" "}
              <span className="text-red-500">Swing Stage</span>{" "}
              Rental
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              CE/TSE certified platforms for high-rise construction and facade
              maintenance across Africa and Europe. ZLP800 systems, export-ready
              documentation, fast quotes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/suspended-platform-rental-africa-europe"
                className="group inline-flex items-center gap-2 px-7 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-red-600/30"
              >
                Explore Rental Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/20 transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* ── Bottom fade to white sections ────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent, #f9fafb)" }}
      />
    </section>
  );
}
