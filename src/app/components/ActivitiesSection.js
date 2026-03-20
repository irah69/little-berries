"use client";

import Image from "next/image";
import { useState } from "react";

// ─────────────────────────────────────────────────────────
//  Place these images in your /public folder:
//    chess.png   → the chess / kids learning image
//    dance.png   → the kids dancing image
//    karate.png  → the taekwondo / karate image
// ─────────────────────────────────────────────────────────

const HEADING_COLORS = ["#e53e3e","#d97706","#16a34a","#2563eb","#7c3aed","#db2777"];

function MulticolorText({ text }) {
  return text.split("").map((ch, i) => (
    <span key={i} style={{ color: HEADING_COLORS[i % HEADING_COLORS.length] }}>
      {ch}
    </span>
  ));
}

const ACTIVITIES = [
  {
    id: "chess",
    title: "Chess",
    emoji: "♟️",
    tagline: "Think. Plan. Win.",
    accentColor: "#7c3aed",
    lightColor: "#ede9fe",
    borderColor: "#7c3aed",
    badgeColor: "bg-violet-600",
    glowColor: "rgba(124,58,237,0.25)",
    image: "/chess.png",
    alt: "Kids learning chess with a teacher",
    description:
      "Chess sharpens young minds like nothing else. Our certified coaches guide children through strategy, patience and critical thinking — turning every move into a life lesson.",
    benefits: ["Boosts IQ & Focus", "Strategic Thinking", "Memory Power", "Emotional Control"],
    age: "Ages 3–12",
    schedule: "Mon · Wed · Fri",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="currentColor">
        <path d="M20 4 L23 12 L32 12 L25 18 L27 27 L20 22 L13 27 L15 18 L8 12 L17 12 Z" />
      </svg>
    ),
  },
  {
    id: "dance",
    title: "Dance",
    emoji: "💃",
    tagline: "Move. Express. Shine.",
    accentColor: "#ea580c",
    lightColor: "#fff7ed",
    borderColor: "#ea580c",
    badgeColor: "bg-orange-500",
    glowColor: "rgba(234,88,12,0.25)",
    image: "/dance.png",
    alt: "Kids dancing joyfully in a class",
    description:
      "Dance is where creativity meets confidence! Our fun-filled sessions blend rhythm, coordination and self-expression — helping children discover their inner performer.",
    benefits: ["Coordination & Balance", "Confidence Builder", "Creative Expression", "Physical Fitness"],
    age: "Ages 2–10",
    schedule: "Tue · Thu · Sat",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="currentColor">
        <circle cx="20" cy="8" r="5"/>
        <path d="M15 14 Q10 22 14 30 L18 28 Q16 22 18 18 L22 18 Q24 22 22 28 L26 30 Q30 22 25 14 Z"/>
      </svg>
    ),
  },
  {
    id: "karate",
    title: "Taekwondo",
    emoji: "🥋",
    tagline: "Discipline. Strength. Spirit.",
    accentColor: "#16a34a",
    lightColor: "#f0fdf4",
    borderColor: "#16a34a",
    badgeColor: "bg-green-600",
    glowColor: "rgba(22,163,74,0.25)",
    image: "/karate.png",
    alt: "Kids in taekwondo / karate uniforms",
    description:
      "Taekwondo builds more than kicks — it builds character. Our certified instructors teach discipline, respect and perseverance through structured belt-progression programmes.",
    benefits: ["Self-Defence Skills", "Discipline & Focus", "Body Strength", "Respect & Values"],
    age: "Ages 4–14",
    schedule: "Mon · Wed · Sat",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="currentColor">
        <circle cx="20" cy="7" r="5"/>
        <path d="M14 14 L10 30 L16 30 L19 20 L21 20 L24 30 L30 30 L26 14 Z"/>
        <path d="M12 18 L6 22 M28 18 L34 22"/>
      </svg>
    ),
  },
];

