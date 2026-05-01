import { motion } from "framer-motion";

export default function SectionWrapper({ id, children, darkMode, className = "" }) {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
