import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa"; // Importing icons

function Footer() {
  return (
    <footer className="w-full h-auto bg-gray-800 text-white py-6 mt-20 font-primary absolute bottom-0">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      
      {/* Get in Touch Section */}
      <div className="w-full md:w-[40%] text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-l mb-4">I’d love to hear from you. Feel free to drop a message!</p>

        {/* Contact Form */}
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
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 mt-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
        </form>
      </div>

      {/* Icons Section - Left-Aligned */}
      <div className="w-full md:w-[40%] text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-4xl font-bold">Reach me out</h1>
          <p className="text-xl mb-4">You can reach me out with these links.</p>

          {/* Icons */}
          <div className="flex justify-center md:justify-end gap-4 mb-6">
            <a
              href="https://github.com/mawrk19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="mailto:your-gercee19@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FaGoogle size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/mark-acedo-402b17285/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Text - Align to left */}
      <div className="w-full text-center md:text-right text-sm mt-6 md:mt-0 md:mr-4 absolute right-[200px]">
        <div className="text-sm">
          © {new Date().getFullYear()} Mark Acedo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
