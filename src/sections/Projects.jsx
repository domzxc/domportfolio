import { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { useProjectImages } from "../hooks/useProjectImages";
import { projects } from "../data/portfolio";

export default function Projects({ darkMode }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [adminMode, setAdminMode] = useState(false);
  const { images, uploadImage, removeImage } = useProjectImages();

  // Toggle admin mode with Ctrl+Shift+A
  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === "A") {
        setAdminMode((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <SectionWrapper
      id="projects"
      darkMode={darkMode}
      className={darkMode ? "bg-gray-900" : "bg-white"}
    >
      {/* Heading row with admin indicator */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <SectionHeading
          title="Projects"
          subtitle="Real-world applications delivered — from enterprise systems to AI-powered tools."
          darkMode={darkMode}
        />
        {adminMode && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-500 text-xs font-semibold shrink-0 mt-1">
            <ShieldCheck size={13} />
            Admin Mode
          </div>
        )}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            darkMode={darkMode}
            index={index}
            adminMode={adminMode}
            uploadedImage={images[project.id]}
            onUpload={uploadImage}
            onView={setSelectedProject}
          />
        ))}
      </div>

      {/* Admin hint */}
      <p className={`text-center text-xs mt-8 ${darkMode ? "text-gray-600" : "text-gray-300"}`}>
        Press <kbd className={`px-1.5 py-0.5 rounded text-xs font-mono border ${darkMode ? "border-gray-700 text-gray-500" : "border-gray-300 text-gray-400"}`}>Ctrl+Shift+A</kbd> to toggle admin mode for photo uploads
      </p>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          darkMode={darkMode}
          adminMode={adminMode}
          uploadedImage={images[selectedProject.id]}
          onUpload={uploadImage}
          onRemove={removeImage}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </SectionWrapper>
  );
}
