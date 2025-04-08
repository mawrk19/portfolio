import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-[#1f0739] text-white py-10 font-primary z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Contact Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 text-[#efd171]">Get in Touch</h2>
          <p className="text-lg mb-4">
            I’d love to hear from you. Feel free to drop a message!
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="How can I help?"
              rows={4}
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 mt-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links Section */}
        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-[#efd171]">Reach Me Out</h2>
          <p className="text-lg mb-4">You can reach me through these platforms:</p>

          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com/mawrk19"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="mailto:your-gercee19@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaGoogle size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/mark-acedo-402b17285/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Mark Acedo. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
