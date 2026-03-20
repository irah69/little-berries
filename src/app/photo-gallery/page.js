"use client";

import React, { useState, useEffect } from "react";

const photos = [
  { id: 1,  category: "Art & Craft",   title: "Rainbow Finger Painting", emoji: "🎨", color: "#FFD6E0", accent: "#FF6B9D", description: "Little hands creating big colorful worlds" },
  { id: 2,  category: "Outdoor Play",  title: "Garden Explorers",        emoji: "🌻", color: "#FFF3CD", accent: "#F4A261", description: "Discovering nature's wonders in our garden" },
  { id: 4,  category: "Music & Dance", title: "Rhythm & Moves",           emoji: "🎵", color: "#E8D5F5", accent: "#9B5DE5", description: "Tiny dancers making joyful music" },
  { id: 5,  category: "Art & Craft",   title: "Clay Creations",           emoji: "🏺", color: "#FCE4D6", accent: "#E76F51", description: "Sculpting masterpieces with little fingers" },
  { id: 6,  category: "Outdoor Play",  title: "Water Play Day",           emoji: "💧", color: "#C9F0FF", accent: "#0096C7", description: "Splashing and learning about the world" },
  { id: 7,  category: "Celebrations",  title: "Birthday Parade",          emoji: "🎂", color: "#FDE8FF", accent: "#C77DFF", description: "Every birthday is a special celebration" },
  { id: 8,  category: "Science",       title: "Little Scientists",        emoji: "🔬", color: "#DFFFD8", accent: "#52B788", description: "Exploring how the world works together" },
  { id: 9,  category: "Music & Dance", title: "Puppet Show",              emoji: "🎭", color: "#FFF0D9", accent: "#F4872B", description: "Storytelling through imagination and play" },
  { id: 10, category: "Science",       title: "Rainbow Experiments",      emoji: "🌈", color: "#E0F0FF", accent: "#457BE0", description: "Colors, light and wonderful discoveries" },
  { id: 11, category: "Celebrations",  title: "Harvest Festival",         emoji: "🍂", color: "#FDE8D8", accent: "#D4720B", description: "Celebrating seasons and togetherness" },
];

const categories = ["All", "Art & Craft", "Outdoor Play", "Music & Dance", "Celebrations", "Science"];

const categoryEmojis = {
  All: "✨", "Art & Craft": "🎨", "Outdoor Play": "🌻",
  "Music & Dance": "🎵", Celebrations: "🎉", Science: "🔬",
};

