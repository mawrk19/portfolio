import { 
  FaReact, FaPython, FaJs, FaGithub, FaJava, FaDatabase, FaFigma, FaTerminal, FaCodeBranch, FaVuejs, FaLaravel 
} from "react-icons/fa";
import { SiTypescript, SiFirebase, SiExpress, SiTailwindcss, SiFlutter, SiAdobephotoshop } from "react-icons/si";

const SkillsBento = () => {
  const categories = [
    {
      title: "Frontend",
      emoji: "🎨",
      skills: [
        { name: "React", icon: <FaReact />, color: "text-[#61DAFB]" },
        { name: "Vue.js", icon: <FaVuejs />, color: "text-[#4FC08D]" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178C6]" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
        { name: "JavaScript", icon: <FaJs />, color: "text-[#F7DF1E]" },
      ],
      className: "md:col-span-2 md:row-span-1",
      gradient: "from-cyan-500/20 to-blue-600/20",
      border: "border-cyan-500/20 hover:border-cyan-400/40",
    },
    {
      title: "Backend",
      emoji: "⚙️",
      skills: [
        { name: "Laravel", icon: <FaLaravel />, color: "text-[#FF2D20]" },
        { name: "Java", icon: <FaJava />, color: "text-[#007396]" },
        { name: "Python", icon: <FaPython />, color: "text-[#3776AB]" },
        { name: "PostgreSQL", icon: <FaDatabase />, color: "text-[#4169E1]" },
        { name: "Express", icon: <SiExpress />, color: "text-white" },
      ],
      className: "md:col-span-1 md:row-span-2",
      gradient: "from-red-500/20 to-orange-500/20",
      border: "border-red-500/20 hover:border-red-400/40",
    },
    {
      title: "Design & Tools",
      emoji: "✨",
      skills: [
        { name: "Photoshop", icon: <SiAdobephotoshop />, color: "text-[#31A8FF]" },
        { name: "Figma", icon: <FaFigma />, color: "text-[#F24E1E]" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-[#FFCA28]" },
        { name: "Flutter", icon: <SiFlutter />, color: "text-[#02569B]" },
      ],
      className: "md:col-span-2 md:row-span-1",
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/20 hover:border-purple-400/40",
    },
    {
      title: "Workflow",
      emoji: "🔧",
      skills: [
        { name: "Git", icon: <FaCodeBranch />, color: "text-[#F05032]" },
        { name: "GitHub", icon: <FaGithub />, color: "text-white" },
        { name: "Terminal", icon: <FaTerminal />, color: "text-green-500" },
      ],
      className: "md:col-span-3 md:row-span-1",
      gradient: "from-green-500/20 to-emerald-500/20",
      border: "border-green-500/20 hover:border-green-400/40",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl mx-auto p-4">
      {categories.map((cat, idx) => (
        <div 
          key={idx}
          className={`${cat.className} relative overflow-hidden rounded-3xl p-6 backdrop-blur-xl border ${cat.border} transition-all duration-500 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20`}
          style={{ background: 'rgba(15, 10, 30, 0.6)' }}
        >
          {/* Gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
          
          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700" />

          <div className="relative z-10">
            <h3 className="text-yellow-500 font-header font-bold text-xl mb-5 flex items-center gap-2">
              <span className="text-2xl">{cat.emoji}</span>
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/10 hover:border-yellow-500/40 hover:bg-white/10 transition-all duration-300 group/skill"
                  title={skill.name}
                >
                  <span className={`text-2xl ${skill.color} group-hover/skill:scale-110 transition-transform`}>{skill.icon}</span>
                  <span className="text-sm font-primary font-semibold text-white/90">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsBento;
