const Resume = () => {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-bold mb-4">My Resume</h1>
      <p className="text-gray-500 mb-6">
        Download or view my full professional resume
      </p>

      <a
        href="/resume/resume.pdf"
        download
        className="px-6 py-3 bg-blue-600 text-white rounded"
      >
        Download Resume
      </a>

      <div className="mt-10">
        <iframe
          src="/resume/resume.pdf"
          className="w-full h-[600px] border"
        />
      </div>
    </div>
  );
};

export default Resume;