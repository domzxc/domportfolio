import { GitBranch, Mail, Heart, ExternalLink } from "lucide-react";
const GithubIcon = GitBranch;
const LinkedinIcon = ExternalLink;
import { personal } from "../data/portfolio";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`border-t py-10 px-4 ${
        darkMode ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className={`text-sm ${
            darkMode ? "text-gray-500" : "text-gray-400"
          }`}
        >
          © {new Date().getFullYear()} {personal.name}. Built with{" "}
          <Heart size={12} className="inline text-red-500 mx-0.5" />
          React + Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
