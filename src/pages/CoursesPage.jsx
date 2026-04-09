import { useState } from "react";
import { motion } from "framer-motion";

const allCourses = [
  {
    id: 1,
    category: "wellness",
    icon: "🧘",
    tag: "Mental Wellness",
    title: "Mindfulness & Stress Management",
    subtitle: "8-Week Immersive Program",
    desc: "A comprehensive, evidence-based program teaching students how to manage academic pressure, regulate emotions, and build long-term mental resilience through guided mindfulness practices.",
    duration: "8 Weeks",
    level: "Beginner",
    sessions: "16 Sessions",
    students: "1,200+",
    highlights: ["Guided Meditation", "Breathing Techniques", "Journaling Practice", "Peer Support Circles"],
    color: "sage",
    gradient: "from-sage/10 to-green-100",
    border: "border-sage/30",
    badge: "bg-sage/10 text-sage",
    dot: "bg-sage",
  },
  {
    id: 2,
    category: "wellness",
    icon: "💚",
    tag: "Mental Wellness",
    title: "Emotional Intelligence Masterclass",
    subtitle: "4-Week Intensive",
    desc: "Develop empathy, self-awareness, and emotional regulation skills essential for personal and professional growth. Practical exercises with real-world case studies.",
    duration: "4 Weeks",
    level: "Intermediate",
    sessions: "8 Sessions",
    students: "800+",
    highlights: ["Self-Awareness Modules", "Empathy Building", "Conflict Resolution", "Leadership EQ"],
    color: "sage",
    gradient: "from-emerald-50 to-teal-100",
    border: "border-emerald-300",
    badge: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-500",
  },
  {
    id: 3,
    category: "tech",
    icon: "🤖",
    tag: "Technology",
    title: "AI & Machine Learning Fundamentals",
    subtitle: "12-Week Bootcamp",
    desc: "Hands-on introduction to artificial intelligence and machine learning. Build real projects using Python, explore data science fundamentals, and gain industry-relevant skills.",
    duration: "12 Weeks",
    level: "Beginner",
    sessions: "24 Sessions",
    students: "950+",
    highlights: ["Python Programming", "Data Analysis", "ML Algorithms", "Project Portfolio"],
    color: "primary",
    gradient: "from-indigo-50 to-blue-100",
    border: "border-indigo-300",
    badge: "bg-indigo-100 text-indigo-700",
    dot: "bg-indigo-500",
  },
  {
    id: 4,
    category: "tech",
    icon: "💻",
    tag: "Technology",
    title: "Full-Stack Web Development",
    subtitle: "16-Week Comprehensive Course",
    desc: "From zero to job-ready developer. Master HTML, CSS, JavaScript, React, Node.js, and databases. Includes live projects, code reviews, and placement support.",
    duration: "16 Weeks",
    level: "Beginner to Advanced",
    sessions: "32 Sessions",
    students: "1,500+",
    highlights: ["React & Node.js", "Database Design", "REST APIs", "Deployment & DevOps"],
    color: "primary",
    gradient: "from-blue-50 to-cyan-100",
    border: "border-blue-300",
    badge: "bg-blue-100 text-blue-700",
    dot: "bg-blue-500",
  },
  {
    id: 5,
    category: "research",
    icon: "🔬",
    tag: "Research",
    title: "Student Research Internship",
    subtitle: "3-Month Mentored Program",
    desc: "Work alongside industry experts on live research projects in EdTech and mental health. Culminates in published findings, a certificate, and real-world portfolio work.",
    duration: "3 Months",
    level: "Advanced",
    sessions: "Flexible",
    students: "400+",
    highlights: ["Live Research Projects", "Expert Mentorship", "Publication Support", "Certificate"],
    color: "gold",
    gradient: "from-amber-50 to-yellow-100",
    border: "border-amber-300",
    badge: "bg-amber-100 text-amber-700",
    dot: "bg-amber-500",
  },
  {
    id: 6,
    category: "research",
    icon: "📊",
    tag: "Research",
    title: "Data Analytics & Insights",
    subtitle: "6-Week Crash Course",
    desc: "Learn to collect, analyze, and visualize data to drive decisions. Covers Excel, Python (Pandas), Tableau, and real business datasets with actionable outcomes.",
    duration: "6 Weeks",
    level: "Intermediate",
    sessions: "12 Sessions",
    students: "600+",
    highlights: ["Excel & Python", "Tableau Dashboards", "Business Case Studies", "Capstone Project"],
    color: "gold",
    gradient: "from-orange-50 to-amber-100",
    border: "border-orange-300",
    badge: "bg-orange-100 text-orange-700",
    dot: "bg-orange-500",
  },
  {
    id: 7,
    category: "leadership",
    icon: "👑",
    tag: "Leadership",
    title: "Future Leaders Program",
    subtitle: "10-Week Transformation",
    desc: "A flagship leadership program combining emotional intelligence, strategic thinking, public speaking, and team management. Designed for aspiring student leaders.",
    duration: "10 Weeks",
    level: "All Levels",
    sessions: "20 Sessions",
    students: "700+",
    highlights: ["Public Speaking", "Strategic Thinking", "Team Dynamics", "Personal Branding"],
    color: "warm-dark",
    gradient: "from-rose-50 to-pink-100",
    border: "border-rose-300",
    badge: "bg-rose-100 text-rose-700",
    dot: "bg-rose-500",
  },
  {
    id: 8,
    category: "leadership",
    icon: "🗣️",
    tag: "Leadership",
    title: "Communication & Public Speaking",
    subtitle: "5-Week Workshop Series",
    desc: "Overcome fear, articulate ideas with clarity, and command any room. Practical sessions with video feedback, debate exercises, and storytelling workshops.",
    duration: "5 Weeks",
    level: "Beginner",
    sessions: "10 Sessions",
    students: "900+",
    highlights: ["Stage Confidence", "Storytelling", "Debate & Discussion", "Video Feedback"],
    color: "warm-dark",
    gradient: "from-purple-50 to-violet-100",
    border: "border-purple-300",
    badge: "bg-purple-100 text-purple-700",
    dot: "bg-purple-500",
  },
];

