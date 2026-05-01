import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const navLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "AI Work", to: "ai-work" },
  { label: "Contact", to: "contact" },
];

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-gray-900/95 backdrop-blur border-b border-gray-800 shadow-lg"
            : "bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="hero"
          smooth
          duration={500}
          className={`font-bold text-lg cursor-pointer select-none ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Dom<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-64}
              className={`text-sm font-medium cursor-pointer transition-colors hover:text-blue-500 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors ${
              darkMode
                ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg ${
              darkMode ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-gray-600"
            }`}
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 rounded-lg ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden border-t px-4 py-3 flex flex-col gap-3 ${
            darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-64}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium cursor-pointer py-1 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
