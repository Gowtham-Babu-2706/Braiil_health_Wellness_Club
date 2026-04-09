import { useState } from "react";

const infoCards = [
  {
    icon: "📞",
    title: "Phone",
    value: "72001 – 96121",
    subtitle: "Mon-Fri, 9am to 6pm",
    gradient: "from-sage/10 to-green-100",
    border: "border-sage/30",
  },
  {
    icon: "🏢",
    title: "Headquarters",
    value: "BRAIIL EdTech Pvt Ltd",
    subtitle: "Pan-India Operations",
    gradient: "from-indigo-50 to-blue-100",
    border: "border-indigo-200",
  },
  {
    icon: "📧",
    title: "Email",
    value: "hello@braiil.com",
    subtitle: "We usually reply within 24 hours",
    gradient: "from-amber-50 to-yellow-100",
    border: "border-amber-200",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "General Inquiry",
    message: "",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-warm-dark via-warm-mid to-sage pt-32 pb-20 px-6 md:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,169,110,0.15),transparent_60%)]" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-sage/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-gold/10 rounded-full blur-2xl" />

        <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center gap-5">
          <span className="text-xs font-sans tracking-[0.3em] text-gold-light bg-white/10 border border-white/20 px-5 py-2 rounded-full uppercase">
            Get In Touch
          </span>

          <h1 className="text-5xl md:text-7xl font-serif italic font-bold text-cream leading-tight">
            Contact <span className="text-gold-light">Us</span>
          </h1>

          <p className="text-sage-light text-base md:text-lg max-w-2xl leading-relaxed">
            Whether you have a question about our programs, want to partner with us, or just want to say hello, we'd love to hear from you.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
            <path d="M0,20 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" fill="#FBF8F3" />
          </svg>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16 grid md:grid-cols-5 gap-12 items-start">
        
        {/* Left Side: Info Cards */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="mb-4">
             <h2 className="text-3xl font-serif font-bold text-warm-dark mb-3">Let's Connect</h2>
             <p className="text-gray-500 text-sm font-sans leading-relaxed">
               Reach out to us through any of the channels below. Our dedicated team is always here to assist you with your inquiries.
             </p>
          </div>

          {infoCards.map((card, i) => (
            <div 
              key={i} 
              className={`bg-gradient-to-br ${card.gradient} border ${card.border} p-6 rounded-3xl flex items-start gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center text-2xl shadow-sm shrink-0">
                {card.icon}
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-sans mb-1">{card.title}</p>
                <p className="text-lg font-bold text-warm-dark font-sans leading-tight">{card.value}</p>
                <p className="text-sm text-gray-600 mt-1 font-sans">{card.subtitle}</p>
              </div>
            </div>
          ))}

          {/* Social Links (Placeholders) */}
          <div className="mt-6">
             <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">Follow Our Journey</p>
             <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Instagram'].map((social, idx) => (
                  <a key={idx} href="#" className="text-sm font-sans font-medium text-sage hover:text-gold hover:underline transition-colors">
                    {social}
                  </a>
                ))}
             </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-sage/10 relative overflow-hidden">
             
             {/* Decorative blob inside form */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-sage/5 rounded-bl-full -z-10" />

             {submitted ? (
               <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center text-4xl mb-6">
                     ✨
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-warm-dark mb-3">Message Sent!</h3>
                  <p className="text-gray-500 font-sans max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. We've received your message and will get back to you shortly.
                  </p>
               </div>
             ) : (
                <>
                  <h2 className="text-2xl font-serif font-bold text-warm-dark mb-8">Send Us A Message</h2>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs text-gray-500 font-sans uppercase tracking-wider block mb-2">First Name</label>
                        <input 
                          required
                          className="w-full bg-cream border border-transparent focus:border-sage focus:bg-white rounded-xl px-4 py-3 text-sm font-sans transition-all duration-300 outline-none"
                          placeholder="Jane"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 font-sans uppercase tracking-wider block mb-2">Last Name</label>
                        <input 
                          required
                          className="w-full bg-cream border border-transparent focus:border-sage focus:bg-white rounded-xl px-4 py-3 text-sm font-sans transition-all duration-300 outline-none"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs text-gray-500 font-sans uppercase tracking-wider block mb-2">Email Address</label>
                        <input 
                          required
                          type="email"
                          className="w-full bg-cream border border-transparent focus:border-sage focus:bg-white rounded-xl px-4 py-3 text-sm font-sans transition-all duration-300 outline-none"
                          placeholder="jane@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 font-sans uppercase tracking-wider block mb-2">Phone Number</label>
                        <input 
                          type="tel"
                          className="w-full bg-cream border border-transparent focus:border-sage focus:bg-white rounded-xl px-4 py-3 text-sm font-sans transition-all duration-300 outline-none"
                          placeholder="+91 9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-500 font-sans uppercase tracking-wider block mb-2">Inquiry Type</label>
                      <div className="relative">
                        <select
                          className="w-full bg-cream border border-transparent focus:border-sage focus:bg-white rounded-xl px-4 py-3 text-sm font-sans transition-all duration-300 outline-none appearance-none"
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                        >
                          <option>General Inquiry</option>
                          <option>Partnership</option>
                          <option>Programs & Courses</option>
                          <option>Support</option>
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-500 font-sans uppercase tracking-wider block mb-2">Message</label>
                      <textarea 
                        required
                        rows="5"
                        className="w-full bg-cream border border-transparent focus:border-sage focus:bg-white rounded-xl px-4 py-3 text-sm font-sans transition-all duration-300 outline-none resize-none"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-sage text-white py-4 rounded-full font-sans font-medium text-sm hover:shadow-xl hover:shadow-sage/30 hover:-translate-y-0.5 transition-all duration-300 mt-4 group"
                    >
                      <span>Send Message</span>
                      <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </form>
                </>
             )}
          </div>
        </div>

      </section>
    </div>
  );
};

export default Contact;