const filters = [
  { key: "all", label: "All Programs", icon: "✦" },
  { key: "wellness", label: "Wellness", icon: "🧘" },
  { key: "tech", label: "Technology", icon: "💻" },
  { key: "research", label: "Research", icon: "🔬" },
  { key: "leadership", label: "Leadership", icon: "👑" },
];

const levelColor = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-red-100 text-red-700",
  "All Levels": "bg-blue-100 text-blue-700",
  "Beginner to Advanced": "bg-purple-100 text-purple-700",
  Flexible: "bg-gray-100 text-gray-600",
};

const CoursesPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedId, setExpandedId] = useState(null);
  const [enrollModal, setEnrollModal] = useState(null);

  const filtered =
    activeFilter === "all"
      ? allCourses
      : allCourses.filter((c) => c.category === activeFilter);

  return (
    <div className="min-h-screen bg-cream font-sans">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-warm-dark to-sage pt-32 pb-28 px-6 md:px-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(107,143,113,0.3),transparent_60%)]" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-sage/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gold/10 rounded-full blur-2xl" />

        <div className="relative max-w-4xl mx-auto flex flex-col items-center gap-5">
          <span className="text-xs tracking-[0.3em] text-sage-light bg-white/10 border border-white/20 px-5 py-2 rounded-full uppercase">
            BRAIIL EdTech Programs
          </span>
          <h1 className="text-5xl md:text-7xl font-serif italic font-bold text-cream leading-tight">
            Our <span className="text-gold-light">Courses</span>
          </h1>
          <p className="text-sage-light text-base md:text-lg max-w-xl leading-relaxed">
            Carefully crafted programs that unite technology education with mental
            wellness — designed to help students thrive inside and outside the classroom.
          </p>
          <div className="flex gap-4 mt-2">
            <div className="text-center">
              <p className="text-2xl font-bold text-cream font-serif">8+</p>
              <p className="text-xs text-sage-light tracking-widest">PROGRAMS</p>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <p className="text-2xl font-bold text-cream font-serif">6K+</p>
              <p className="text-xs text-sage-light tracking-widest">ENROLLED</p>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <p className="text-2xl font-bold text-cream font-serif">98%</p>
              <p className="text-xs text-sage-light tracking-widest">SATISFACTION</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
            <path d="M0,30 C480,70 960,0 1440,30 L1440,60 L0,60 Z" fill="#FBF8F3" />
          </svg>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <section className="sticky top-16 z-40 bg-cream/90 backdrop-blur-md border-b border-gold/20 px-6 md:px-16 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-3 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-sans whitespace-nowrap transition-all duration-300 border ${
                activeFilter === f.key
                  ? "bg-sage text-white border-sage shadow-md shadow-sage/20 scale-105"
                  : "bg-white text-gray-600 border-gray-200 hover:border-sage hover:text-sage"
              }`}
            >
              <span>{f.icon}</span>
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-xs text-gray-400 whitespace-nowrap">
            {filtered.length} programs
          </span>
        </div>
      </section>

      {/* ── COURSE CARDS ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((course, i) => {
            const isExpanded = expandedId === course.id;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                key={course.id}
                className={`relative rounded-3xl border ${course.border} bg-gradient-to-br ${course.gradient} p-6 flex flex-col gap-4 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer`}
                onClick={() => setExpandedId(isExpanded ? null : course.id)}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center text-2xl shadow-sm">
                      {course.icon}
                    </div>
                    <div>
                      <span className={`text-[0.6rem] uppercase tracking-widest px-2 py-1 rounded-full font-sans ${course.badge}`}>
                        {course.tag}
                      </span>
                      <p className="text-xs text-gray-500 mt-1 font-sans">{course.subtitle}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-sans ${levelColor[course.level] || "bg-gray-100 text-gray-600"}`}>
                    {course.level}
                  </span>
                </div>

                {/* Title & desc */}
                <div>
                  <h3 className="text-xl font-serif font-bold text-warm-dark leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed font-sans line-clamp-2">
                    {course.desc}
                  </p>
                </div>

                {/* Meta row */}
                <div className="flex flex-wrap gap-3 text-xs font-sans text-gray-500">
                  <span className="flex items-center gap-1">⏱ {course.duration}</span>
                  <span className="flex items-center gap-1">📅 {course.sessions}</span>
                  <span className="flex items-center gap-1">👥 {course.students} enrolled</span>
                </div>

                {/* Highlights — expanded */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="pt-2 border-t border-white/50">
                    <p className="text-xs font-sans text-gray-500 uppercase tracking-widest mb-3">What You'll Learn</p>
                    <div className="grid grid-cols-2 gap-2">
                      {course.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700 font-sans">
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${course.dot}`} />
                          {h}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-4 leading-relaxed font-sans">
                      {course.desc}
                    </p>
                  </div>
                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between mt-auto pt-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); setExpandedId(isExpanded ? null : course.id); }}
                    className="text-xs font-sans text-gray-500 hover:text-sage transition-colors flex items-center gap-1"
                  >
                    {isExpanded ? "Show less ↑" : "Learn more ↓"}
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setEnrollModal(course); }}
                    className="bg-sage text-white text-sm px-5 py-2 rounded-full hover:scale-105 hover:shadow-md hover:shadow-sage/30 transition-all duration-300 font-sans"
                  >
                    Enroll Now →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] text-sage uppercase mb-3">✦ Why BRAIIL</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-dark">
              Learning That <span className="text-sage italic">Transforms</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Expert-Designed Curriculum", desc: "Every program is crafted by industry experts and mental health professionals to maximize real-world impact." },
              { icon: "🤝", title: "Community-First Approach", desc: "Join a thriving peer network across 15+ colleges. Learn together, grow together, support each other." },
              { icon: "📜", title: "Recognized Certification", desc: "Earn certificates acknowledged by partner institutions and forward-looking employers across India." },
            ].map((f, i) => (
              <div key={i} className="bg-cream rounded-3xl p-8 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl">{f.icon}</span>
                <h3 className="text-lg font-serif font-bold text-warm-dark">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-sans">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-sage mx-6 md:mx-16 my-16 rounded-3xl px-8 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-sage/20">
        <div>
          <p className="text-xs tracking-widest text-sage-light uppercase mb-2">Start Your Journey</p>
          <h2 className="text-2xl md:text-3xl font-serif italic text-cream font-bold leading-snug">
            Not sure which program<br className="hidden md:block" />
            <span className="text-gold-light"> is right for you?</span>
          </h2>
          <p className="text-sage-light text-sm mt-2 font-sans">Talk to our counselors — we'll help you find the perfect fit.</p>
        </div>
        <div className="flex gap-3">
          <a href="/contact" className="bg-white text-sage px-6 py-3 rounded-full font-sans font-medium hover:scale-105 transition-all text-sm whitespace-nowrap shadow-md">
            Talk to Us →
          </a>
          <a href="/partnership" className="border border-white/40 text-cream px-6 py-3 rounded-full font-sans font-medium hover:bg-white/10 transition-all text-sm whitespace-nowrap">
            Partner With Us
          </a>
        </div>
      </section>

      {/* ── ENROLL MODAL ── */}
      {enrollModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setEnrollModal(null)}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setEnrollModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl transition-colors"
            >
              ✕
            </button>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{enrollModal.icon}</span>
              <div>
                <h3 className="font-serif font-bold text-warm-dark text-lg">{enrollModal.title}</h3>
                <p className="text-xs text-gray-500 font-sans">{enrollModal.subtitle}</p>
              </div>
            </div>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-600 font-sans">First Name</label>
                  <input className="w-full border border-gray-200 rounded-xl p-2.5 mt-1 text-sm font-sans focus:outline-none focus:border-sage" placeholder="John" />
                </div>
                <div>
                  <label className="text-xs text-gray-600 font-sans">Last Name</label>
                  <input className="w-full border border-gray-200 rounded-xl p-2.5 mt-1 text-sm font-sans focus:outline-none focus:border-sage" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-600 font-sans">Email</label>
                <input type="email" className="w-full border border-gray-200 rounded-xl p-2.5 mt-1 text-sm font-sans focus:outline-none focus:border-sage" placeholder="john@email.com" />
              </div>
              <div>
                <label className="text-xs text-gray-600 font-sans">Phone</label>
                <input type="tel" className="w-full border border-gray-200 rounded-xl p-2.5 mt-1 text-sm font-sans focus:outline-none focus:border-sage" placeholder="+91 9876543210" />
              </div>
              <div>
                <label className="text-xs text-gray-600 font-sans">College / Institution</label>
                <input className="w-full border border-gray-200 rounded-xl p-2.5 mt-1 text-sm font-sans focus:outline-none focus:border-sage" placeholder="Your institution name" />
              </div>
              <button
                type="submit"
                onClick={() => setEnrollModal(null)}
                className="w-full bg-sage text-white py-3 rounded-full font-sans hover:shadow-lg hover:shadow-sage/30 hover:scale-[1.02] transition-all duration-300 mt-2"
              >
                Confirm Enrollment ✓
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
