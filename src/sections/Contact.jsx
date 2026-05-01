import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink, GitBranch, Send, CheckCircle } from "lucide-react";
const LinkedinIcon = ExternalLink;
const GithubIcon = GitBranch;
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { personal } from "../data/portfolio";

export default function Contact({ darkMode }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI-only: show success state
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
    darkMode
      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500"
      : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"
  }`;

  return (
    <SectionWrapper
      id="contact"
      darkMode={darkMode}
      className={darkMode ? "bg-gray-950" : "bg-slate-50"}
    >
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project in mind or want to collaborate? Let's connect."
        darkMode={darkMode}
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact info */}
        <div className="flex flex-col gap-6">
          <p
            className={`text-base leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you need a project
            manager, a developer, or both — reach out!
          </p>

          <div className="flex flex-col gap-4">
            {[
              { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
              { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/rdpabalan", href: personal.linkedin },
              { icon: GithubIcon, label: "GitHub", value: "github.com/rdpabalan", href: personal.github },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all hover:border-blue-500/50 group ${
                  darkMode
                    ? "bg-gray-800/60 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="p-2.5 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Icon size={18} className="text-blue-500" />
                </div>
                <div>
                  <p
                    className={`text-xs font-medium ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {label}
                  </p>
                  <p
                    className={`text-sm font-semibold ${
                      darkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className={`rounded-2xl border p-6 sm:p-8 flex flex-col gap-5 ${
            darkMode ? "bg-gray-800/60 border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                className={`text-xs font-semibold ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                className={`text-xs font-semibold ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              className={`text-xs font-semibold ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/30"
          >
            {submitted ? (
              <>
                <CheckCircle size={16} />
                Message Sent!
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
