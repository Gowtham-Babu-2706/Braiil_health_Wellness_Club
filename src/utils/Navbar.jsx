import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Gallery", to: "/collection" },
  { label: "Partnership", to: "/partnership" },
  { label: "Contact Us", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();
  const location = useLocation();

  const handleClose = () => setOpen(false);

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-cream/90 backdrop-blur-md px-6 h-16 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "shadow-md shadow-warm-dark/5 border-b border-gold/20" : "border-b border-transparent"
      }`}
    >
      {/* LOGO */}
      <Link
        to="/"
        className="font-serif text-xl text-sage font-bold flex gap-2 items-center"
      >
        🧠 BRAIIL
        <div className="font-sans text-gray-700 font-light text-[0.6rem] tracking-wide border-l-2 border-sage/30 pl-3">
          <div>HEALTH WELLNESS</div>
          <div>EDTECH PVT LTD</div>
        </div>
      </Link>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-7 text-sm text-gray-600 items-center">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`relative py-1 transition-colors duration-200 font-sans hover:text-sage ${
                  isActive ? "text-sage font-semibold" : ""
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sage rounded-full" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* CALL BUTTON */}
      <a
        href="tel:7200196121"
        className="hidden md:flex gap-2 items-center bg-sage text-white px-5 py-2 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-sage/20 transition-all duration-300 text-sm font-sans"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="size-4"
        >
          <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        Call Now
      </a>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden text-2xl text-gray-700 hover:text-sage transition-colors"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div
          ref={menuRef}
          className="absolute top-16 left-0 w-full bg-cream/95 backdrop-blur-md p-6 flex flex-col gap-1 shadow-xl border-t border-gold/20"
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleClose}
                className={`px-4 py-3 rounded-xl text-sm font-sans transition-all duration-200 ${
                  isActive
                    ? "bg-sage/10 text-sage font-semibold"
                    : "text-gray-700 hover:bg-sage/5 hover:text-sage"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="tel:7200196121"
            className="mt-3 flex justify-center gap-2 items-center bg-sage text-white px-5 py-3 rounded-full text-sm font-sans"
          >
            📞 Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;