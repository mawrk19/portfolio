import { useParams } from "react-router-dom";
import { projectDetails } from "../../projectDetails";
import Footer from "../Footer";
import bg from "../assets/rect_bg.png";
// import Navbar from "./Navbar";

export default function BlogPage() {
  const { projectId } = useParams();
  const project = projectDetails[projectId as keyof typeof projectDetails];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-[#1f0739]">
        Project not found.
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 bg-fixed bg-center bg-no-repeat bg-cover overflow-hidden" 
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* <Navbar /> */}
      <div className="w-full max-w-4xl my-5 bg-transparent shadow-lg rounded-2xl p-6 md:p-8 backdrop-blur-sm">
        
        <h1 className="text-3xl md:text-5xl font-bold font-header text-[#1f0739] mb-4 md:mb-6">
          {project.title}
        </h1>

        <img
          src={project.img}
          alt={project.title}
          className="w-full max-h-80 md:max-h-96 object-contain mb-6 rounded-md bg-transparent"
        />

        <div className="text-gray-800 font-primary font-bold text-base md:text-lg leading-relaxed whitespace-pre-line">
          {project.content}
        </div>

      </div>
      <Footer />

    </div>

    
  );
}
