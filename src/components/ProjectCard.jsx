import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Truck,
  GitBranch,
  Users,
  BarChart3,
  Package,
  Database,
  DollarSign,
  Wrench,
  Globe,
  ImageOff,
  Eye,
  Upload,
} from "lucide-react";

const iconMap = { Truck, GitBranch, Users, BarChart3, Package, Database, DollarSign, Wrench, Globe };

export default function ProjectCard({ project, darkMode, index, adminMode, uploadedImage, onUpload, onView }) {
  const fileInputRef = useRef(null);
  const PreviewIcon = project.preview?.icon ? iconMap[project.preview.icon] : null;

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }
    try {
      await onUpload(project.id, file);
    } catch (err) {
      alert(err.message);
    }
    e.target.value = "";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl border flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl ${
        darkMode
          ? "bg-gray-800/60 border-gray-700 hover:border-blue-500/50"
          : "bg-white border-gray-200 hover:border-blue-300"
      }`}
    >
      {/* Preview Banner */}
      <div className="relative w-full h-44 overflow-hidden shrink-0 group">
        {uploadedImage ? (
          <img
            src={uploadedImage}
            alt={`${project.name} preview`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br ${
              project.preview?.color ?? "from-blue-600 to-cyan-400"
            }`}
          >
            {PreviewIcon && <PreviewIcon size={32} className="text-white/75" />}
            <span className="text-white/85 text-sm font-semibold">
              {project.preview?.label ?? project.name}
            </span>
            {!adminMode && (
              <span className="text-white/45 text-xs flex items-center gap-1">
                <ImageOff size={11} />
                Preview coming soon
              </span>
            )}
          </div>
        )}

        {/* AI badge */}
        {project.aiPowered && (
          <span className="absolute top-3 left-3 flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-black/40 backdrop-blur text-white border border-white/20">
            <Sparkles size={11} />
            AI-Powered
          </span>
        )}

        {/* Admin upload button */}
        {adminMode && (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-3 right-3 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-colors"
          >
            <Upload size={12} />
            {uploadedImage ? "Replace Photo" : "Upload Photo"}
          </button>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Card Body */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3
          className={`text-base font-bold leading-snug ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {project.name}
        </h3>

        <p
          className={`text-sm leading-relaxed line-clamp-3 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"
              }`}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${darkMode ? "bg-gray-700 text-gray-400" : "bg-gray-100 text-gray-500"}`}>
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* View Project button */}
        <button
          onClick={() => onView(project)}
          className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/30"
        >
          <Eye size={15} />
          View Project
        </button>
      </div>
    </motion.div>
  );
}
