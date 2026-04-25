import { motion } from "framer-motion";

const courses = [
  { title: "MENTAL WELLNESS", icon: "🧘",heading:"Mental Wellness Workshops",decs:"Interactive sessions on stress management, emotional regulation, and mindfulness tailored for student communities."},
  { title: "TECHNOLOGY", icon: "💻" ,heading:"Technology Education Programs",decs:"Cutting-edge tech curriculum covering AI, coding, and digital literacy to prepare students for the future."},
  { title: "REASEARCH", icon: "🔬",heading:"Research & Internship Initiatives",decs:"Hands-on research programs and internship opportunities that give students real-world exposure and skills. " },
  { title: "AWARENESS", icon: "🧠" ,heading:"Awareness Campaigns",decs:"Community outreach events designed to normalize mental health conversations and build peer support networks."},
  { title: "COMMUNITY", icon: "🤝",heading:"Student Community Building",decs:"Fostering a supportive ecosystem where students connect, collaborate, and grow together holistically." },
  { title: "LEADERSHIP", icon: "👑",heading:"Future Leadership Program",decs:"Developing emotionally intelligent leaders with strong technical and interpersonal competencies for tomorrow." },
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[0.8rem] m-1 font-sans text-gray-600 ">WHAT WE OFFER</p>
        
        <h2 className="text-5xl font-serif font-bold mb-10 tracking-tight">
          Our <span className="text-sage italic ">Programs</span> & Courses
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-cream p-6 rounded-2xl shadow hover:shadow-xl transition"
          >
            <div className="text-4xl">{c.icon}</div>
            <h3 className="mt-4 text-xs font-sans text-gray-500">{c.title}</h3>
            <p className="mt-2 text-[1.2rem]/6 font-sans font-bold text-gray-800 tracking-tight ">{c.heading}</p>
            <p className="mt-4 text-[0.9rem] font-sans text-gray-700 tracking-wide">{c.decs}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Courses;