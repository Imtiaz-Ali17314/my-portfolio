import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend, FiMail, FiUser, FiMessageSquare, FiAlertTriangle, FiCheckCircle } from "react-icons/fi";
import Button from "../common/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    // Read keys from env or fallback to defaults
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_oan2pr1";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_ptz4kuf";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "2Imi5Zz77zKZcQds5";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Email send failed:", err);
      setError("Failed to send message. Please try again or contact me directly at imtiazali80102@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-slate-50/50 dark:bg-transparent">
      
      {/* Background Glow */}
      <div className="glow-node w-[400px] h-[400px] bg-indigo-500/5 right-[10%] top-[10%] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-400 mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Let's Collaborate
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          
          {/* Text/Info column */}
          <div className="md:col-span-2 space-y-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Have a project in mind?
            </h3>
            <p className="text-slate-650 dark:text-slate-400 leading-relaxed text-sm">
              Whether you need a custom web application, full-stack integration, desktop utility, or simply want to talk tech, feel free to drop a message! I will reply as soon as possible.
            </p>
            
            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#262630]/60 text-sm text-slate-600 dark:text-slate-350">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                  <FiMail />
                </div>
                <span>imtiazali80102@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 md:p-8 space-y-5">
              
              {/* Name field */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <FiUser /> Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full glass-input"
                  required
                />
              </div>

              {/* Email field */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <FiMail /> Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full glass-input"
                  required
                />
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <FiMessageSquare /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  rows="5"
                  className="w-full glass-input resize-none"
                  required
                />
              </div>

              {/* Feedback messages */}
              {success && (
                <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-450 rounded-lg text-sm">
                  <FiCheckCircle className="text-lg shrink-0" />
                  <span>Your message has been sent successfully! I will reach out soon.</span>
                </div>
              )}

              {error && (
                <div className="flex items-center gap-3 p-4 bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-450 rounded-lg text-sm">
                  <FiAlertTriangle className="text-lg shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-indigo-500 to-pink-500 text-white hover:opacity-90 transition-all font-bold tracking-wide rounded-lg flex items-center justify-center gap-2 shadow-lg"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <FiSend />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
