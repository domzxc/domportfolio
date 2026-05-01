import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/portfolio";

export default function Experience({ darkMode }) {
  return (
    <SectionWrapper
      id="experience"
      darkMode={darkMode}
      className={darkMode ? "bg-gray-950" : "bg-slate-50"}
    >
      <SectionHeading
        title="Experience"
        subtitle="A career built on delivering technology projects that drive real business outcomes."
        darkMode={darkMode}
      />

      <div className="relative">
        {/* Vertical line */}
        <div
          className={`absolute left-5 top-0 bottom-0 w-px hidden sm:block ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        />

        <div className="flex flex-col gap-8">
          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              className="sm:pl-16 relative"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-3 top-5 w-4 h-4 rounded-full border-2 border-blue-500 hidden sm:block ${
                  darkMode ? "bg-gray-950" : "bg-white"
                }`}
              />

              <div
                className={`rounded-2xl border p-6 flex flex-col gap-4 ${
                  darkMode
                    ? "bg-gray-800/60 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3
                      className={`text-lg font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {job.role}
                    </h3>
                    <p className="text-blue-500 font-semibold text-sm">
                      {job.company}
                    </p>
                  </div>
                  <div
                    className={`flex flex-col gap-1 text-xs shrink-0 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="flex flex-col gap-2">
                  {job.responsibilities.map((r, ri) => (
                    <li key={ri} className="flex items-start gap-2">
                      <ChevronRight
                        size={14}
                        className="text-blue-500 mt-0.5 shrink-0"
                      />
                      <span
                        className={`text-sm ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {r}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Impact */}
                <div
                  className={`flex items-start gap-2 text-sm px-4 py-3 rounded-xl border-l-4 border-blue-500 ${
                    darkMode ? "bg-blue-500/10" : "bg-blue-50"
                  }`}
                >
                  <span className="text-blue-500">★</span>
                  <span
                    className={darkMode ? "text-blue-300" : "text-blue-700"}
                  >
                    {job.impact}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
