const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Contact Me</h2>

      <form className="grid gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 bg-transparent border border-gray-700 rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="p-3 bg-transparent border border-gray-700 rounded-lg"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 bg-transparent border border-gray-700 rounded-lg"
        />

        <button className="bg-blue-600 py-2 rounded-lg">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
