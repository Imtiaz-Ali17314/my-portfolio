import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiLayout, FiServer, FiCpu, FiTerminal } from "react-icons/fi";
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
      className="relative min-h-screen flex items-center justify-center px-6 py-24 lg:py-0 overflow-hidden mesh-gradient-bg transition-colors duration-500"
    >
      {/* Multi-hue magical glow orbs */}
      <div className="glow-node w-[500px] h-[500px] bg-violet-500/20 left-[5%] top-[10%] rounded-full blur-[120px]" />
      <div className="glow-node w-[450px] h-[450px] bg-fuchsia-500/20 right-[10%] bottom-[10%] rounded-full blur-[110px]" />
      <div className="glow-node w-[350px] h-[350px] bg-cyan-400/15 left-[40%] bottom-[20%] rounded-full blur-[90px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
        
        {/* Left Side: Content Terminal Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 terminal-card flex flex-col w-full text-left"
        >
          {/* Terminal Window Header / Control Bar */}
          <div className="terminal-header px-6 py-4 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dfa023] shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] shadow-sm" />
            </div>
            
            {/* Terminal Tab Label */}
            <div className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1.5 bg-white/20 dark:bg-[#121218]/40 border border-slate-200/30 dark:border-white/[0.04] px-3.5 py-1.5 rounded-lg shadow-sm">
              <span className="text-indigo-500 dark:text-indigo-400 font-extrabold">&gt;_</span>
              <span>index.jsx</span>
            </div>
            
            <div className="w-[54px] lg:block hidden" />
          </div>

          {/* Terminal Body Content */}
          <div className="p-6 sm:p-8 md:p-10 flex flex-col items-start space-y-6 md:space-y-8 w-full">
            {/* Intro Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-[#262630] bg-white/50 dark:bg-[#121218]/50 backdrop-blur-sm text-xs font-semibold text-indigo-600 dark:text-indigo-400 shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Freelance &amp; Roles</span>
            </motion.div>

            {/* Name Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-2"
            >
              <p className="text-slate-500 dark:text-slate-400 font-mono font-bold tracking-wide text-xs sm:text-sm uppercase">
                const developer = &#123;
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none pl-4">
                Imtiaz Ali
              </h1>
              <p className="text-slate-500 dark:text-slate-400 font-mono font-bold tracking-wide text-xs sm:text-sm pl-4">
                &#125;;
              </p>
            </motion.div>

            {/* Dynamic Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent min-h-[2rem]"
            >
              <span>I build </span>
              <Typewriter words={words} />
            </motion.div>

            {/* Short Pitch */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="max-w-xl text-slate-600 dark:text-slate-350 leading-relaxed text-sm sm:text-base md:text-lg"
            >
              I build full-stack web applications, modern interactive client experiences, 
              and light-weight utilities using React, Vue, Laravel, and Electron.js.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto"
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
              className="flex items-center gap-6 pt-4 text-xl text-slate-400 dark:text-slate-500 w-full border-t border-slate-200/40 dark:border-white/[0.04]"
            >
              <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase select-none">socials:</span>
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
        </motion.div>

        {/* Right Side: Profile Terminal Card */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Main Wrapper with overflow-visible to show floating badges */}
          <div className="relative w-full max-w-xs sm:max-w-sm p-4">
            
            {/* Sweeping neon border rotating wrapper */}
            <div className="glow-spin-container rounded-3xl p-[1px] shadow-2xl w-full">
              <div className="glow-spin-border rounded-3xl" />
              
              {/* Terminal Card inner container */}
              <div className="terminal-card overflow-hidden w-full flex flex-col bg-slate-950/80 dark:bg-slate-950/90 relative z-10">
                
                {/* Terminal Header */}
                <div className="terminal-header px-5 py-3 flex items-center justify-between select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-75" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-75" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-75" />
                  </div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500">
                    profile.jpg
                  </div>
                  <div className="w-[36px]" />
                </div>
                
                {/* Image Frame Wrapper */}
                <div className="p-4 sm:p-5 flex justify-center items-center w-full">
                  <div className="relative group overflow-hidden rounded-2xl w-full aspect-square max-w-[280px] sm:max-w-[320px] shadow-inner">
                    {/* Profile Picture */}
                    <img
                      src="/images/profile/profile.jpg"
                      alt="Imtiaz Ali Profile"
                      className="w-full h-full object-cover rounded-2xl filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges surrounding the Profile Card (outside the overflow-hidden wrapper) */}
            {/* Top-Left: React */}
            <motion.div 
              className="floating-badge -top-1 -left-2"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <FiLayout className="text-cyan-500 w-3.5 h-3.5" />
              <span>React.js</span>
            </motion.div>

            {/* Top-Right: Laravel */}
            <motion.div 
              className="floating-badge -top-3 right-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
            >
              <FiServer className="text-red-500 w-3.5 h-3.5" />
              <span>Laravel</span>
            </motion.div>

            {/* Bottom-Left: Electron */}
            <motion.div 
              className="floating-badge bottom-10 -left-6"
              animate={{ y: [0, -9, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.2 }}
            >
              <FiCpu className="text-violet-500 w-3.5 h-3.5" />
              <span>Electron.js</span>
            </motion.div>

            {/* Bottom-Right: Tailwind */}
            <motion.div 
              className="floating-badge bottom-0 -right-2"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.8 }}
            >
              <FiTerminal className="text-indigo-500 w-3.5 h-3.5" />
              <span>Tailwind CSS</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;