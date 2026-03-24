import { FaGraduationCap, FaCode, FaCertificate, FaRocket, FaBriefcase } from "react-icons/fa";

const JourneyTimeline = () => {
  const events = [
    {
      year: "2025 — Present",
      title: "AISI Decode Technologies",
      description: "Part-time Associate Software Developer. Building enterprise solutions with Vue.js and Laravel, sharpening fullstack skills on production codebases.",
      icon: <FaBriefcase />,
        color: "from-gray-500 to-gray-600",
        dot: "bg-gray-500",
    },
    {
      year: "2024",
      title: "Fullstack Exploration",
      description: "Diving deep into React, Node.js, and modern web architectures. Building AI-powered apps like Sage AI.",
      icon: <FaRocket />,
      color: "from-pink-500 to-rose-600",
      dot: "bg-pink-500",
    },
    {
      year: "2023",
      title: "Flutter & Mobile Dev",
      description: "Developed Kopilism, a coffee ordering app, mastering state management and cross-platform UX.",
      icon: <FaCode />,
      color: "from-blue-500 to-indigo-600",
      dot: "bg-blue-500",
    },
    {
      year: "2022",
      title: "TESDA NCIII Certification",
      description: "Certified in Java Programming. Built Student Information Systems and CPU simulators.",
      icon: <FaCertificate />,
      color: "from-yellow-500 to-amber-600",
      dot: "bg-yellow-500",
    },
    {
      year: "2021",
      title: "The Beginning",
      description: "Started the journey with HTML, CSS, and hardware logic. Hooked on the logic of code.",
      icon: <FaGraduationCap />,
      color: "from-green-500 to-teal-600",
      dot: "bg-green-500",
    },
  ];

    // Landscape (horizontal) timeline
    return (
      <div className="w-full max-w-6xl mx-auto py-8 px-4 overflow-x-auto scrollbar-hide">
        <div className="relative flex flex-col md:flex-row items-center justify-start gap-12 min-w-[700px] md:min-w-0" style={{ minWidth: '600px' }}>
          {/* Horizontal line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500/50 via-pink-500/30 to-transparent -translate-y-1/2 z-0" />
          {events.map((event, idx) => (
            <div key={idx} className="relative flex flex-col items-center z-10 w-56 flex-shrink-0">
              {/* Dot on the line */}
              <div className={`w-4 h-4 rounded-full ${event.dot} shadow-lg mb-2`}>
                <div className={`absolute inset-0 rounded-full ${event.dot} animate-ping opacity-20`} />
              </div>
              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl p-6 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20 group bg-gray-900/80">
                {/* Gradient glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-10 group-hover:opacity-25 transition-opacity duration-500`} />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-700" />
                <div className="relative z-10">
                  {/* Icon + Year */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${event.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      {event.icon}
                    </div>
                    <span className="text-yellow-500 font-mono font-bold text-sm tracking-wider">{event.year}</span>
                  </div>
                  <h3 className="text-lg font-header font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-sm font-primary text-white/60 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default JourneyTimeline;
