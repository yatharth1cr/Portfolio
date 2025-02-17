import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-custom1 text-white py-4 shadow-md w-full top-0 z-50 sticky">
      <nav className="container mx-auto max-w-5xl flex items-center justify-between px-6">
        {/* Logo */}
        <h1 className="text-4xl font-bold darumadrop-one-regular">Yatharth</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex space-y-4 md:space-y-0 md:space-x-6 items-center text-lg bg-custom1 md:bg-transparent transition-all duration-300 ease-in ${
            isOpen
              ? "flex flex-col py-4 opacity-100"
              : "hidden md:flex md:opacity-100 opacity-0"
          }`}
        >
          {[
            { to: "/", text: "Home" },
            { to: "/about", text: "About" },
            { to: "/skills", text: "Skills" },
            { to: "/projects", text: "Projects" },
            { to: "/contact", text: "Contact" },
          ].map(({ to, text }, index) => (
            <li key={index}>
              <Link
                to={to}
                onClick={() => setIsOpen(false)} // Close menu on link click
                className="hover:text-yellow-500 transition-transform duration-200 hover:scale-110"
              >
                {text}
              </Link>
            </li>
          ))}
          <li>
            <button
              className="bg-yellow-700 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
              aria-label="Buy me a coffee"
            >
              Buy me a coffee
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
