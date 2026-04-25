import { useState } from "react";

const partnerTypes = [
  {
    icon: "🏫",
    title: "Academic Partners",
    desc: "Schools and colleges that integrate our wellness and tech programs into their curriculum, creating a holistic student experience.",
    perks: ["Curriculum Integration", "Student Workshops", "Faculty Training", "Branded Certification"],
    gradient: "from-sage/10 to-green-100",
    border: "border-sage/30",
    badge: "bg-sage/10 text-sage",
    active: true,
  },
  {
    icon: "🏢",
    title: "Corporate Partners",
    desc: "Organisations that co-fund, sponsor, and shape programs — gaining early access to mentally resilient, tech-savvy talent pipelines.",
    perks: ["Talent Pipeline", "Brand Visibility", "CSR Fulfilment", "Co-branded Events"],
    gradient: "from-indigo-50 to-blue-100",
    border: "border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
    active: false,
  },
  {
    icon: "🌱",
    title: "NGO & Social Partners",
    desc: "Non-profits and community organizations that amplify our mental health outreach in underserved communities across India.",
    perks: ["Community Outreach", "Resource Sharing", "Joint Campaigns", "Impact Reporting"],
    gradient: "from-emerald-50 to-teal-100",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    active: false,
  },
  {
    icon: "📡",
    title: "Media & Tech Partners",
    desc: "Digital platforms, media houses, and tech firms that help us scale awareness and create cutting-edge wellness technology.",
    perks: ["Content Co-creation", "Platform Integration", "Research Access", "Demo Days"],
    gradient: "from-amber-50 to-yellow-100",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    active: false,
  },
];

const stats = [
  { number: "38", label: "Active Partners", icon: "🤝" },
  { number: "15+", label: "Colleges", icon: "🏫" },
  { number: "5", label: "Corporate Sponsors", icon: "🏢" },
  { number: "Pan-India", label: "Reach", icon: "🗺️" },
];

const benefits = [
  { icon: "🎯", title: "Co-Branded Programs", desc: "Have your brand associated with impactful, student-centric wellness and education events." },
  { icon: "📊", title: "Impact Reports", desc: "Receive quarterly impact reports showcasing your contribution's reach and outcomes." },
  { icon: "👥", title: "Talent Access", desc: "Get early access to a pipeline of mentally resilient and tech-savvy student talent." },
  { icon: "🌐", title: "Network Access", desc: "Join an exclusive community of like-minded institutions, brands, and changemakers." },
  { icon: "📜", title: "Recognition", desc: "Official partnership certificates, press mentions, and featured placement on our platforms." },
  { icon: "🎓", title: "Knowledge Exchange", desc: "Participate in closed-door roundtables, research sessions, and thought leadership events." },
];

const partnerLogos = [
  { name: "SkillEdge", initial: "SE", color: "bg-sage/10 text-sage" },
  { name: "MindBridge", initial: "MB", color: "bg-indigo-100 text-indigo-700" },
  { name: "FutureLearn", initial: "FL", color: "bg-amber-100 text-amber-700" },
  { name: "WellCo", initial: "WC", color: "bg-emerald-100 text-emerald-700" },
  { name: "TechNest", initial: "TN", color: "bg-rose-100 text-rose-700" },
  { name: "InnovatED", initial: "IE", color: "bg-purple-100 text-purple-700" },
  { name: "GreenMind", initial: "GM", color: "bg-teal-100 text-teal-700" },
  { name: "PeerUp", initial: "PU", color: "bg-orange-100 text-orange-700" },
];

