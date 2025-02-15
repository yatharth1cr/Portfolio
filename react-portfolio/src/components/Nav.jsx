import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-custom1 text-white py-4 shadow-md w-full fixed">
      <nav className="container mx-auto max-w-5xl flex items-center justify-between px-6">
        {/* Logo */}
        <h1 className="text-4xl font-bold darumadrop-one-regular">Yatharth</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex space-y-4 md:space-y-0 md:space-x-6 items-center text-lg bg-custom1 md:bg-transparent transition-all duration-300 ease-in ${
            isOpen ? "flex flex-col py-4" : "hidden md:flex"
          }`}
        >
          {[
            { href: "/", text: "Home" },
            { href: "#about", text: "About" },
            { href: "#skills", text: "Skills" },
            { href: "#projects", text: "Projects" },
            { href: "#contact", text: "Contact" },
          ].map(({ href, text }, index) => (
            <li key={index}>
              <a
                href={href}
                className="hover:text-yellow-500 transition-transform duration-200 hover:scale-110"
              >
                {text}
              </a>
            </li>
          ))}
          <li>
            <button className="bg-yellow-700 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition">
              Buy me a coffee
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
