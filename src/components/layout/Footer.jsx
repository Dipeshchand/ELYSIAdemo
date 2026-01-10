import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="w-full bg-[#F6F3EC] py-16 px-6 border-t border-gray-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE — BRAND & HEADING */}
        <div>
          <h2 className="text-3xl md:text-4xl flex justify-center font-serif font-semibold text-black mb-4">
            Resources
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed max-w-md">
            Explore our portfolio, learn more about our creative process, and get in touch to 
            capture your timeless love story.
          </p>
        </div>

        {/* RIGHT SIDE — LINKS */}
        <div className="flex flex-col space-y-3 text-gray-900 text-lg items-center">

          <Link  to="/" className="hover:opacity-70 transition">Home</Link  >
          <Link  to="/about" className="hover:opacity-70 transition">About Us</Link >
          <Link  to="/portfolio" className="hover:opacity-70 transition">Portfolio</Link >
          <Link  to="/eventflims" className="hover:opacity-70 transition">Event Films</Link >
          <Link  to="/about" className="hover:opacity-70 transition font-bold">About</Link >
          <Link  to="/contact" className="hover:opacity-70 transition">Contact Us</Link >
        </div>
      </div>

          <div className="flex gap-4 justify-center mt-6 ">
              <a href="https://www.instagram.com/elysia._.events?igsh=aWIwMThxajY4bWg5">
            <FaInstagram  size={25}/>
              </a>
              <a href="https://wa.me/918296632740">
            <FaWhatsapp   size={25}/>
              </a>
          </div>
      {/* COPYRIGHT */}
      <div className="text-center text-gray-600 text-sm mt-10">
        Copyright © 2025 ELYSIA.
      </div>
    </footer>
  );
}
