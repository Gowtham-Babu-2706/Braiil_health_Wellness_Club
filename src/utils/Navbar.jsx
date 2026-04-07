import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const handleClose = () => setOpen(false);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-cream/80 backdrop-blur-md border-b border-gold/20 px-6 h-16 flex items-center justify-between">

      {/* LOGO */}
      <Link
        to="/"
        className="font-serif text-xl text-sage font-bold flex gap-2 items-center"
      >
        🧠 BRAIIL
        <div className="font-sans text-gray-800 font-light text-[0.6rem] tracking-wide border-l-2 pl-3">
          <div>hEAL WELLNESS</div>
          <div>EDTECH PVT LTD</div>
        </div>
      </Link>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-8 text-sm text-gray-700 items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="">Courses</Link></li>
        <li><Link to="/collection">Gallery</Link></li>
        <li><a href="#gallery">Partnership</a></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      {/* CALL BUTTON */}
      <button className="hidden md:flex gap-2 items-center bg-sage text-white px-5 py-2 rounded-full hover:scale-105 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="size-4"
        >
          <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        Call Now
      </button>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div
          ref={menuRef}
          className="absolute top-16 left-0 w-full bg-cream p-6 flex flex-col gap-5 shadow-md transition-all duration-300"
        >
          <Link to="/" onClick={handleClose}>Home</Link>
          <Link to="" onClick={handleClose}>Courses</Link>
          <Link to="/collection" onClick={handleClose}>Gallery</Link>
          <a href="#gallery" onClick={handleClose}>Partnership</a>
          <Link to="/contact" onClick={handleClose}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;