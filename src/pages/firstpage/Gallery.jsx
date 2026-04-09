import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const tiles = [
  {
    emoji: "🧠",
    label: "Workshop Highlights",
    tag: "Workshops",
    gradient: "from-sage/60 to-green-800/70",
    span: "col-span-2 row-span-2",
  },
  {
    emoji: "🎓",
    label: "Campus Events",
    tag: "Events",
    gradient: "from-gold/50 to-amber-700/60",
    span: "",
  },
  {
    emoji: "🌿",
    label: "Wellness Sessions",
    tag: "Wellness",
    gradient: "from-emerald-400/50 to-emerald-800/60",
    span: "",
  },
  {
    emoji: "🤝",
    label: "Partnerships",
    tag: "Network",
    gradient: "from-gold/40 to-orange-600/50",
    span: "",
  },
  {
    emoji: "💻",
    label: "Tech Programs",
    tag: "EdTech",
    gradient: "from-primary/40 to-indigo-800/60",
    span: "",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6 md:px-16 bg-cream">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="text-xs font-sans tracking-[0.3em] text-sage uppercase mb-3">
            ✦ Visual Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative rounded-3xl overflow-hidden group cursor-pointer ${tile.span} bg-gradient-to-br ${tile.gradient} hover:scale-[1.02] hover:shadow-2xl hover:shadow-sage/20 transition-all duration-500`}
          >
            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_60%)]" />

            {/* Tag */}
            <div className="absolute top-4 left-4">
              <span className="text-[0.6rem] tracking-widest uppercase bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-white/30">
                {tile.tag}
              </span>
            </div>

            {/* Emoji */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
                style={{ fontSize: tile.span ? "4.5rem" : "2.5rem" }}
              >
                {tile.emoji}
              </span>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
              <p className="text-white font-serif font-semibold text-sm drop-shadow">
                {tile.label}
              </p>
            </div>

            {/* Bottom static label (always visible) */}
            <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
              <p className="text-white/80 font-sans text-xs tracking-wide">
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