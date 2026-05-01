import { motion } from "framer-motion";
import { ClipboardList, Code2, Wrench, Sparkles } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/portfolio";

const iconMap = { ClipboardList, Code2, Wrench, Sparkles };

export default function Skills({ darkMode }) {
  return (
    <SectionWrapper
      id="skills"
      darkMode={darkMode}
      className={darkMode ? "bg-gray-950" : "bg-slate-50"}
    >
      <SectionHeading
        title="Skills & Tools"
        subtitle="A blend of management expertise and hands-on technical proficiency."
        darkMode={darkMode}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, i) => {
          const Icon = iconMap[group.icon];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl border p-6 flex flex-col gap-4 ${
                darkMode
                  ? "bg-gray-800/60 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  {Icon && <Icon size={18} className="text-blue-500" />}
                </div>
                <h3
                  className={`font-semibold text-sm ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-colors ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-gray-300"
                        : "bg-slate-50 border-gray-200 text-gray-600"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
