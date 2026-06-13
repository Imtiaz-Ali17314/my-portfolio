import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Button from "../common/Button";
import Typewriter from "../ui/Typewriter";

const words = [
  "Full Stack Web Developer",
  "SaaS Product Builder",
  "React & Laravel Specialist",
  "UI/UX Craftsperson",
];

const Hero = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden mesh-gradient-bg transition-colors duration-500"
    >
      {/* Multi-hue magical glow orbs */}
      <div className="glow-node w-[500px] h-[500px] bg-violet-500/20 left-[5%] top-[10%] rounded-full blur-[120px]" />
      <div className="glow-node w-[450px] h-[450px] bg-fuchsia-500/20 right-[10%] bottom-[10%] rounded-full blur-[110px]" />
      <div className="glow-node w-[350px] h-[350px] bg-cyan-400/15 left-[40%] bottom-[20%] rounded-full blur-[90px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-[#262630] bg-white/50 dark:bg-[#121218]/50 backdrop-blur-sm text-xs font-semibold text-indigo-600 dark:text-indigo-400 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for Freelance &amp; Roles</span>
        </motion.div>

        {/* Name Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-3"
        >
          <p className="text-slate-500 dark:text-slate-400 font-medium tracking-wide text-lg md:text-xl">
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-none">
            Imtiaz Ali
          </h1>
        </motion.div>

        {/* Dynamic Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-10 text-xl md:text-3xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent"
        >
          <span>I'm a </span>
          <Typewriter words={words} />
        </motion.div>

        {/* Short Pitch */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-xl mx-auto text-slate-600 dark:text-slate-350 leading-relaxed text-base md:text-lg"
        >
          I build full-stack web applications, modern interactive client experiences, 
          and light-weight utilities using React, Vue, Laravel, and Electron.js.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Button
            variant="primary"
            onClick={(e) => handleScroll(e, "#projects")}
            className="w-full sm:w-auto glow-btn bg-indigo-600 text-white hover:bg-indigo-700 font-bold px-8 py-3.5 flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-500/20"
          >
            <span>Explore Work</span>
            <FiArrowRight className="text-base" />
          </Button>

          <Button
            variant="outline"
            onClick={(e) => handleScroll(e, "#contact")}
            className="w-full sm:w-auto border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1b1b24] font-bold px-8 py-3.5"
          >
            <span>Contact Me</span>
          </Button>
        </motion.div>

        {/* Social Links Panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="flex justify-center items-center gap-6 pt-10 text-xl text-slate-400 dark:text-slate-500"
        >
          <a
            href="https://github.com/Imtiaz-Ali17314"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-slate-800 dark:hover:text-white transition-colors duration-250"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/imtiaz-ali-79476a385/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-blue-600 dark:hover:text-indigo-400 transition-colors duration-250"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:imtiazali80102@gmail.com"
            aria-label="Email Address"
            className="hover:text-red-500 dark:hover:text-red-400 transition-colors duration-250"
          >
            <FiMail />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;