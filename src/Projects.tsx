import Carousel from "./components/Carousel";
import logo from "./assets/Logo ni Mark bnw.svg";
import mawrk from "./assets/mawrk.png";

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4">
      <div className="w-[60%] mx-auto text-left">
        <h1 className="text-7xl mb-4 font-header font-bold text-[#1f0739]">
          My Projects
        </h1>
        <p className="text-2xl mb-6 font-primary font-extrabold text-[#6d184f]">
          Here are some of the projects I have worked on.
          <br />
          It ain't much, but it's honest work.
        </p>
      </div>

      <Carousel autoSlide={true} autoSlideInterval={5000}>
        <div className="bg-[#372d3b] w-full h-full flex flex-col items-center justify-center text-white text-3xl">
          <img src={logo} alt="Logo" className="w-40 h-40 mb-4" />
          Slide 1
        </div>
        <div className="bg-[#4c3f55] w-full h-full flex flex-col items-center justify-center text-white text-3xl">
          <img src={mawrk} alt="Mawrk" className="w-80 h-80 mb-4" />
          Slide 2
        </div>
        <div className="bg-[#6c5ce7] w-full h-full flex items-center justify-center text-white text-3xl">
          Slide 3
        </div>
        <div className="bg-[#8b5cf6] w-full h-full flex items-center justify-center text-white text-3xl">
          Slide 4
        </div>
      </Carousel>
    </div>
  );
}

export default Projects;
