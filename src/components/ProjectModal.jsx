import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  Upload,
  Trash2,
  ImageOff,
  Truck,
  GitBranch,
  Users,
  BarChart3,
  Package,
  Database,
  DollarSign,
  Wrench,
  Globe,
} from "lucide-react";

const iconMap = { Truck, GitBranch, Users, BarChart3, Package, Database, DollarSign, Wrench, Globe };

export default function ProjectModal({ project, darkMode, adminMode, uploadedImage, onUpload, onRemove, onClose }) {
  const overlayRef = useRef(null);
  const fileInputRef = useRef(null);
  const PreviewIcon = project?.preview?.icon ? iconMap[project.preview.icon] : null;

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

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

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        onClick={handleOverlayClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col ${
            darkMode ? "bg-gray-900 border border-gray-700" : "bg-white border border-gray-200"
          }`}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* Preview image / placeholder */}
          <div className="relative w-full h-56 sm:h-72 shrink-0 overflow-hidden rounded-t-2xl">
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt={`${project.name} preview`}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div
                className={`w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br ${
                  project.preview?.color ?? "from-blue-600 to-cyan-400"
                }`}
              >
                {PreviewIcon && <PreviewIcon size={48} className="text-white/70" />}
                <span className="text-white/80 font-semibold text-lg">
                  {project.preview?.label ?? project.name}
                </span>
                <span className="text-white/50 text-sm flex items-center gap-1.5">
                  <ImageOff size={13} />
                  No preview uploaded yet
                </span>
              </div>
            )}

            {/* AI badge */}
            {project.aiPowered && (
              <span className="absolute top-3 left-3 flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-black/40 backdrop-blur text-white border border-white/20">
                <Sparkles size={11} />
                AI-Powered
              </span>
            )}

            {/* Admin upload overlay */}
            {adminMode && (
              <div className="absolute bottom-3 right-3 flex gap-2">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white shadow transition-colors"
                >
                  <Upload size={13} />
                  {uploadedImage ? "Replace Photo" : "Upload Photo"}
                </button>
                {uploadedImage && (
                  <button
                    onClick={() => onRemove(project.id)}
                    className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow transition-colors"
                  >
                    <Trash2 size={13} />
                    Remove
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
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5 p-6">
            <div>
              <h2 className={`text-xl font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>
                {project.name}
              </h2>
              <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {project.description}
              </p>
            </div>

            {/* Achievements */}
            <div>
              <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                Key Achievements
              </h4>
              <ul className="flex flex-col gap-2">
                {project.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-blue-500 mt-0.5 shrink-0 font-bold">✓</span>
                    <span className={darkMode ? "text-gray-300" : "text-gray-700"}>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech */}
            <div>
              <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`text-xs px-2.5 py-1 rounded-lg font-medium border ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-gray-300"
                        : "bg-gray-50 border-gray-200 text-gray-600"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
