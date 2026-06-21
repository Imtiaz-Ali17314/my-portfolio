import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Typewriter = ({ words, typingSpeed = 90, deletingSpeed = 40, delayTime = 1800 }) => {
  const [wordIdx, setWordIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typewriter effect logic
  useEffect(() => {
    if (subIdx === words[wordIdx].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), delayTime);
      return () => clearTimeout(timeout);
    }

    if (subIdx === 0 && isDeleting) {
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIdx((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIdx, isDeleting, wordIdx, words, typingSpeed, deletingSpeed, delayTime]);

  // Cursor blinking logic
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 450);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex items-center">
      <span>{words[wordIdx].substring(0, subIdx)}</span>
      <span
        className={`inline-block w-[2px] h-[0.9em] bg-indigo-500 dark:bg-indigo-455 ml-1 align-middle ${blink ? "opacity-100" : "opacity-0"
          } transition-opacity duration-100`}
      />
    </span>
  );
};

Typewriter.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  typingSpeed: PropTypes.number,
  deletingSpeed: PropTypes.number,
  delayTime: PropTypes.number,
};

export default Typewriter;
