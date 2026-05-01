import { motion } from "framer-motion";
import { CheckCircle, Rocket, TrendingUp, Users, Bot } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { about, metrics } from "../data/portfolio";

const iconMap = { Rocket, TrendingUp, Users, Bot };

export default function About({ darkMode }) {
  return (
    <SectionWrapper
      id="about"
      darkMode={darkMode}
      className={darkMode ? "bg-gray-900" : "bg-white"}
    >
      <SectionHeading
        title="About Me"
        subtitle="Project manager by profession, developer by passion, AI enthusiast by choice."
        darkMode={darkMode}
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Text */}
        <div className="flex flex-col gap-5">
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {about.summary}
          </p>
          <ul className="flex flex-col gap-3">
            {about.highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircle
                  size={18}
                  className="text-blue-500 mt-0.5 shrink-0"
                />
                <span
                  className={`text-sm sm:text-base ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {h}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((m, i) => {
            const Icon = iconMap[m.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 flex flex-col gap-3 border ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-blue-50/60 border-blue-100"
                }`}
              >
                {Icon && (
                  <div className="p-2 bg-blue-500/10 rounded-lg w-fit">
                    <Icon size={20} className="text-blue-500" />
                  </div>
                )}
                <span
                  className={`text-3xl font-extrabold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {m.value}
                </span>
                <span
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {m.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
