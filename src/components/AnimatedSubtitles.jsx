import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedSubtitles() {
  const subtitles = [
    "Connecting People, Technology, and Experiences",
    "Empowering People Through Technology and Memorable Experiences",
    "Speed. Reliability. Beyond Boundaries.",
    "Transforming Communities, One Connection at a Time."
  ];

  const highlightWords = ["Empowering", "Connecting", "Speed.", "Reliability", "Transforming Communities"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % subtitles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [subtitles.length]);

  // Helper to render subtitle with highlighted words
  function renderSubtitle(text) {
    // Split by spaces but keep punctuation attached to words
    const words = text.split(" ");
    return words.map((word, i) => {
      // Check if this word or phrase matches highlightWords
      // For "Transforming Communities" which is two words, do a special check:
      if (word === "Transforming" && i + 1 < words.length && words[i + 1] === "Communities") {
        // Join both words and highlight
        return (
          <span key={i} style={{ color: "#00A39B" }}>
            Transforming Communities&nbsp;
          </span>
        );
      }

      // For single word highlights, just check word without trailing punctuation
      const cleanWord = word.replace(/[.,]/g, "");

      if (highlightWords.includes(word) || highlightWords.includes(cleanWord)) {
        return (
          <span key={i} style={{ color: "#00A39B" }}>
            {word + " "}
          </span>
        );
      }

      // Normal word
      return word + " ";
    });
  }

  return (
    <div style={{ height: "2.5rem", display: "flex", alignItems: "center" }}>
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          {renderSubtitle(subtitles[index])}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
