import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { fetchSectionData } from "../utils/supabaseClient";

// Fallback pool specifically for demoing the slideshow before Supabase is fully configured
const fallbackAlbumImages = [
  { id: 101, category: "wellness", image_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop", title: "Emotional Regulation" },
  { id: 102, category: "wellness", image_url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop", title: "Wellness Drive" },
  { id: 103, category: "wellness", image_url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop", title: "Music Therapy" },
  { id: 104, category: "workshops", image_url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop", title: "Stress Buster Camp" },
  { id: 105, category: "workshops", image_url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", title: "Leadership Lab" },
  { id: 106, category: "events", image_url: "https://images.unsplash.com/photo-1523580494112-071d16940d14?q=80&w=2070&auto=format&fit=crop", title: "Graduation Ceremony" },
  { id: 107, category: "events", image_url: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop", title: "Partner Summit" },
  { id: 108, category: "tech", image_url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop", title: "AI Bootcamp" },
  { id: 109, category: "tech", image_url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", title: "Research Expo" },
];

const AlbumPage = () => {
  const { category } = useParams();
  const safeCategory = category.toLowerCase();
  
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset to top to ensure clean transition
    window.scrollTo(0, 0);

    const getAlbumData = async () => {
      // Typically you would fetch from Supabase. We fetch all from 'gallery' and filter here.
      const data = await fetchSectionData("gallery");
      
      let matchedImages = [];
      if (data && data.length > 0) {
        matchedImages = data.filter(img => img.category?.toLowerCase() === safeCategory);
      }
      
      // If none found in DB, drop back to our stunning Unsplash fallback
      if (matchedImages.length === 0) {
        matchedImages = fallbackAlbumImages.filter(img => img.category === safeCategory);
      }
      
      // If totally unknown category, show everything to avoid breaking visually
      if (matchedImages.length === 0) {
        matchedImages = fallbackAlbumImages;
      }
      
      setImages(matchedImages);
    };

    getAlbumData();
  }, [category, safeCategory]);

  // Slideshow advance function
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return <div className="min-h-screen bg-cream" />;

  return (
    <div className="min-h-screen bg-cream font-sans">
      
      {/* ── ALUBM SLIDESHOW FRONT SHOW ── */}
      <section className="relative w-full h-[60vh] md:h-[80vh] bg-warm-dark overflow-hidden flex items-center justify-center pt-16">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]?.image_url}
            alt={images[currentIndex]?.title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Carousel UI overlays */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-16">
           <Link to="/collection" className="mb-auto self-start text-xs font-sans tracking-widest text-white/70 uppercase hover:text-white border border-white/20 px-4 py-2 rounded-full backdrop-blur-md transition-colors">
             ← Back to Gallery
           </Link>
           
           <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight drop-shadow-md capitalize">
             {safeCategory} <span className="italic text-sage-light">Moments</span>
           </h1>
           <p className="text-white/80 mt-2 font-sans tracking-wide">
             Viewing {currentIndex + 1} of {images.length}
           </p>
        </div>

        {/* Controls */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all active:scale-95">
          ❮
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all active:scale-95">
          ❯
        </button>
      </section>

      {/* ── LAZY LOADED ALBUM GRID ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-20">
        <div className="flex flex-col mb-10 text-center">
           <p className="text-xs tracking-[0.3em] text-sage uppercase mb-3">✦ Full Archive</p>
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-dark">All {safeCategory} Captures</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group rounded-3xl overflow-hidden aspect-square bg-sage/10 cursor-pointer shadow-md hover:shadow-xl hover:shadow-sage/20 transition-all"
              onClick={() => {
                // Allows jumping to this specific image in the slideshow
                setCurrentIndex(i);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {/* LAZY LOADING ATTACHED APPLIED HERE */}
              <img 
                src={img.image_url} 
                alt={img.title || "Gallery post"} 
                loading="lazy" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-serif font-semibold">{img.title || "Archive Photo"}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AlbumPage;
