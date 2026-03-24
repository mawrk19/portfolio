import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className="relative w-full bg-[#1f0739] text-white font-primary overflow-hidden">
      {/* Top Tagline */}
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
        <h2 className="text-3xl md:text-5xl font-header font-bold text-yellow-500 leading-tight max-w-md">
          Let's Build<br />
          Something Great.
        </h2>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10">
        {/* Contact */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Contact</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a href="mailto:gercee19@gmail.com" className="hover:text-yellow-500 transition-colors">
                gercee19@gmail.com
              </a>
            </li>
            <li className="text-white/50">Caloocan City, Philippines</li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Navigation</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li><a href="/" className="hover:text-yellow-500 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-500 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-yellow-500 transition-colors">Projects</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Services</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>UI/UX Design</li>
            <li>Illustration</li>
          </ul>
        </div>

        {/* Follow */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Follow</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://github.com/mawrk19"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-colors group"
              >
                <FaGithub size={16} className="group-hover:scale-110 transition-transform" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mark-acedo-402b17285/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-colors group"
              >
                <FaLinkedin size={16} className="group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:gercee19@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-colors group"
              >
                <FaGoogle size={16} className="group-hover:scale-110 transition-transform" />
                Gmail
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Giant Name Watermark */}
      <div className="relative max-w-7xl mx-auto px-8 overflow-hidden">
        <h2 className="text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] font-header font-bold text-white/[0.03] leading-none tracking-tighter select-none whitespace-nowrap">
          mawrk
        </h2>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10">
        <div className="text-xs text-white/30 font-mono">
          © {new Date().getFullYear()} MARK ACEDO
        </div>
        <div className="flex gap-6 text-xs text-white/30">
          <span>BUILT WITH REACT + VITE</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">DESIGNED BY MAWRK</span>
        </div>
      </div>

      {/* Background accent blob */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
    </footer>
  );
}

export default Footer;
