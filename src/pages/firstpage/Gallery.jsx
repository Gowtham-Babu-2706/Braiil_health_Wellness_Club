const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-6 md:px-16 bg-cream min-h-screen">
      <div className="flex flex-col mb-10 ">
        <p className="text-[0.8rem] m-1 font-sans text-sage tracking-widest ">VISUAL JOURNEY</p>
        
        <h2 className="text-5xl font-serif font-bold tracking-tight mb-5">
          Our <span className="text-sage italic ">Gallery</span> 
        </h2>
        <p className="text-[0.8rem] ml-1 font-sans text-gray-500 tracking-widest ">Moments captured from workshops, events, and community initiatives across campuses.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[60vh]">
        <div className="col-span-2 row-span-2 bg-sage/10 rounded-xl flex flex-col items-center justify-center text-4xl">🧠<p className="text-xs font-sans tracking-wide text-gray-500">Workshop Highlights</p></div>
        <div className="bg-gold/10 h-[30vh] rounded-xl flex flex-col items-center justify-center text-4xl">🎓<p className="text-xs font-sans tracking-wide text-gray-500">Campus Events</p></div>
        <div className="bg-green-100 h-[30vh] rounded-xl flex flex-col items-center justify-center text-4xl">🌿<p className="text-xs font-sans tracking-wide text-gray-500">Wellness Sessions</p></div>
        <div className="bg-gold/10 h-[30vh] rounded-xl flex flex-col items-center justify-center text-4xl">🎓<p className="text-xs font-sans tracking-wide text-gray-500">Partnerships</p></div>
        <div className="bg-green-100 h-[30vh] rounded-xl flex flex-col items-center justify-center text-4xl">🌿<p className="text-xs font-sans tracking-wide text-gray-500">Tech Programs</p></div>
      </div>

    </section>
  );
};

export default Gallery;