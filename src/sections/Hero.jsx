import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowDown, Download, GitBranch, ExternalLink } from "lucide-react";
const GithubIcon = GitBranch;
const LinkedinIcon = ExternalLink;
import { personal } from "../data/portfolio";

export default function Hero({ darkMode }) {
  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col justify-center px-4 sm:px-6 overflow-hidden ${
        darkMode ? "bg-gray-950" : "bg-gradient-to-br from-slate-50 via-white to-blue-50"
      }`}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(to right, #3b82f6 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 max-w-3xl"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full w-fit bg-blue-500/10 text-blue-500 border border-blue-500/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Available for new opportunities
          </motion.span>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              {personal.nickname}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className={`text-lg sm:text-2xl font-semibold ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {personal.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className={`text-base sm:text-lg max-w-2xl leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {personal.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-3 mt-2"
          >
            <Link to="projects" smooth duration={600} offset={-64}>
              <button className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer">
                View Projects
              </button>
            </Link>
            <Link to="contact" smooth duration={600} offset={-64}>
              <button
                className={`px-6 py-3 rounded-xl font-semibold text-sm border transition-all cursor-pointer ${
                  darkMode
                    ? "border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-400"
                    : "border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600"
                }`}
              >
                Contact Me
              </button>
            </Link>
            <a
              href="/Ronald Dominique Pabalan-CV.docx"
              download
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all ${
                darkMode
                  ? "border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-400"
                  : "border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              <Download size={14} />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="flex gap-4 mt-1"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <Link to="about" smooth duration={600} offset={-64} className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="text-gray-400"
        >
          <ArrowDown size={20} />
        </motion.div>
      </Link>
    </section>
  );
}
