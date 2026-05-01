import { motion } from "framer-motion";
import {
  MessageSquareCode,
  Zap,
  GitBranch,
  Database,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { aiWork } from "../data/portfolio";

const iconMap = { MessageSquareCode, Zap, GitBranch, Database };

export default function AIWork({ darkMode }) {
  return (
    <SectionWrapper
      id="ai-work"
      darkMode={darkMode}
      className={darkMode ? "bg-gray-900" : "bg-white"}
    >
      <SectionHeading
        title={aiWork.headline}
        subtitle={aiWork.summary}
        darkMode={darkMode}
      />

      {/* Pillars */}
      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        {aiWork.pillars.map((pillar, i) => {
          const Icon = iconMap[pillar.icon];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl border p-6 flex flex-col gap-4 group hover:border-blue-500/50 transition-colors ${
                darkMode
                  ? "bg-gray-800/60 border-gray-700"
                  : "bg-slate-50 border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                  {Icon && <Icon size={20} className="text-blue-500" />}
                </div>
                <h3
                  className={`font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {pillar.title}
                </h3>
              </div>
              <p
                className={`text-sm leading-relaxed ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {pillar.description}
              </p>

              {/* Example callout */}
              <div
                className={`text-xs px-3 py-2.5 rounded-lg border-l-2 border-blue-500 italic ${
                  darkMode
                    ? "bg-blue-500/10 text-blue-300"
                    : "bg-blue-50 text-blue-700"
                }`}
              >
                💡 {pillar.example}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* AI Tools Used */}
      <div
        className={`rounded-2xl border p-6 ${
          darkMode ? "bg-gray-800/40 border-gray-700" : "bg-slate-50 border-gray-200"
        }`}
      >
        <h4
          className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          AI Tools in My Toolkit
        </h4>
        <div className="flex flex-wrap gap-3">
          {aiWork.tools.map((tool) => (
            <span
              key={tool}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border ${
                darkMode
                  ? "bg-blue-500/10 border-blue-500/30 text-blue-300"
                  : "bg-blue-50 border-blue-200 text-blue-700"
              }`}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
