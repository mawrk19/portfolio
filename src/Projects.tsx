import Carousel from "./components/Carousel";
import logo from "./assets/Logo ni Mark bnw.svg";
import mawrk from "./assets/mawrk.png";

function Projects() {
  return (
    <>
    <div className="flex items-center justify-center absolute top-[150px] left-[140px]">

    <div>
    <h1 className="text-7xl mb-4 font-header font-bold text-yellow-500 text-center mt-10">Projects</h1>
    <br />
    <p className="text-xl mb-2 font-primary text-center">Here are some of the projects I have worked on.</p>
    </div>

    <Carousel autoSlide={true} autoSlideInterval={5000}>
      <div className="bg-[#372d3b] h-[60vh] w-[80%] h-[80-vh] flex items-center justify-center text-white text-3xl">
        <img src={logo} alt="Logo" className="w-40 h-40 mr-4" />
        Slide 1
      </div>
      <div className="bg-[#4c3f55] h-[60vh] flex items-center justify-center text-white text-3xl">
        <img src={mawrk} alt="Mawrk" className="w-80 h-80" />
        Slide 2
      </div>
      <div className="bg-[#6c5ce7] h-[60vh] flex items-center justify-center text-white text-3xl">
        Slide 3
      </div>
      <div className="bg-[#8b5cf6] h-[60vh] flex items-center justify-center text-white text-3xl">
        Slide 4
      </div>
     
    </Carousel>
    </div>
    </>
  );
}

export default Projects;
