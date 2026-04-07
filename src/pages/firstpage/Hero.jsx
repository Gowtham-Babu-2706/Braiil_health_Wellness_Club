const Hero = () => {
  return (
    <section className="min-h-screen min-w-screen flex items-center px-6 md:px-16 pt-24 bg-cream">
      
      <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-6xl mx-auto">

        {/* LEFT */}
        <div>
          <span className="text-xs tracking-widest bg-sage/10 text-sage px-4 py-2 rounded-full">
             Mental Wellness × EdTech
          </span>

          <h1 className="text-4xl font-semibold md:text-6xl font-serif mt-6 leading-tight">
            Nurturing Minds,<br />
            <span className="text-sage italic font-semibold">Shaping Futures</span>
          </h1>

          <p className="mt-4 tracking-wide text-gray-600 max-w-md">
            BRAIIL EdTech blends technology education with emotional well-being — helping students become future-ready and mentally resilient through research, workshops & awareness campaigns.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-sage text-white px-6 py-3 rounded-full shadow-lg">
              Explore Programs
            </button>

            <button className="border px-6 py-3 rounded-full">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 text-center">
          <div className="bg-sage text-white p-6 rounded-2xl">
            <h2 className="text-xl font-bold">BRAIIL</h2>
            <p className="text-xs uppercase">Mental Wellness Club</p>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-5">
            <div>
              <p className="text-xl font-bold text-sage">500+</p>
              <p className="text-xs">Students</p>
            </div>
            <div>
              <p className="text-xl font-bold text-sage">30+</p>
              <p className="text-xs">Workshops</p>
            </div>
            <div>
              <p className="text-xl font-bold text-sage">15+</p>
              <p className="text-xs">Colleges</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;