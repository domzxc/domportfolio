import { useState } from "react";

const STORAGE_KEY = "dom_portfolio_project_images";

export function useProjectImages() {
  const [images, setImages] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  const uploadImage = (projectId, file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updated = { ...images, [projectId]: e.target.result };
        setImages(updated);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
          resolve();
        } catch {
          reject(new Error("Storage quota exceeded. Try a smaller image."));
        }
      };
      reader.onerror = () => reject(new Error("Failed to read file."));
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (projectId) => {
    const updated = { ...images };
    delete updated[projectId];
    setImages(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return { images, uploadImage, removeImage };
}