const PartnershipPage = () => {
  const [selectedType, setSelectedType] = useState(0);
  const [formData, setFormData] = useState({
    org: "", contact: "", email: "", phone: "", type: "Academic Partners", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-cream font-sans">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-warm-dark via-warm-mid to-sage pt-32 pb-28 px-6 md:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,169,110,0.15),transparent_60%)]" />
        <div className="absolute top-16 right-16 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage/20 rounded-full blur-2xl" />

        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-5">
            <span className="text-xs tracking-[0.3em] text-gold-light bg-white/10 border border-white/20 px-5 py-2 rounded-full uppercase self-start">
              Partner With BRAIIL
            </span>
            <h1 className="text-5xl md:text-6xl font-serif italic font-bold text-cream leading-tight">
              Grow Together,<br />
              <span className="text-gold-light">Impact Millions</span>
            </h1>
            <p className="text-sage-light text-base leading-relaxed max-w-md">
              Join our growing network of institutions, corporations, and changemakers
              who believe education and mental wellness go hand in hand.
            </p>
            <div className="flex gap-3 mt-2">
              <a href="#apply" className="bg-gold text-warm-dark px-6 py-3 rounded-full font-sans font-semibold text-sm hover:scale-105 hover:shadow-xl hover:shadow-gold/30 transition-all duration-300">
                Apply Now →
              </a>
              <a href="#types" className="border border-white/30 text-cream px-6 py-3 rounded-full font-sans text-sm hover:bg-white/10 transition-all duration-300">
                Explore Partnership Types
              </a>
            </div>
          </div>

          {/* Stats card */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <span className="text-2xl">{s.icon}</span>
                <p className="text-2xl font-bold text-cream font-serif mt-2">{s.number}</p>
                <p className="text-xs tracking-widest text-sage-light uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
            <path d="M0,20 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" fill="#FBF8F3" />
          </svg>
        </div>
      </section>

      {/* ── PARTNER TYPES ── */}
      <section id="types" className="max-w-6xl mx-auto px-6 md:px-16 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-sage uppercase mb-3">✦ Partnership Models</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-dark">
            Choose Your <span className="text-sage italic">Partnership</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto font-sans leading-relaxed">
            We offer flexible partnership models tailored to your organization's goals and capacity.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {partnerTypes.map((p, i) => (
            <button
              key={i}
              onClick={() => setSelectedType(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-sans transition-all duration-300 border ${
                selectedType === i
                  ? "bg-sage text-white border-sage shadow-md shadow-sage/20 scale-105"
                  : "bg-white text-gray-600 border-gray-200 hover:border-sage hover:text-sage"
              }`}
            >
              <span>{p.icon}</span> {p.title}
            </button>
          ))}
        </div>

        {/* Active card */}
        {partnerTypes.map((p, i) => (
          <div
            key={i}
            className={`transition-all duration-500 ${selectedType === i ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"}`}
          >
            <div className={`bg-gradient-to-br ${p.gradient} border ${p.border} rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center`}>
              <div>
                <span className="text-5xl">{p.icon}</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-warm-dark mt-4 mb-4">{p.title}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{p.desc}</p>
                <a href="#apply" className="mt-6 inline-flex items-center gap-2 bg-sage text-white px-6 py-3 rounded-full text-sm font-sans hover:scale-105 hover:shadow-lg hover:shadow-sage/30 transition-all duration-300">
                  Apply as {p.title.split(" ")[0]} Partner →
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-gray-500 mb-4 font-sans">What You Get</p>
                <div className="flex flex-col gap-3">
                  {p.perks.map((perk, j) => (
                    <div key={j} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/50">
                      <span className="w-2 h-2 rounded-full bg-sage flex-shrink-0" />
                      <span className="text-sm font-sans text-gray-700">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── BENEFITS ── */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] text-sage uppercase mb-3">✦ Why Partner With Us</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-dark">
              Benefits That <span className="text-sage italic">Matter</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group bg-cream rounded-3xl p-7 flex flex-col gap-3 border border-transparent hover:border-sage/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 cursor-default"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{b.icon}</span>
                <h3 className="font-serif font-bold text-warm-dark text-base">{b.title}</h3>
                <p className="text-sm text-gray-500 font-sans leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRENT PARTNERS ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-20">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] text-sage uppercase mb-3">✦ Our Network</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-dark">
            Trusted By <span className="text-sage italic">Great Organizations</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {partnerLogos.map((p, i) => (
            <div
              key={i}
              className={`${p.color} rounded-2xl px-6 py-8 flex flex-col items-center gap-3 font-sans hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer`}
            >
              <div className="w-14 h-14 rounded-xl bg-white/60 flex items-center justify-center text-xl font-bold font-serif shadow-sm">
                {p.initial}
              </div>
              <p className="text-sm font-semibold text-center">{p.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section id="apply" className="bg-gradient-to-br from-sage/5 to-cream py-20 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] text-sage uppercase mb-3">✦ Apply Now</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-dark">
              Start Your <span className="text-sage italic">Partnership</span>
            </h2>
            <p className="text-gray-500 text-sm mt-3 font-sans">Fill in your details and our team will reach out within 48 hours.</p>
          </div>

          {submitted ? (
            <div className="bg-sage/10 border border-sage/30 rounded-3xl p-12 text-center">
              <span className="text-5xl">🎉</span>
              <h3 className="text-2xl font-serif font-bold text-sage mt-4">Application Submitted!</h3>
              <p className="text-gray-500 font-sans mt-2">Thank you for your interest. Our team will contact you within 48 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-sage/10 flex flex-col gap-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-gray-600 font-sans block mb-1">Organization Name *</label>
                  <input
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-sage transition-colors"
                    placeholder="Your organization"
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 font-sans block mb-1">Contact Person *</label>
                  <input
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-sage transition-colors"
                    placeholder="Full name"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-gray-600 font-sans block mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-sage transition-colors"
                    placeholder="org@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 font-sans block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-sage transition-colors"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-600 font-sans block mb-1">Partnership Type *</label>
                <div className="relative">
                  <select
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-sage bg-white appearance-none transition-colors"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option>Academic Partners</option>
                    <option>Corporate Partners</option>
                    <option>NGO & Social Partners</option>
                    <option>Media & Tech Partners</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-600 font-sans block mb-1">Message / Vision</label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-sage transition-colors resize-none"
                  placeholder="Tell us about your organization and what you hope to achieve through this partnership..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-sage text-white py-4 rounded-full font-sans font-medium hover:shadow-xl hover:shadow-sage/30 hover:scale-[1.01] transition-all duration-300 mt-2"
              >
                Submit Partnership Application ✓
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default PartnershipPage;
