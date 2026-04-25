import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Hero = () => {

  return (
    <section className="min-h-screen w-full flex items-center px-6 md:px-16 pt-24 bg-cream overflow-hidden">
      
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center w-full max-w-7xl mx-auto">

        {/* LEFT SUMMARY/TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <span className="text-xs tracking-widest bg-sage/10 text-sage px-4 py-2 rounded-full font-sans uppercase font-semibold">
             Health Wellness × EdTech
          </span>

          <h1 className="text-5xl lg:text-7xl font-semibold font-serif mt-8 leading-[1.1] text-warm-dark">
            Nurturing Minds,<br />
            <span className="text-sage italic font-bold">Shaping Futures</span>
          </h1>

          <p className="mt-6 text-lg tracking-wide text-gray-600 max-w-lg leading-relaxed font-sans">
            BRAIIL EdTech blends technology education with emotional well-being — helping students become future-ready and mentally resilient through research, workshops & awareness campaigns.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link to='/collection' className="bg-sage text-white px-8 py-4 rounded-full shadow-[0_8px_30px_rgb(107,143,113,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(107,143,113,0.5)] transition-all duration-300 font-sans font-medium text-sm">
              Explore Programs
            </Link>

            <Link to='/contact' className="border-2 border-sage text-sage px-8 py-4 rounded-full hover:bg-sage hover:text-white transition-all duration-300 font-sans font-medium text-sm">
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* RIGHT METRICS SHOT WITH S3 IMAGE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative w-full rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col p-6 lg:p-8 bg-white/60 backdrop-blur-md border border-white/50 group gap-6"
        >
          {/* Hardcoded S3 Image */}
          <div className="w-full aspect-video rounded-[2rem] overflow-hidden shadow-md">
            <img 
              src="https://braiilpictures-565122144511-eu-north-1-an.s3.eu-north-1.amazonaws.com/FrontPage.avif" 
              alt="Students collaborating" 
              className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          {/* Floating Metric Card */}
          <div 
            className="relative z-10 bg-white rounded-[2rem] shadow-xl p-6 text-center w-full transform transition-transform duration-500 hover:-translate-y-2"
          >
            <div className="bg-sage text-white p-5 rounded-2xl shadow-inner">
              <h2 className="text-xl font-bold font-serif">BRAIIL</h2>
              <p className="text-[0.65rem] tracking-widest uppercase font-sans mt-0.5">Mental Wellness Club</p>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-5">
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold text-sage font-serif">500+</p>
                <p className="text-[0.65rem] text-gray-500 uppercase tracking-widest font-sans mt-1">Students</p>
              </div>
              <div className="flex flex-col items-center border-x border-gray-200">
                <p className="text-2xl font-bold text-sage font-serif">30+</p>
                <p className="text-[0.65rem] text-gray-500 uppercase tracking-widest font-sans mt-1">Workshops</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold text-sage font-serif">15+</p>
                <p className="text-[0.65rem] text-gray-500 uppercase tracking-widest font-sans mt-1">Colleges</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;