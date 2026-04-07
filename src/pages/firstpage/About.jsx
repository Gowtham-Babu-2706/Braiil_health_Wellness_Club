import React from "react";

const About = () => {
  const carddetail = [
    {
      title: "Academic Collaboration",
      logo: "🎓",
      desc: "Partnering with schools and colleges to integrate wellness into learning ecosystems.",
    },
    {
      title: "Research Programs",
      logo: "🔬",
      desc: "Evidence-based programs and internships designed to shape future-ready students.",
    },
    {
      title: "Awareness Campaigns",
      logo: "💚",
      desc: "Community-driven campaigns that destigmatize mental health and build resilience.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-white grid grid-cols-1 md:grid-cols-2 gap-12">

      {/* LEFT SIDE */}
      <div className="flex flex-col gap-10">
        
        {/* Heading */}
        <div>
          <p className="text-xs text-gray-500 tracking-wide font-sans">
            WHO ARE WE
          </p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-serif">
            About <span className="text-sage">BRAIIL</span> EdTech Pvt Ltd
          </h1>

          <p className="mt-6 text-gray-500 font-light">
            BRAIIL EdTech is an innovation-driven organization focused on building
            the next generation of learners through technology education, research
            initiatives, and mental wellness programs.
          </p>

          <p className="mt-4 text-gray-500 font-light">
            We collaborate with schools, colleges, and student communities to
            create an ecosystem where students can develop both technical
            intelligence and emotional well-being.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {carddetail.map((c, k) => (
            <div
              key={k}
              className="flex gap-4 items-start bg-sage/10 p-4 rounded-xl border-l-4 border-sage hover:scale-[1.02] transition duration-300 shadow-sm hover:shadow-md"
            >
              <p className="text-2xl">{c.logo}</p>

              <div>
                <p className="text-sm text-gray-500 tracking-wide">
                  {c.title}
                </p>
                <p className="text-gray-600">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-gradient-to-br from-sage/80 to-green-400/70 p-8 md:p-10 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg">
        
        {/* Quote */}
        <p className="text-2xl md:text-3xl italic text-gray-800 leading-relaxed">
          Through <br />
          workshops, research programs, internships, and awareness campaigns,
          BRAIIL aims to shape future-ready and mentally resilient students.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 w-full mt-10">

          <div className="p-4 bg-white/40 backdrop-blur-sm rounded-xl text-gray-800 shadow-sm">
            <p className="text-xl font-semibold">2024</p>
            <p className="text-sm text-gray-600">Founded</p>
          </div>

          <div className="p-4 bg-white/40 backdrop-blur-sm rounded-xl text-gray-800 shadow-sm">
            <p className="text-xl font-semibold">Pan-India</p>
            <p className="text-sm text-gray-600">Reach</p>
          </div>

          <div className="p-4 bg-white/40 backdrop-blur-sm rounded-xl text-gray-800 shadow-sm">
            <p className="text-xl font-semibold">100%</p>
            <p className="text-sm text-gray-600">Student-Focused</p>
          </div>

          <div className="p-4 bg-white/40 backdrop-blur-sm rounded-xl text-gray-800 shadow-sm">
            <p className="text-xl font-semibold">∞</p>
            <p className="text-sm text-gray-600">Impact</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;