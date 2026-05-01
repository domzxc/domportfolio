export default function SectionHeading({ title, subtitle, darkMode }) {
  return (
    <div className="mb-12">
      <h2
        className={`text-3xl sm:text-4xl font-bold mb-3 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg max-w-2xl ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-12 h-1 bg-blue-500 rounded-full" />
    </div>
  );
}
