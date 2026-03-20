"use client";

export default function RenownedSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100 overflow-hidden flex flex-col justify-center py-20">

      {/* ── Decorative blobs ── */}
      <div className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full bg-amber-200/40 blur-[80px] animate-pulse pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-rose-200/40 blur-[60px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-sky-200/30 blur-[50px] pointer-events-none" style={{ animation: "blobDrift 8s ease-in-out infinite alternate" }} />

      {/* ── Floating dots ── */}
      <span className="absolute top-16 left-12 w-3 h-3 rounded-full bg-amber-400 opacity-70 pointer-events-none" style={{ animation: "floatDot 6s ease-in-out infinite" }} />
      <span className="absolute top-1/3 left-[18%] w-2 h-2 rounded-full bg-rose-400 opacity-60 pointer-events-none" style={{ animation: "floatDot 8s ease-in-out infinite", animationDelay: "1s" }} />
      <span className="absolute bottom-1/3 left-[60%] w-3 h-3 rounded-full bg-sky-400 opacity-60 pointer-events-none" style={{ animation: "floatDot 7s ease-in-out infinite", animationDelay: "2s" }} />
      <span className="absolute bottom-24 right-[20%] w-2 h-2 rounded-full bg-green-400 opacity-70 pointer-events-none" style={{ animation: "floatDot 9s ease-in-out infinite", animationDelay: "0.5s" }} />
      <span className="absolute top-10 right-[22%] w-2 h-2 rounded-full bg-pink-400 opacity-60 pointer-events-none" style={{ animation: "floatDot 5s ease-in-out infinite", animationDelay: "1.5s" }} />

      {/* ── Main container ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ════════════════════════════════
            LEFT — Text Content
        ════════════════════════════════ */}
        <div className="flex flex-col gap-7" style={{ animation: "slideInLeft 0.8s cubic-bezier(0.22,1,0.36,1) both" }}>

          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-xs font-extrabold uppercase tracking-widest px-5 py-2 rounded-full w-fit shadow-lg shadow-orange-300/50"
            style={{ animation: "popIn 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.3s both" }}
          >
            ⭐ Award-Winning Programs
          </span>

          {/* Heading */}
          <div style={{ animation: "fadeUp 0.7s ease 0.4s both" }}>
            <h2
              className="font-extrabold text-gray-900 leading-tight"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontFamily: "'Baloo 2', cursive" }}
            >
              Our{" "}
              <span className="relative inline-block text-orange-500">
                Renowned
                <span
                  className="absolute bottom-1 left-0 h-[6px] w-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                  style={{ animation: "growLine 0.8s cubic-bezier(0.22,1,0.36,1) 0.9s both", transform: "scaleX(0)", transformOrigin: "left" }}
                />
              </span>
              <br />Programs
            </h2>
          </div>

          {/* Description */}
          <p
            className="text-gray-500 text-lg leading-relaxed max-w-md"
            style={{ animation: "fadeUp 0.7s ease 0.55s both", fontFamily: "'Nunito', sans-serif" }}
          >
            From engaging activities to innovative teaching methods, our programs are
            designed to unlock the full potential of every child — nurturing curiosity,
            creativity, and confidence from day one.
          </p>

          {/* Stats card */}
          <div
            className="flex items-center gap-5 bg-white/70 backdrop-blur-md border border-white/90 rounded-2xl px-7 py-5 w-fit shadow-xl shadow-orange-100/60"
            style={{ animation: "fadeUp 0.7s ease 0.65s both" }}
          >
            {[
              { num: "500+", label: "Happy Kids" },
              { num: "15+",  label: "Expert Teachers" },
              { num: "10+",  label: "Years of Joy" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-5">
                <div className="flex flex-col items-center gap-0.5">
                  <span
                    className="text-3xl font-extrabold text-orange-500 leading-none"
                    style={{ fontFamily: "'Baloo 2', cursive" }}
                  >
                    {s.num}
                  </span>
                  <span className="text-[0.7rem] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">
                    {s.label}
                  </span>
                </div>
                {i < 2 && <div className="w-px h-10 bg-gray-200" />}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4" style={{ animation: "fadeUp 0.7s ease 0.8s both" }}>
            <button
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-extrabold text-base px-8 py-4 rounded-full shadow-lg shadow-rose-300/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-400/50 active:scale-95"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Explore Programs
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <button
              className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 font-extrabold text-base px-7 py-[14px] rounded-full transition-all duration-300 hover:bg-orange-500 hover:text-white hover:-translate-y-1 active:scale-95"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              ▶ Watch a Day in Life
            </button>
          </div>
        </div>

        {/* ════════════════════════════════
            RIGHT — Illustration
        ════════════════════════════════ */}
        <div
          className="relative flex justify-center items-end"
          style={{ animation: "slideInRight 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s both" }}
        >
          {/* Glow circle behind illustration */}
          <div
            className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-br from-amber-200/40 to-orange-100/20"
            style={{ animation: "pulseGlow 4s ease-in-out infinite alternate" }}
          />

          {/* Floating emoji decorators */}
          <span className="absolute top-4 left-4 text-3xl pointer-events-none select-none z-10 drop-shadow-md" style={{ animation: "flutter 5s ease-in-out infinite alternate" }}>🦋</span>
          <span className="absolute top-8 right-6 text-2xl pointer-events-none select-none z-10 drop-shadow-md" style={{ animation: "flutter 6s ease-in-out infinite alternate-reverse" }}>🦋</span>
          <span className="absolute top-2 left-[42%] text-2xl pointer-events-none select-none z-10 drop-shadow-md" style={{ animation: "bobble 3s ease-in-out infinite alternate" }}>🐣</span>
          <span className="absolute bottom-[28%] left-2 text-xl pointer-events-none select-none z-10" style={{ animation: "twinkle 2.5s ease-in-out infinite alternate" }}>⭐</span>
          <span className="absolute bottom-[26%] right-4 text-2xl pointer-events-none select-none z-10" style={{ animation: "heartbeat 2s ease-in-out infinite alternate" }}>💛</span>

          {/* Floating award card */}
          <div
            className="absolute top-6 -left-6 flex items-center gap-3 bg-white/90 backdrop-blur-md border border-white rounded-2xl px-4 py-3 shadow-xl z-20"
            style={{ animation: "cardFloat 4s ease-in-out infinite alternate" }}
          >
            <span className="text-2xl">🏆</span>
            <div>
              <div className="font-extrabold text-gray-800 text-sm leading-tight" style={{ fontFamily: "'Baloo 2', cursive" }}>Best Playschool</div>
              <div className="text-[0.68rem] text-gray-400 font-semibold">2024 Award</div>
            </div>
          </div>

          {/* Floating parents card */}
          <div
            className="absolute bottom-[24%] -right-4 flex items-center gap-3 bg-white/90 backdrop-blur-md border border-white rounded-2xl px-4 py-3 shadow-xl z-20"
            style={{ animation: "cardFloat 4s ease-in-out infinite alternate-reverse", animationDelay: "1.5s" }}
          >
            <span className="text-2xl">❤️</span>
            <div>
              <div className="font-extrabold text-gray-800 text-sm leading-tight" style={{ fontFamily: "'Baloo 2', cursive" }}>98% Parents</div>
              <div className="text-[0.68rem] text-gray-400 font-semibold">Love our programs</div>
            </div>
          </div>

          {/* Main SVG Illustration */}
          <div className="relative z-10" style={{ animation: "runBounce 1.4s ease-in-out infinite alternate" }}>
            <svg
              viewBox="0 0 520 450"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[500px] drop-shadow-2xl"
              aria-label="Teacher running joyfully with a child"
            >
              {/* Ground */}
              <ellipse cx="260" cy="418" rx="235" ry="22" fill="#a8d88a" opacity="0.5"/>
              <ellipse cx="260" cy="420" rx="185" ry="13" fill="#7ec850" opacity="0.3"/>

              {/* Grass tufts */}
              {[60,115,195,305,385,458].map((x, i) => (
                <g key={i}>
                  <path d={`M${x},416 Q${x-7},396 ${x-3},382`} stroke="#5aab2e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d={`M${x},416 Q${x+7},394 ${x+3},380`} stroke="#5aab2e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d={`M${x},416 Q${x},392 ${x},376`} stroke="#6dbf35" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </g>
              ))}

              {/* ── CHILD (left) ── */}
              <ellipse cx="158" cy="315" rx="28" ry="36" fill="#4ab3e8"/>
              <circle cx="158" cy="263" r="32" fill="#f5c5a3"/>
              <path d="M128,255 Q132,230 158,227 Q184,230 188,255" fill="#3d2b1f"/>
              <circle cx="148" cy="261" r="4" fill="#2d1b0e"/>
              <circle cx="168" cy="261" r="4" fill="#2d1b0e"/>
              <circle cx="149.5" cy="259.5" r="1.5" fill="white"/>
              <circle cx="169.5" cy="259.5" r="1.5" fill="white"/>
              <path d="M149,272 Q158,280 167,272" stroke="#c0704a" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <ellipse cx="140" cy="268" rx="6" ry="4" fill="#f4a0a0" opacity="0.6"/>
              <ellipse cx="176" cy="268" rx="6" ry="4" fill="#f4a0a0" opacity="0.6"/>
              <path d="M132,298 Q107,268 102,250" stroke="#f5c5a3" strokeWidth="14" fill="none" strokeLinecap="round"/>
              <path d="M184,298 Q212,314 222,328" stroke="#f5c5a3" strokeWidth="14" fill="none" strokeLinecap="round"/>
              <path d="M133,342 Q158,354 183,342 L185,374 Q158,384 131,374 Z" fill="#2980c4"/>
              <path d="M143,372 Q132,398 120,415" stroke="#f5c5a3" strokeWidth="13" fill="none" strokeLinecap="round"/>
              <path d="M171,372 Q175,398 181,413" stroke="#f5c5a3" strokeWidth="13" fill="none" strokeLinecap="round"/>
              <ellipse cx="118" cy="417" rx="16" ry="8" fill="#e8423a"/>
              <ellipse cx="182" cy="415" rx="16" ry="8" fill="#e8423a"/>
              <rect x="180" y="288" width="26" height="34" rx="8" fill="#f5a623"/>
              <rect x="184" y="298" width="18" height="14" rx="4" fill="#e8942a"/>

              {/* ── MOTHER / TEACHER (right) ── */}
              <path d="M293,305 Q268,348 258,416 L358,416 Q348,348 323,305 Z" fill="#f5c242"/>
              <path d="M308,358 Q290,388 282,416 L336,416 Q328,388 308,358 Z" fill="#e8b230" opacity="0.45"/>
              <ellipse cx="308" cy="302" rx="32" ry="38" fill="#f5c242"/>
              <circle cx="308" cy="260" r="30" fill="#c68642"/>
              <circle cx="308" cy="228" r="18" fill="#3d2008"/>
              <path d="M278,248 Q276,225 296,218 Q308,213 320,218 Q340,225 338,248" fill="#3d2008"/>
              <circle cx="298" cy="256" r="4.5" fill="#1a0d00"/>
              <circle cx="318" cy="256" r="4.5" fill="#1a0d00"/>
              <circle cx="299.5" cy="254.5" r="1.8" fill="white"/>
              <circle cx="319.5" cy="254.5" r="1.8" fill="white"/>
              <path d="M297,268 Q308,278 319,268" stroke="#8b4513" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <ellipse cx="287" cy="263" rx="7" ry="5" fill="#c0795a" opacity="0.4"/>
              <ellipse cx="329" cy="263" rx="7" ry="5" fill="#c0795a" opacity="0.4"/>
              <path d="M278,318 Q243,303 228,330" stroke="#c68642" strokeWidth="15" fill="none" strokeLinecap="round"/>
              <path d="M338,312 Q368,298 380,282" stroke="#c68642" strokeWidth="15" fill="none" strokeLinecap="round"/>
              <path d="M283,405 Q270,408 260,416" stroke="#c68642" strokeWidth="14" fill="none" strokeLinecap="round"/>
              <path d="M331,405 Q348,406 358,416" stroke="#c68642" strokeWidth="14" fill="none" strokeLinecap="round"/>
              <ellipse cx="258" cy="416" rx="18" ry="9" fill="#e8423a"/>
              <ellipse cx="360" cy="416" rx="18" ry="9" fill="#e8423a"/>
              <circle cx="228" cy="330" r="10" fill="#c68642"/>

              {/* Sparkle accents */}
              {[[90,245],[90,265],[98,255]].map(([cx,cy],i)=>(
                <circle key={i} cx={cx} cy={cy} r="3.5" fill="#ffb347" opacity="0.9"/>
              ))}
              {[[398,268],[412,255],[405,278]].map(([cx,cy],i)=>(
                <circle key={i+10} cx={cx} cy={cy} r="3" fill="#4ab3e8" opacity="0.9"/>
              ))}
              <text x="85"  y="240" fontSize="20" fill="#ffb347" opacity="0.8">✦</text>
              <text x="402" y="255" fontSize="15" fill="#4ab3e8" opacity="0.8">✦</text>
              <text x="450" y="318" fontSize="11" fill="#a5d6a7" opacity="0.9">✦</text>
              <text x="68"  y="308" fontSize="11" fill="#f48fb1" opacity="0.9">✦</text>
            </svg>
          </div>
        </div>
      </div>

      {/* ── Bottom wave ── */}
      <div className="relative z-10 mt-10 leading-none pointer-events-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
          <path d="M0,40 C360,88 1080,0 1440,52 L1440,80 L0,80 Z" fill="white" opacity="0.6"/>
        </svg>
      </div>

      {/* ── Custom keyframes (only animations Tailwind can't provide) ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Nunito:wght@400;600;700;800;900&display=swap');

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-48px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(48px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.6); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes growLine {
          to { transform: scaleX(1); }
        }
        @keyframes blobDrift {
          from { transform: translate(-50%,-50%) scale(1); }
          to   { transform: translate(-50%,-50%) scale(1.1); }
        }
        @keyframes floatDot {
          0%,100% { transform: translateY(0) rotate(0deg);   opacity: 0.7; }
          50%      { transform: translateY(-24px) rotate(180deg); opacity: 1; }
        }
        @keyframes runBounce {
          from { transform: translateY(0) rotate(-0.4deg); }
          to   { transform: translateY(-14px) rotate(0.4deg); }
        }
        @keyframes pulseGlow {
          from { transform: scale(1);    opacity: 0.6; }
          to   { transform: scale(1.07); opacity: 1; }
        }
        @keyframes flutter {
          0%   { transform: translate(0,0) rotate(-8deg) scale(1); }
          33%  { transform: translate(10px,-8px) rotate(6deg) scale(1.05); }
          66%  { transform: translate(-6px,10px) rotate(-4deg) scale(0.95); }
          100% { transform: translate(8px,4px) rotate(10deg) scale(1); }
        }
        @keyframes bobble {
          from { transform: translateY(0) scale(1); }
          to   { transform: translateY(-10px) scale(1.1); }
        }
        @keyframes twinkle {
          from { transform: scale(1) rotate(0deg);   opacity: 0.6; }
          to   { transform: scale(1.5) rotate(20deg); opacity: 1; }
        }
        @keyframes heartbeat {
          from { transform: scale(1);   opacity: 0.7; }
          to   { transform: scale(1.3); opacity: 1; }
        }
        @keyframes cardFloat {
          from { transform: translateY(0) rotate(-1deg); }
          to   { transform: translateY(-8px) rotate(1deg); }
        }
      `}</style>
    </section>
  );
}