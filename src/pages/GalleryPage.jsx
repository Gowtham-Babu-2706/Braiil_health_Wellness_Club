import React from "react";

const GalleryPage = () => {
  return (
    <section className="w-full min-h-screen pt-20 bg-cream">

      <div className="w-full h-full px-6 md:px-16 py-16 flex flex-col items-center justify-center gap-16 bg-sage rounded-t-3xl">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl">
          <p className="text-xs font-sans text-sage-light tracking-widest">
            HEALTH & MENTAL WELLNESS CLUB
          </p>

          <h1 className="text-4xl md:text-5xl font-serif italic text-cream font-bold tracking-wide">
            Our Gallery
          </h1>

          <p className="text-sm md:text-base text-sage-light">
            Moments captured from workshops, events, and community initiatives
            across campuses.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">

          <div className="flex flex-col items-center justify-center text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-cream hover:scale-105 transition">
            <p className="text-2xl font-semibold">120+</p>
            <p className="text-xs tracking-widest mt-1">EVENTS HELD</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-cream hover:scale-105 transition">
            <p className="text-2xl font-semibold">5</p>
            <p className="text-xs tracking-widest mt-1">CAMPUSES</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-cream hover:scale-105 transition">
            <p className="text-2xl font-semibold">24K+</p>
            <p className="text-xs tracking-widest mt-1">PARTICIPANTS</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-cream hover:scale-105 transition">
            <p className="text-2xl font-semibold">38</p>
            <p className="text-xs tracking-widest mt-1">PARTNERS</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GalleryPage;