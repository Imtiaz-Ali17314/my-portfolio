import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0b0f] text-gray-700 dark:text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Imtiaz Ali
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Full Stack Web Developer focused on building scalable web
              applications, modern UI experiences, and real-world solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-blue-500 transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Connect
            </h3>

            <div className="flex gap-4 text-xl">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:example@gmail.com"
                className="hover:text-red-500 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
          
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Imtiaz Ali. All rights reserved.
          </p>

          <p className="mt-3 md:mt-0 text-gray-500 dark:text-gray-500">
            Built with React & Tailwind CSS 🚀
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;