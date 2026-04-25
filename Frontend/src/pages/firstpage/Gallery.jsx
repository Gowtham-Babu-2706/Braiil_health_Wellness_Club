import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fetchSectionData } from "../../utils/supabaseClient";

const fallbackTiles = [
  {
    id: 1,
    emoji: "🧠",
    label: "Workshop Highlights",
    tag: "Workshops",
    gradient: "from-sage/60 to-green-800/70",
    span: "col-span-2 row-span-2",
    image_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop"
  },
  {
    id: 2,
    emoji: "🎓",
    label: "Campus Events",
    tag: "Events",
    gradient: "from-gold/50 to-amber-700/60",
    span: "",
    image_url: "https://images.unsplash.com/photo-1523580494112-071d16940d14?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    emoji: "🌿",
    label: "Wellness Sessions",
    tag: "Wellness",
    gradient: "from-emerald-400/50 to-emerald-800/60",
    span: "",
    image_url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    emoji: "🤝",
    label: "Partnerships",
    tag: "Network",
    gradient: "from-gold/40 to-orange-600/50",
    span: "",
    image_url: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    emoji: "💻",
    label: "Tech Programs",
    tag: "EdTech",
    gradient: "from-primary/40 to-indigo-800/60",
    span: "",
    image_url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
  },
];

const Gallery = () => {
  const navigate = useNavigate();
  const [tiles, setTiles] = useState(fallbackTiles);

  useEffect(() => {
    const fetchGalleryPreview = async () => {
      // Pulling 5 images from Supabase table 'home_gallery'
      const data = await fetchSectionData("home_gallery");
      
      if (data && data.length > 0) {
        const mergedData = data.slice(0, 5).map((item, index) => ({
          ...fallbackTiles[index % fallbackTiles.length], 
          ...item 
        }));
        setTiles(mergedData);
      }
    };
    fetchGalleryPreview();
  }, []);

  return (
    <section id="gallery" className="py-24 px-6 md:px-16 bg-cream">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="text-xs font-sans tracking-[0.3em] text-sage uppercase mb-3">
            ✦ Visual Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-warm-dark">
            Our{" "}
            <span className="text-sage italic">Gallery</span>
          </h2>
          <p className="mt-3 text-sm text-gray-500 font-sans max-w-md">
            Moments captured from workshops, events, and community initiatives
            across campuses.
          </p>
        </div>

        <Link
          to="/collection"
          className="group self-start md:self-auto flex items-center gap-2 border-2 border-sage text-sage px-6 py-3 rounded-full font-sans text-sm hover:bg-sage hover:text-white transition-all duration-300 whitespace-nowrap"
        >
          View Full Gallery
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4">
        {tiles.map((tile, i) => (
          <motion.div
            key={i}
            onClick={() => navigate(`/collection/${tile.tag.toLowerCase()}`)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative rounded-3xl overflow-hidden group cursor-pointer ${tile.span} bg-gradient-to-br ${tile.gradient} hover:scale-[1.02] hover:shadow-2xl hover:shadow-sage/20 transition-all duration-500`}
          >
            {/* S3 IMAGE RENDER */}
            {tile.image_url ? (
              <>
                <img 
                  src={tile.image_url} 
                  alt={tile.label} 
                  className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/90 via-warm-dark/20 to-transparent z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              </>
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_60%)]" />
            )}

            {/* Tag */}
            <div className="absolute top-4 left-4 z-10">
              <span className="text-[0.6rem] tracking-widest uppercase bg-black/20 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/20 shadow-sm">
                {tile.tag}
              </span>
            </div>

            {/* Emoji (Only if no image) */}
            {!tile.image_url && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
                  style={{ fontSize: tile.span ? "4.5rem" : "2.5rem" }}
                >
                  {tile.emoji}
                </span>
              </div>
            )}

            {/* Bottom label */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 z-10">
              <p className="text-white font-serif font-bold text-sm drop-shadow-md">
                {tile.label}
              </p>
            </div>

            {/* Bottom static label (always visible, fades out on hover) */}
            <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-opacity duration-300 z-10">
              <p className={`font-sans text-xs tracking-wide font-medium ${tile.image_url ? 'text-white/90 drop-shadow-sm' : 'text-white/80'}`}>
                {tile.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 flex justify-center">
        <Link
          to="/collection"
          className="group inline-flex items-center gap-3 bg-sage text-white px-8 py-4 rounded-full font-sans text-sm hover:shadow-xl hover:shadow-sage/30 hover:scale-105 transition-all duration-300"
        >
          <span>Explore All Moments</span>
          <span className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 text-xs">
            →
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Gallery;