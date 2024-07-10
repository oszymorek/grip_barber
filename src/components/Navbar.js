import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "tailwindcss/tailwind.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsSticky(true);
  };

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out animate-[fadeIn_1s_ease-in] ${
        isSticky ? "bg-dark" : "bg-transparent border-none"
      }`}
    >
      <div
        className={`flex transition-all duration-300 ease-in-out justify-between px-4 mx-auto 2xl:px-36 items-center ${
          isSticky ? "py-8" : "pt-12"
        }`}
      >
        <div>
          <img
            src="./img/logo.svg"
            alt="Grip Barber Logo"
            className={`transition-all duration-300 ease-in-out ${
              isSticky ? "w-16 md:w-20 2xl:w-24" : "w-24 lg:w-32 2xl:w-40"
            }`}
          />
        </div>
        <div className="hidden space-x-14 lg:flex lg:space-x-6 uppercase 2xl:text-lg 2xl:tracking-widest ">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="px-4 py-2 text-white cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-50 after:transition after:duration-300 after:origin-left"
            onClick={() => handleLinkClick("about")}
          >
            O NAS
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="px-4 py-2 text-white cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-50 after:transition after:duration-300 after:origin-left"
            onClick={() => handleLinkClick("services")}
          >
            USŁUGI
          </Link>
          <Link
            to="team"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="px-4 py-2 text-white cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-50 after:transition after:duration-300 after:origin-left"
            onClick={() => handleLinkClick("team")}
          >
            NASZ ZESPÓŁ
          </Link>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="px-4 py-2 text-white cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-50 after:transition after:duration-300 after:origin-left"
            onClick={() => handleLinkClick("gallery")}
          >
            GALERIA
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="px-4 py-2 text-white cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-50 after:transition after:duration-300 after:origin-left"
            onClick={() => handleLinkClick("contact")}
          >
            KONTAKT
          </Link>
        </div>
        <button className="lg:hidden" onClick={handleMobileMenuToggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="#D7B56D"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-max-h duration-700 ease-in-out`}
      >
        <div className="px-4 py-2 shadow-lg">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="block px-4 py-2 border-b border-gold text-gold"
            onClick={() => handleLinkClick("about")}
          >
            O NAS
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="block px-4 py-2 border-b border-gold text-gold"
            onClick={() => handleLinkClick("services")}
          >
            USŁUGI
          </Link>
          <Link
            to="team"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="block px-4 py-2 border-b border-gold text-gold"
            onClick={() => handleLinkClick("team")}
          >
            NASZ ZESPÓŁ
          </Link>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="block px-4 py-2 border-b border-gold text-gold"
            onClick={() => handleLinkClick("gallery")}
          >
            GALERIA
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="block px-4 py-2 text-gold"
            onClick={() => handleLinkClick("contact")}
          >
            KONTAKT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
