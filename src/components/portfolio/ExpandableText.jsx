import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function ExpandableText({ text, maxLength = 120 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;

  const isLong = text.length > maxLength || text.includes("\n");

  if (!isLong) {
    return (
      <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {text}
      </p>
    );
  }

  return (
    <div className="mt-3">
      <p
        className={`whitespace-pre-line text-sm leading-relaxed text-slate-600 dark:text-slate-300 transition-all duration-300 ${
          isExpanded ? "" : "line-clamp-3"
        }`}
      >
        {text}
      </p>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded((prev) => !prev);
        }}
        className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors cursor-pointer focus:outline-none"
      >
        <span>{isExpanded ? "Show less" : "Read more..."}</span>
        {isExpanded ? <FiChevronUp className="text-xs" /> : <FiChevronDown className="text-xs" />}
      </button>
    </div>
  );
}
