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

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold">
          Imtiaz Ali
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-400 mt-4 h-8">
          {typedText}
        </h2>

        <p className="mt-6 text-gray-500 max-w-xl mx-auto">
          I build scalable web applications, modern UI systems, and real-world digital products using React, Vue, Laravel and more.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="px-6 py-2 bg-blue-600 rounded-lg">
            View Projects
          </button>
          <button className="px-6 py-2 border border-gray-600 rounded-lg">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;