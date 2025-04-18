import { useState } from "react";
import { FaReact, FaPython, FaJs, FaGithub } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobexd, SiTypescript } from "react-icons/si";

const icons = [
  { icon: <FaReact />, label: "React" },
  { icon: <FaPython />, label: "Python" },
  { icon: <FaJs />, label: "JavaScript" },
  { icon: <SiAdobephotoshop />, label: "Photoshop" },
  { icon: <SiAdobexd />, label: "XD" },
  { icon: <FaGithub />, label: "GitHub" },
  { icon: <SiTypescript />, label: "TypeScript" },
];

export default function TechIconSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(current === 0 ? icons.length - 1 : current - 1);
  const next = () => setCurrent(current === icons.length - 1 ? 0 : current + 1);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md w-80 mx-auto">
      <div className="flex items-center">
        <button onClick={prev} className="p-2 mx-2 bg-white rounded-full shadow hover:bg-gray-200">
          &#8592;
        </button>
        <div className="w-20 h-20 flex items-center justify-center text-5xl text-blue-600">
          {icons[current].icon}
        </div>
        <button onClick={next} className="p-2 mx-2 bg-white rounded-full shadow hover:bg-gray-200">
          &#8594;
        </button>
      </div>
      <div className="mt-4 text-lg font-semibold">{icons[current].label}</div>
    </div>
  );
}
