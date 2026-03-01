import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from "react-icons/fa";

const GithubStats = () => {
  return (
    <div className="w-full max-w-[360px] mx-auto flex flex-col items-center p-8 rounded-[32px] bg-gradient-to-b from-[#1f0739]/60 to-[#4d6937]/30 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-yellow-500/20 transition-all duration-700" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-pink-500/20 transition-all duration-700" />

      {/* Avatar */}
      <div className="relative mb-5">
        <div className="absolute -inset-2 bg-yellow-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500" />
        <img 
          src="https://github.com/mawrk19.png" 
          alt="mawrk19" 
          className="w-24 h-24 rounded-full border-2 border-white/30 relative z-10 shadow-xl"
        />
      </div>

      {/* Name */}
      <h3 className="text-xl font-header font-bold text-white mb-0.5">Mark Acedo</h3>
      <p className="text-yellow-500 font-mono text-sm mb-5">@mawrk19</p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 w-full mb-6">
        <div className="bg-white/5 border border-white/10 p-3 rounded-2xl text-center hover:bg-white/10 transition-colors">
          <FaCodeBranch className="text-yellow-500 mx-auto mb-1" size={16} />
          <p className="text-xl font-header font-bold text-white">42+</p>
          <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Repos</span>
        </div>
        <div className="bg-white/5 border border-white/10 p-3 rounded-2xl text-center hover:bg-white/10 transition-colors">
          <FaStar className="text-pink-500 mx-auto mb-1" size={16} />
          <p className="text-xl font-header font-bold text-white">128+</p>
          <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Stars</span>
        </div>
      </div>

      {/* Status */}
      <div className="bg-white/5 border border-white/10 p-3 rounded-2xl w-full text-center mb-6">
        <div className="flex justify-center items-center gap-1.5 mb-1">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Status</span>
        </div>
        <p className="text-xs font-primary text-white/80">Building immersive digital experiences 🌸</p>
      </div>

      {/* CTA */}
      <a 
        href="https://github.com/mawrk19" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-md w-full active:scale-95 shadow-lg"
      >
        <FaGithub size={18} />
        <span className="text-sm font-bold">View GitHub</span>
        <FaExternalLinkAlt size={10} className="opacity-50" />
      </a>
    </div>
  );
};

export default GithubStats;
