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

    // Clean, minimal horizontal timeline
    return (
      <div className="w-full max-w-6xl mx-auto py-16 px-4 overflow-x-auto">
        <div className="relative flex flex-row items-start justify-between gap-8 min-w-[700px]">
          {/* Horizontal line */}
          <div className="absolute left-0 right-0 top-12 h-1 bg-gray-300 z-0" />
          {events.map((event, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1 min-w-[200px] max-w-[260px]">
              {/* Icon */}
              <div className="mb-2 text-3xl">{event.icon}</div>
              {/* Dot on the line */}
              <div className={`w-4 h-4 rounded-full ${event.dot} border-4 border-white z-10 mb-2`} style={{ marginTop: '-18px', marginBottom: '8px' }} />
              {/* Year */}
              <div className="font-bold text-xl mb-1" style={{ color: idx === 0 ? '#3498db' : idx === 1 ? '#38b48e' : idx === 2 ? '#f7b731' : idx === 3 ? '#f7b731' : '#e17055' }}>{event.year}</div>
              {/* Title */}
              <div className="font-bold text-lg mb-1 text-center" style={{ color: idx === 0 ? '#222' : idx === 1 ? '#222' : idx === 2 ? '#222' : idx === 3 ? '#222' : '#222' }}>{event.title}</div>
              {/* Description */}
              <div className="text-gray-700 text-sm text-center leading-relaxed">{event.description}</div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default JourneyTimeline;
