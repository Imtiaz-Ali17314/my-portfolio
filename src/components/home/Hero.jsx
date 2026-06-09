import { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Web Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // ✅ scroll helper
  const handleScroll = (id) => {
    const element = document.querySelector(id);

    if (element) {
      const offset = 80;

      const top =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6"
    >
      <div>
        <h1 className="text-4xl md:text-6xl font-bold">Imtiaz Ali</h1>

        <h2 className="text-xl md:text-2xl text-gray-400 mt-4 h-8">
          {typedText}
        </h2>

        <p className="mt-6 text-gray-500 max-w-xl mx-auto">
          I build scalable web applications, modern UI systems, and real-world
          digital products using React, Vue, Laravel and more.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={() => handleScroll("#projects")}
            className="px-6 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
          >
            View Projects
          </button>

          <button
            onClick={() => handleScroll("#contact")}
            className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 hover:text-white transition"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;