import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchSectionData } from "../utils/supabaseClient";

// Fallback layout and data in case Supabase is not yet populated
const fallbackGalleryItems = [
  {
    id: 1,
    category: "workshops",
    emoji: "🧘",
    title: "Mindfulness Workshop",
    subtitle: "Chennai Campus · March 2025",
    gradient: "from-sage/60 to-green-700/70",
    span: "col-span-2 row-span-2",
    desc: "A transformative session on emotional regulation",
    image_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "events",
    emoji: "🎓",
    title: "Graduation Ceremony",
    subtitle: "Coimbatore · Feb 2025",
    gradient: "from-gold/50 to-amber-600/60",
    span: "",
    desc: "Celebrating student achievements",
    image_url: "https://images.unsplash.com/photo-1523580494112-071d16940d14?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "wellness",
    emoji: "🌿",
    title: "Wellness Drive",
    subtitle: "Pan-India · Jan 2025",
    gradient: "from-green-400/50 to-emerald-700/60",
    span: "",
    desc: "Mental health awareness on campuses",
    image_url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "tech",
    emoji: "💻",
    title: "AI Bootcamp",
    subtitle: "Bangalore · Dec 2024",
    gradient: "from-primary/40 to-indigo-700/60",
    span: "",
    desc: "Hands-on AI & machine learning sessions",
    image_url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    category: "events",
    emoji: "🤝",
    title: "Partner Summit",
    subtitle: "Hyderabad · Nov 2024",
    gradient: "from-gold/40 to-orange-600/50",
    span: "",
    desc: "Bringing institutional partners together",
    image_url: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 6,
    category: "workshops",
    emoji: "🧠",
    title: "Stress Buster Camp",
    subtitle: "Mumbai · Oct 2024",
    gradient: "from-sage/50 to-teal-700/60",
    span: "col-span-2",
    desc: "Intensive two-day resilience building program",
    image_url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: 7,
    category: "wellness",
    emoji: "🎵",
    title: "Music Therapy",
    subtitle: "Pune · Sep 2024",
    gradient: "from-purple-400/40 to-violet-700/50",
    span: "",
    desc: "Sound healing for student communities",
    image_url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 8,
    category: "tech",
    emoji: "🔬",
    title: "Research Expo",
    subtitle: "Delhi · Aug 2024",
    gradient: "from-cyan-400/40 to-blue-700/50",
    span: "",
    desc: "Student-led research presentations",
    image_url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 9,
    category: "workshops",
    emoji: "👥",
    title: "Leadership Lab",
    subtitle: "Kochi · Jul 2024",
    gradient: "from-rose-400/40 to-pink-700/50",
    span: "",
    desc: "Developing emotionally intelligent leaders",
    image_url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
  },
];

const filters = ["all", "workshops", "events", "wellness", "tech"];

const stats = [
  { number: "120+", label: "Events Held", icon: "🎯" },
  { number: "5", label: "Campuses", icon: "🏛️" },
  { number: "24K+", label: "Participants", icon: "👥" },
  { number: "38", label: "Partners", icon: "🤝" },
];

const GalleryPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredId, setHoveredId] = useState(null);
  const [galleryItems, setGalleryItems] = useState(fallbackGalleryItems);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      // This will pull from your 'gallery' table in Supabase
      const data = await fetchSectionData("gallery");
      
      if (data && data.length > 0) {
        // Map Supabase data into our existing masonry layout
        const mergedData = data.map((item, index) => ({
          ...fallbackGalleryItems[index % fallbackGalleryItems.length], // keep layout span/gradient
          ...item // override with DB data (like image_url from S3)
        }));
        setGalleryItems(mergedData);
      }
    };
    fetchGalleryImages();
  }, []);

  const filtered =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeFilter);

  return (
    <div className="min-h-screen bg-cream font-sans">

      {/* ── HERO HEADER ── */}
      <section className="relative overflow-hidden bg-sage pt-32 pb-20 px-6 md:px-16">

        {/* Background decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

        <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center gap-5">
          <span className="text-xs font-sans tracking-[0.3em] text-sage-light bg-white/10 px-5 py-2 rounded-full border border-white/20 uppercase">
            Health & Mental Wellness Club
          </span>

          <h1 className="text-5xl md:text-7xl font-serif italic font-bold text-cream leading-tight">
            Our <span className="text-gold-light">Gallery</span>
          </h1>

          <p className="text-sage-light text-base md:text-lg max-w-xl leading-relaxed">
            Moments captured from workshops, events, and community initiatives
            across campuses — every frame a story of growth.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full max-w-3xl">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                <span className="text-2xl">{s.icon}</span>
                <p className="text-2xl font-bold text-cream font-serif">{s.number}</p>
                <p className="text-xs tracking-widest text-sage-light uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#FBF8F3" />
          </svg>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="sticky top-16 z-40 bg-cream/90 backdrop-blur-md border-b border-gold/20 px-6 md:px-16 py-4">
        <div className="max-w-5xl mx-auto flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-sans capitalize whitespace-nowrap transition-all duration-300 border ${
                activeFilter === f
                  ? "bg-sage text-white border-sage shadow-md shadow-sage/20 scale-105"
                  : "bg-white text-gray-600 border-gray-200 hover:border-sage hover:text-sage"
              }`}
            >
              {f === "all" ? "✦ All" : f}
            </button>
          ))}
          <span className="ml-auto text-xs text-gray-400 whitespace-nowrap font-sans">
            {filtered.length} moments
          </span>
        </div>
      </section>

      {/* ── MASONRY GALLERY ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4"
        >
          {filtered.map((item, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              key={item.id}
              onClick={() => navigate(`/collection/${item.category.toLowerCase()}`)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer group ${item.span} bg-gradient-to-br ${item.gradient} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sage/20`}
            >
              {/* S3 IMAGE RENDER */}
              {item.image_url ? (
                <>
                  <img 
                    src={item.image_url} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/90 via-warm-dark/20 to-transparent z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                </>
              ) : (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
              )}

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-5 z-10">
                {/* Top: category badge */}
                <span className="self-start text-[0.65rem] tracking-widest uppercase bg-black/20 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/20 shadow-sm">
                  {item.category}
                </span>

                {/* Center: emoji (Only show if no image exists) */}
                {!item.image_url && (
                  <div className="flex-1 flex items-center justify-center">
                    <span
                      className="transition-transform duration-500 group-hover:scale-110"
                      style={{ fontSize: item.span.includes("col-span-2") ? "5rem" : "3rem" }}
                    >
                      {item.emoji}
                    </span>
                  </div>
                )}

                {/* Bottom: info */}
                <div
                  className={`mt-auto transition-all duration-400 ${
                    hoveredId === item.id ? "translate-y-0 opacity-100" : "translate-y-2 opacity-90"
                  }`}
                >
                  <p className="text-white font-serif font-bold text-sm md:text-base leading-tight drop-shadow-md">
                    {item.title}
                  </p>
                  <p className="text-white/80 text-xs mt-1 font-sans drop-shadow-sm">{item.subtitle}</p>
                  <p
                    className={`text-white/90 text-xs mt-2 font-sans leading-relaxed transition-all duration-400 ${
                      hoveredId === item.id ? "max-h-12 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Load more */}
        <div className="flex justify-center mt-14">
          <button className="group flex items-center gap-3 border-2 border-sage text-sage px-8 py-3 rounded-full font-sans hover:bg-sage hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-sage/20">
            <span>Load More Moments</span>
            <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
          </button>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-sage mx-6 md:mx-16 mb-16 rounded-3xl px-8 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-sage/20">
        <div>
          <p className="text-xs tracking-widest text-sage-light uppercase mb-2">
            Be Part of the Journey
          </p>
          <h2 className="text-2xl md:text-3xl font-serif italic text-cream font-bold leading-snug">
            Ready to make your own <br className="hidden md:block" />
            <span className="text-gold-light">unforgettable moment?</span>
          </h2>
        </div>
        <div className="flex gap-3">
          <a
            href="/contact"
            className="bg-white text-sage px-6 py-3 rounded-full font-sans font-medium hover:scale-105 transition-all duration-300 shadow-md text-sm whitespace-nowrap"
          >
            Get In Touch →
          </a>
          <a
            href="/"
            className="border border-white/40 text-cream px-6 py-3 rounded-full font-sans font-medium hover:bg-white/10 transition-all duration-300 text-sm whitespace-nowrap"
          >
            Explore Programs
          </a>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;