export default function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxPhoto,  setLightboxPhoto]  = useState(null);
  const [hoveredId,      setHoveredId]      = useState(null);
  const [isTouch,        setIsTouch]        = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setLightboxPhoto(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxPhoto ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxPhoto]);

  const filtered = activeCategory === "All"
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  const navigate = (dir) => {
    const idx  = filtered.findIndex((p) => p.id === lightboxPhoto.id);
    setLightboxPhoto(filtered[(idx + dir + filtered.length) % filtered.length]);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Nunito:wght@400;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatBlob {
          0%,100% { transform: translateY(0px) scale(1); }
          50%      { transform: translateY(-18px) scale(1.04); }
        }
        @keyframes lbIn {
          from { opacity: 0; transform: scale(0.93) translateY(14px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }

        /* PAGE */
        .pg { font-family:'Nunito',sans-serif; background:#FFFBF4; min-height:100vh; position:relative; overflow-x:hidden; padding-bottom:80px; }

        /* BLOBS */
        .pg-blob { position:fixed; pointer-events:none; z-index:0; }
        .pg-b1 { top:-10vw; right:-10vw; width:clamp(140px,35vw,420px); height:clamp(140px,35vw,420px);
                  border-radius:60% 40% 55% 45%/50% 60% 40% 50%;
                  background:radial-gradient(circle,#FFD6E050 0%,transparent 70%);
                  animation:floatBlob 7s ease-in-out infinite; }
        .pg-b2 { bottom:-8vw; left:-8vw; width:clamp(120px,28vw,380px); height:clamp(120px,28vw,380px);
                  border-radius:45% 55% 40% 60%/60% 40% 55% 45%;
                  background:radial-gradient(circle,#D4F1F450 0%,transparent 70%);
                  animation:floatBlob 9s ease-in-out infinite reverse; }

        /* HEADER */
        .pg-header { text-align:center; padding:clamp(36px,8vw,70px) clamp(16px,5vw,40px) clamp(24px,4vw,40px); position:relative; z-index:1; }
        .pg-badge  { display:inline-block; background:linear-gradient(135deg,#FF6B9D22,#FF6B9D44);
                     color:#FF6B9D; font-family:'Baloo 2',sans-serif; font-weight:700;
                     font-size:clamp(10px,2.5vw,14px); padding:5px 16px; border-radius:30px;
                     margin-bottom:12px; letter-spacing:1px; text-transform:uppercase; border:1.5px solid #FF6B9D44; }
        .pg-h1    { font-family:'Baloo 2',sans-serif; font-size:clamp(1.5rem,6vw,3.2rem);
                    font-weight:800; color:#2D2A4A; margin-bottom:12px; line-height:1.2; }
        .pg-accent{ background:linear-gradient(135deg,#FF6B9D,#9B5DE5);
                    -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .pg-sub   { font-size:clamp(13px,3.5vw,17px); color:#7A7A9A; max-width:560px;
                    margin:0 auto; line-height:1.7; padding:0 8px; }

        /* FILTER */
        .pg-fw { display:flex; justify-content:center; padding:0 12px 28px; position:relative; z-index:1; }
        .pg-fs { display:flex; flex-wrap:wrap; gap:8px; justify-content:center;
                 background:white; padding:10px 14px;
                 border-radius:20px; box-shadow:0 4px 24px rgba(0,0,0,.08); max-width:100%; }
        .pg-fb { display:flex; align-items:center; gap:5px; padding:7px 13px; border:none;
                 border-radius:30px; background:transparent; color:#7A7A9A;
                 font-family:'Nunito',sans-serif; font-weight:600; font-size:clamp(11px,2.6vw,13px);
                 cursor:pointer; transition:all .2s ease; white-space:nowrap; flex-shrink:0; -webkit-tap-highlight-color:transparent; }
        .pg-fb.on { background:linear-gradient(135deg,#FF6B9D,#9B5DE5); color:white;
                    box-shadow:0 4px 14px rgba(155,93,229,.35); }

        /* GRID */
        .pg-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(min(100%,268px),1fr));
                   gap:clamp(12px,3vw,24px); max-width:1200px; margin:0 auto;
                   padding:0 clamp(12px,4vw,24px); position:relative; z-index:1; }
        @media(max-width:380px){ .pg-grid { grid-template-columns:1fr; } }

        /* CARD */
        .pg-card { background:white; border-radius:20px; overflow:hidden; cursor:pointer;
                   transition:transform .3s ease,box-shadow .3s ease;
                   animation:fadeUp .5s ease both; position:relative; -webkit-tap-highlight-color:transparent; }
        .pg-card:active { transform:scale(0.97) !important; }
        .pg-pbox { height:clamp(140px,22vw,200px); display:flex; align-items:center;
                   justify-content:center; position:relative; overflow:hidden; }
        .pg-pe   { font-size:clamp(48px,10vw,72px); filter:drop-shadow(0 4px 12px rgba(0,0,0,.12)); }
        .pg-ov   { position:absolute; inset:0; background:rgba(0,0,0,.35); display:flex;
                   align-items:center; justify-content:center; transition:opacity .25s ease; }
        .pg-vi   { color:white; font-weight:700; font-size:13px;
                   background:rgba(255,255,255,.2); padding:7px 16px;
                   border-radius:30px; backdrop-filter:blur(4px); }
        .pg-cb   { padding:clamp(12px,3vw,20px); }
        .pg-tag  { display:inline-block; font-size:clamp(9px,2vw,11px); font-weight:700;
                   padding:3px 10px; border-radius:20px; margin-bottom:7px;
                   text-transform:uppercase; letter-spacing:.5px; }
        .pg-ct   { font-family:'Baloo 2',sans-serif; font-size:clamp(14px,3.5vw,18px);
                   font-weight:700; color:#2D2A4A; margin-bottom:4px; }
        .pg-cd   { font-size:clamp(11px,2.5vw,13px); color:#9A9AB0; line-height:1.5; }
        .pg-rib  { position:absolute; top:14px; right:-8px; width:50px; height:5px; border-radius:3px; opacity:.6; }

        /* STATS */
        .pg-stats { display:flex; justify-content:center; flex-wrap:wrap;
                    gap:clamp(18px,4vw,32px); max-width:900px;
                    margin:clamp(36px,7vw,64px) clamp(12px,4vw,24px) 0;
                    padding:clamp(24px,5vw,40px) clamp(16px,4vw,32px);
                    background:linear-gradient(135deg,#2D2A4A,#4A3080);
                    border-radius:clamp(14px,3vw,28px); position:relative; z-index:1; }
        @media(min-width:641px){ .pg-stats { margin-left:auto; margin-right:auto; } }
        .pg-si   { display:flex; flex-direction:column; align-items:center; gap:3px; min-width:72px; }
        .pg-se   { font-size:clamp(20px,5vw,28px); }
        .pg-sn   { font-family:'Baloo 2',sans-serif; font-size:clamp(22px,6vw,32px);
                   font-weight:800; color:white; line-height:1; }
        .pg-sl   { font-size:clamp(9px,2vw,13px); color:rgba(255,255,255,.65);
                   font-weight:600; text-transform:uppercase; letter-spacing:.5px; text-align:center; }

        /* LIGHTBOX */
        .pg-lbbg { position:fixed; inset:0; background:rgba(20,15,40,.8); backdrop-filter:blur(8px);
                   z-index:1000; display:flex; align-items:center; justify-content:center;
                   padding:clamp(10px,4vw,24px); }
        .pg-lb   { background:white; border-radius:clamp(14px,4vw,28px); width:100%;
                   max-width:480px; max-height:92dvh; overflow-y:auto; position:relative;
                   box-shadow:0 40px 80px rgba(0,0,0,.4); animation:lbIn .28s ease both;
                   scrollbar-width:none; }
        .pg-lb::-webkit-scrollbar { display:none; }
        .pg-cx   { position:absolute; top:12px; right:12px; width:34px; height:34px;
                   border-radius:50%; border:none; background:rgba(255,255,255,.92);
                   cursor:pointer; font-size:15px; font-weight:700; color:#555; z-index:10;
                   display:flex; align-items:center; justify-content:center;
                   box-shadow:0 2px 10px rgba(0,0,0,.15); -webkit-tap-highlight-color:transparent; }
        .pg-lbp  { height:clamp(150px,32vw,240px); display:flex; align-items:center; justify-content:center; }
        .pg-lbe  { font-size:clamp(60px,15vw,96px); }
        .pg-lbi  { padding:clamp(14px,4vw,24px) clamp(16px,5vw,28px) 8px; }
        .pg-lbt  { font-family:'Baloo 2',sans-serif; font-size:clamp(17px,5vw,24px);
                   font-weight:800; color:#2D2A4A; margin-bottom:8px; }
        .pg-lbd  { font-size:clamp(13px,3vw,15px); color:#7A7A9A; line-height:1.6; }
        .pg-nav  { display:flex; align-items:center; justify-content:space-between;
                   padding:clamp(12px,3vw,20px) clamp(16px,5vw,28px) clamp(18px,4vw,28px); gap:8px; }
        .pg-nb   { padding:clamp(8px,2vw,10px) clamp(12px,4vw,22px); border-radius:30px; border:none;
                   color:white; font-family:'Nunito',sans-serif; font-weight:700;
                   font-size:clamp(12px,3vw,14px); cursor:pointer; flex-shrink:0;
                   -webkit-tap-highlight-color:transparent; }
        .pg-nc   { font-size:clamp(12px,3vw,14px); color:#9A9AB0; font-weight:600; text-align:center; }

        /* touch: always show overlay slightly */
        @media(hover:none){ .pg-ov { background:rgba(0,0,0,0); } }
      `}</style>

      <div className="pg">
        <div className="pg-blob pg-b1" />
        <div className="pg-blob pg-b2" />

        {/* Header */}
        <header className="pg-header">
          <div className="pg-badge">📸 Our Gallery</div>
          <h1 className="pg-h1">
            Moments of <span className="pg-accent">Joy & Learning</span>
          </h1>
          <p className="pg-sub">
            Every day brings new adventures, friendships, and discoveries. Here's a peek
            into the magical world of our little learners.
          </p>
        </header>

        {/* Filter */}
        <div className="pg-fw">
          <div className="pg-fs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`pg-fb${activeCategory === cat ? " on" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                <span>{categoryEmojis[cat]}</span>{cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <main className="pg-grid">
          {filtered.map((photo, i) => (
            <div
              key={photo.id}
              className="pg-card"
              style={{
                animationDelay: `${i * 0.06}s`,
                transform: !isTouch && hoveredId === photo.id
                  ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                boxShadow: !isTouch && hoveredId === photo.id
                  ? `0 20px 50px ${photo.accent}33` : "0 4px 20px rgba(0,0,0,.08)",
              }}
              onMouseEnter={() => setHoveredId(photo.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setLightboxPhoto(photo)}
            >
              <div className="pg-pbox" style={{ background: photo.color }}>
                <span className="pg-pe">{photo.emoji}</span>
                <div className="pg-ov" style={{ opacity: hoveredId === photo.id ? 1 : 0 }}>
                  <span className="pg-vi">🔍 View</span>
                </div>
              </div>
              <div className="pg-cb">
                <span className="pg-tag" style={{ backgroundColor: photo.accent + "22", color: photo.accent }}>
                  {categoryEmojis[photo.category]} {photo.category}
                </span>
                <h3 className="pg-ct">{photo.title}</h3>
                <p className="pg-cd">{photo.description}</p>
              </div>
              <div className="pg-rib" style={{ backgroundColor: photo.accent }} />
            </div>
          ))}
        </main>

        {/* Stats */}
        <section className="pg-stats">
          {[
            { num: "500+", label: "Happy Moments", emoji: "😊" },
            { num: "120+", label: "Activities",    emoji: "🎯" },
            { num: "6",    label: "Categories",    emoji: "🌟" },
            { num: "∞",    label: "Memories Made", emoji: "💛" },
          ].map((s) => (
            <div key={s.label} className="pg-si">
              <span className="pg-se">{s.emoji}</span>
              <span className="pg-sn">{s.num}</span>
              <span className="pg-sl">{s.label}</span>
            </div>
          ))}
        </section>

        {/* Lightbox */}
        {lightboxPhoto && (
          <div className="pg-lbbg" onClick={() => setLightboxPhoto(null)}>
            <div className="pg-lb" onClick={(e) => e.stopPropagation()}>
              <button className="pg-cx" onClick={() => setLightboxPhoto(null)}>✕</button>
              <div className="pg-lbp" style={{ background: lightboxPhoto.color }}>
                <span className="pg-lbe">{lightboxPhoto.emoji}</span>
              </div>
              <div className="pg-lbi">
                <span
                  className="pg-tag"
                  style={{
                    backgroundColor: lightboxPhoto.accent + "22",
                    color: lightboxPhoto.accent,
                    marginBottom: 12,
                    display: "inline-block",
                  }}
                >
                  {categoryEmojis[lightboxPhoto.category]} {lightboxPhoto.category}
                </span>
                <h2 className="pg-lbt">{lightboxPhoto.title}</h2>
                <p className="pg-lbd">{lightboxPhoto.description}</p>
              </div>
              <div className="pg-nav">
                <button
                  className="pg-nb"
                  style={{ backgroundColor: lightboxPhoto.accent }}
                  onClick={() => navigate(-1)}
                >← Prev</button>
                <span className="pg-nc">
                  {filtered.findIndex((p) => p.id === lightboxPhoto.id) + 1} / {filtered.length}
                </span>
                <button
                  className="pg-nb"
                  style={{ backgroundColor: lightboxPhoto.accent }}
                  onClick={() => navigate(1)}
                >Next →</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}