import Carousel from "./components/Carousel";
import logo from "./assets/Logo ni Mark bnw.svg";
import kopilism from "./assets/kopilism.png";
import sage from "./assets/sage.png";
import sis from "./assets/sis.png";
import cpu from "./assets/cpu.png";
import bit from "./assets/16bit.png";

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4">
      <div className="w-[60%] mx-auto text-left">
        <h1 className="text-7xl mb-4 font-header font-bold text-[#FFBF00]">
          My Projects
        </h1>
        <p className="text-2xl mb-6 font-primary font-extrabold text-[#1f0739]">
          Here are some of the projects I have worked on.
          <br />
          It ain't much, but it's honest work.
        </p>
      </div>

      <Carousel autoSlide={true} autoSlideInterval={5000}>
        <div className="bg-[#73a832] w-full h-full flex flex-col items-center justify-center text-white text-3xl">
          <img src={logo} alt="Logo" className="w-40 h-40 mb-4" />
        </div>

        <div className="bg-[#4c3f55] w-full h-full flex flex-col items-center justify-center text-white text-3xl">
          <img src={sis} alt="sis" className="" />
        
        </div>

        <div className="bg-[#6c5ce7] w-full h-full flex items-center justify-center text-white text-3xl">
        <img src={kopilism} alt="kopilism" className="" />
        </div>

        <div className="bg-[#6c5ce7] w-full h-full flex items-center justify-center text-white text-3xl">
        <img src={sage} alt="sage" className="" />
        </div>

        <div className="bg-[#6c5ce7] w-full h-full flex items-center justify-center text-white text-3xl">
        <img src={bit} alt="bit" className="" />
        </div>

        <div className="bg-[#6c5ce7] w-full h-full flex items-center justify-center text-white text-3xl">
        <img src={cpu} alt="cpu" className="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Projects;