export default function ActivitiesSection() {
  const [active, setActive] = useState(null);

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-yellow-50 py-24"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      {/* ── Background decorative blobs ── */}
      <div className="absolute -top-32 -left-20 w-[480px] h-[480px] rounded-full bg-yellow-200/30 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-16 w-[400px] h-[400px] rounded-full bg-purple-300/25 blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-sky-200/20 blur-[70px] pointer-events-none"
        style={{ animation: "blobDrift 10s ease-in-out infinite alternate" }} />

      {/* ── Floating confetti dots ── */}
      {[
        ["top-12 left-[8%]",   "bg-red-400",    "6s",  "0s"],
        ["top-1/4 left-[22%]", "bg-yellow-400", "8s",  "1.2s"],
        ["top-8 right-[18%]",  "bg-green-400",  "7s",  "0.4s"],
        ["top-1/3 right-[8%]", "bg-blue-400",   "9s",  "2s"],
        ["bottom-1/4 left-[6%]","bg-violet-400","5s",  "1.6s"],
        ["bottom-16 right-[14%]","bg-orange-400","10s","0.9s"],
        ["top-2/3 left-[45%]", "bg-teal-400",   "7.5s","1.1s"],
      ].map(([pos, bg, dur, delay], i) => (
        <span key={i}
          className={`absolute ${pos} w-3 h-3 rounded-full ${bg} opacity-60 pointer-events-none`}
          style={{ animation: `floatDot ${dur} ease-in-out infinite`, animationDelay: delay }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">

        {/* ══════════════════════════════
            SECTION HEADER
        ══════════════════════════════ */}
        <div className="text-center mb-20" style={{ animation: "fadeUp 0.8s ease both" }}>

          {/* Top badge */}
          <span
            className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 text-xs font-extrabold uppercase tracking-widest px-5 py-2 rounded-full shadow-lg shadow-yellow-300/50 border-2 border-yellow-500 mb-6"
            style={{ animation: "popIn 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.2s both" }}
          >
            🎯 Explore Our Activities
          </span>

          {/* Multicolor heading */}
          <h2
            className="font-extrabold leading-tight mb-4"
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.2rem)", fontFamily: "'Baloo 2', cursive" }}
          >
            <MulticolorText text="Fun " />
            <span style={{ color: "#1e3a5f" }}>Activities for </span>
            <MulticolorText text="Every Child" />
          </h2>

          {/* Animated underline */}
          <div className="flex justify-center mb-5">
            <div
              className="h-[5px] w-64 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"
              style={{ animation: "growLine 1s cubic-bezier(0.22,1,0.36,1) 0.6s both", transform: "scaleX(0)", transformOrigin: "center" }}
            />
          </div>

          <p
            className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ animation: "fadeUp 0.7s ease 0.5s both" }}
          >
            At Little Berries, every child discovers their superpower. Our expert-led activities
            blend learning with joy — building skills that last a lifetime.
          </p>
        </div>

        {/* ══════════════════════════════
            ACTIVITY CARDS
        ══════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">
          {ACTIVITIES.map((act, idx) => (
            <div
              key={act.id}
              className="group relative flex flex-col rounded-3xl overflow-hidden bg-white border-2 shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              style={{
                borderColor: act.borderColor,
                boxShadow: `0 8px 32px ${act.glowColor}`,
                animation: `fadeUp 0.7s ease ${0.2 + idx * 0.15}s both`,
              }}
              onMouseEnter={() => setActive(act.id)}
              onMouseLeave={() => setActive(null)}
            >
              {/* ── Coloured top stripe ── */}
              <div
                className="absolute top-0 left-0 w-full h-1.5 z-10"
                style={{ background: `linear-gradient(90deg, ${act.accentColor}, ${act.accentColor}88)` }}
              />

              {/* ── IMAGE AREA ── */}
              <div className="relative w-full overflow-hidden" style={{ height: "260px" }}>

                {/* Colour overlay on hover */}
                <div
                  className="absolute inset-0 z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{ background: `linear-gradient(160deg, ${act.accentColor}33, transparent 60%)` }}
                />

                {/* Actual image */}
                <div
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                  style={{ animation: active === act.id ? "none" : "imgFloat 4s ease-in-out infinite alternate" }}
                >
                  <Image
                    src={act.image}
                    alt={act.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                {/* Age badge — top-left */}
                <div
                  className={`absolute top-4 left-4 z-20 ${act.badgeColor} text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg`}
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  {act.age}
                </div>

                {/* Emoji — top-right, bounces */}
                <div
                  className="absolute top-4 right-4 z-20 text-3xl drop-shadow-lg"
                  style={{ animation: "bobble 2.5s ease-in-out infinite alternate" }}
                >
                  {act.emoji}
                </div>

                {/* Schedule tag — bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                  <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                    🗓️ {act.schedule}
                  </span>
                </div>
              </div>

              {/* ── CONTENT AREA ── */}
              <div className="flex flex-col flex-1 p-6 gap-4">

                {/* Title row */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg"
                    style={{ background: act.accentColor }}
                  >
                    {act.icon}
                  </div>
                  <div>
                    <h3
                      className="font-extrabold text-gray-900 leading-tight"
                      style={{ fontSize: "1.5rem", fontFamily: "'Baloo 2', cursive", color: act.accentColor }}
                    >
                      {act.title}
                    </h3>
                    <p className="text-xs font-bold italic" style={{ color: act.accentColor }}>
                      {act.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {act.description}
                </p>

                {/* Benefits pills */}
                <div className="flex flex-wrap gap-2">
                  {act.benefits.map((b, i) => (
                    <span
                      key={i}
                      className="text-xs font-bold px-3 py-1.5 rounded-full border-2 transition-all duration-200 hover:text-white"
                      style={{
                        borderColor: act.accentColor,
                        color: act.accentColor,
                        background: act.lightColor,
                      }}
                      onMouseEnter={e => {
                        e.target.style.background = act.accentColor;
                        e.target.style.color = "#fff";
                      }}
                      onMouseLeave={e => {
                        e.target.style.background = act.lightColor;
                        e.target.style.color = act.accentColor;
                      }}
                    >
                      ✓ {b}
                    </span>
                  ))}
                </div>

                {/* CTA button */}
                <div className="mt-auto pt-2">
                  <button
                    className="w-full flex items-center justify-center gap-2 text-white font-extrabold text-sm py-3.5 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
                    style={{
                      background: `linear-gradient(135deg, ${act.accentColor}, ${act.accentColor}cc)`,
                      boxShadow: `0 6px 20px ${act.glowColor}`,
                      fontFamily: "'Baloo 2', cursive",
                    }}
                  >
                    Join {act.title} Class
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* ── Corner glow on hover ── */}
              <div
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"
                style={{ background: act.accentColor }}
              />
            </div>
          ))}
        </div>

        {/* ══════════════════════════════
            BOTTOM STATS BANNER
        ══════════════════════════════ */}
        <div
          className="mt-20 rounded-3xl overflow-hidden"
          style={{ animation: "fadeUp 0.8s ease 0.8s both" }}
        >
          <div className="bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 px-8 py-10 relative overflow-hidden">

            {/* Decorative glows */}
            <div className="absolute -top-10 left-20 w-40 h-40 rounded-full bg-yellow-400/15 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 right-20 w-40 h-40 rounded-full bg-purple-400/20 blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">

              {/* Left text */}
              <div className="text-center md:text-left">
                <p
                  className="text-yellow-300 font-extrabold text-xl mb-1"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  🎉 Admissions Open 2025–26!
                </p>
                <p className="text-white/75 text-sm">
                  Limited seats — enrol your child today
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 flex-wrap justify-center">
                {[
                  { num: "3",    label: "Activity Programs", color: "#facc15" },
                  { num: "200+", label: "Active Students",   color: "#34d399" },
                  { num: "100%", label: "Fun Guaranteed",    color: "#f87171" },
                  { num: "5⭐",  label: "Parent Rating",     color: "#a78bfa" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span
                      className="text-2xl font-extrabold leading-none"
                      style={{ color: s.color, fontFamily: "'Baloo 2', cursive" }}
                    >
                      {s.num}
                    </span>
                    <span className="text-white/60 text-xs font-bold uppercase tracking-wide whitespace-nowrap">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="tel:7989523822"
                className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-extrabold px-7 py-3.5 rounded-full shadow-lg shadow-yellow-400/30 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
                style={{ fontFamily: "'Baloo 2', cursive" }}
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── All keyframes ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Nunito:wght@400;600;700;800;900&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes growLine {
          to { transform: scaleX(1); }
        }
        @keyframes blobDrift {
          from { transform: translate(-50%,-50%) scale(1); }
          to   { transform: translate(-50%,-50%) scale(1.12); }
        }
        @keyframes floatDot {
          0%,100% { transform: translateY(0)    rotate(0deg);   opacity: 0.6; }
          50%     { transform: translateY(-22px) rotate(180deg); opacity: 1; }
        }
        @keyframes bobble {
          from { transform: translateY(0)    scale(1);   }
          to   { transform: translateY(-8px) scale(1.12); }
        }
        @keyframes imgFloat {
          from { transform: scale(1)    translateY(0px); }
          to   { transform: scale(1.03) translateY(-6px); }
        }
        @keyframes cardPulse {
          0%,100% { box-shadow: 0 8px 32px rgba(124,58,237,0.2); }
          50%     { box-shadow: 0 16px 48px rgba(124,58,237,0.4); }
        }
      `}</style>
    </section>
  );
}