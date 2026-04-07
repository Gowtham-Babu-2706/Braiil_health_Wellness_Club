const Contact = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen w-full bg-sage/10 px-4 md:px-15 py-20 gap-10">

      {/* Left Side */}
      <div className="flex flex-col gap-4 md:gap-6">

        <p className="text-xs font-sans text-gray-500">
          GET IN TOUCH
        </p>

        <h1 className="text-3xl md:text-5xl font-serif italic font-bold">
          Contact <span className="text-sage">Us</span>
        </h1>

        <p className="font-sans text-sm md:text-base text-gray-500 tracking-wide">
          We'd love to hear from you. Reach out for partnerships, program inquiries, or just to connect with our team.
        </p>

        {/* Info Cards */}
        <div className="mt-6 flex flex-col gap-4">

          {/* Phone */}
          <div className="flex items-center bg-white p-4 gap-4 rounded-xl shadow-sm">
            <span className="text-xl">📞</span>
            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p className="text-sm md:text-base text-gray-700">
                72001 – 96121
              </p>
            </div>
          </div>

          {/* Org */}
          <div className="flex items-center bg-white p-4 gap-4 rounded-xl shadow-sm">
            <span className="text-xl">🏢</span>
            <div>
              <p className="text-xs text-gray-500">Organization</p>
              <p className="text-sm md:text-base text-gray-700">
                BRAIIL EdTech Pvt Ltd
              </p>
            </div>
          </div>

          {/* Focus */}
          <div className="flex items-center bg-white p-4 gap-4 rounded-xl shadow-sm">
            <span className="text-xl">🌐</span>
            <div>
              <p className="text-xs text-gray-500">Focus</p>
              <p className="text-sm md:text-base text-gray-700">
                Mental Wellness & Technology Education
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Form */}
      <div className="w-full max-w-md mx-auto bg-white p-6 md:p-10 rounded-3xl shadow-xl font-sans">

        <h2 className="text-lg md:text-xl text-sage font-serif mb-6">
          Send Us Message
        </h2>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* First Name */}
          <div>
            <label className="text-xs text-gray-800">First Name</label>
            <input 
              className="w-full border p-2 rounded-lg mt-1 text-sm"
              placeholder="First Name"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-xs text-gray-800">Last Name</label>
            <input 
              className="w-full border p-2 rounded-lg mt-1 text-sm"
              placeholder="Last Name"
            />
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label className="text-xs text-gray-800">Email Address</label>
            <input 
              type="email"
              className="w-full border p-2 rounded-lg mt-1 text-sm"
              placeholder="john@example.com"
            />
          </div>

          {/* Phone */}
          <div className="sm:col-span-2">
            <label className="text-xs text-gray-800">Phone Number</label>
            <input 
              type="tel"
              className="w-full border p-2 rounded-lg mt-1 text-sm"
              placeholder="+91 9876543210"
            />
          </div>

          {/* Inquiry Type */}
          <div className="sm:col-span-2">
            <label className="text-xs text-gray-800">Inquiry Type</label>

            <div className="relative mt-1">
              <select
                className="w-full p-2 rounded-lg border text-sm bg-white appearance-none"
              >
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Business</option>
                <option>Feedback</option>
              </select>

              <span className="absolute right-3 top-2 text-gray-500 pointer-events-none">
                ▼
              </span>
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="text-xs text-gray-800">Message</label>
            <textarea 
              className="w-full border p-2 rounded-lg mt-1 text-sm"
              rows="4"
              placeholder="Write your message..."
            />
          </div>

          {/* Button */}
          <button className="sm:col-span-2 bg-sage text-white py-3 rounded-full hover:opacity-90 transition">
            Submit
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;