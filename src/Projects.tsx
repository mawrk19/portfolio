import ProjectCard from "./components/ProjectCard";
import tesda from "./assets/tesda.png";
import kopilism from "./assets/kopilism.png";
import sage from "./assets/sage.png";
import sis from "./assets/sis.png";
import cpu from "./assets/cpu.png";
import bit from "./assets/16bit.png";
import ScrollVelocity from "./components/ScrollVelocity";
import Footer from "./Footer";

function Projects() {
  const projectData = [
    {
      img: tesda,
      title: "NCIII JAVA",
      body: "this certificate represents my completion of the NC III in Java Programming, issued by TESDA.",
      link: "/blog/tesda",
    },
    {
      img: sis,
      title: "Student Info System",
      body: "A complete student records management system with CRUD features and admin panel.",
      link: "/blog/sis",
    },
    {
      img: kopilism,
      title: "Kopilism App",
      body: "Mobile coffee ordering system with QR scanning and inventory tracking using Flutter.",
      link: "/blog/kopilism",
    },
    {
      img: sage,
      title: "Sage AI",
      body: "A text based adventure game using AI. Built with React, Tailwind, Express and OpenAI API.",
      link: "/blog/sage",
    },
    {
      img: bit,
      title: "16-Bit Game",
      body: "A pixel-style game using HTML Logisim Evolution. Inspired by retro arcade style.",
      link: "/blog/16bit",
    },
    {
      img: cpu,
      title: "Dual Core CPU Simulator",
      body: "Visual tool that simulates a 16-bit dual core cpu that has a text based OS. Built on Logisim Evolution.",
      link: "/blog/cpu",
    },
  ];

  return (
    <section className="flex flex-col items-center w-full px-4 pt-24 md:pt-36 pb-20">
 
 <ScrollVelocity
  texts={['Mark Acedo', 'Flower Boy']}
  velocity={20} // Reduced from 100 to slow it down
  className="custom-scroll-text"
/>
      <div className="w-full max-w-6xl mx-auto text-center md:text-left px-2 md:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-header font-bold text-yellow-500 leading-tight mb-4">
          My Projects
        </h1>
        <p className="text-sm sm:text-base md:text-xl font-primary font-semibold text-gray-700 mb-8 max-w-3xl mx-auto md:mx-0 leading-relaxed">
          Here are some of the projects I have worked on.<br />
          It ain't much, but it's honest work.
        </p>
      </div>
  
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2">
        {projectData.map((project, idx) => (
          <ProjectCard
            key={idx}
            img={project.img}
            title={project.title}
            body={project.body}
            link={project.link}
          />
        ))}
      </div>

  
      <ScrollVelocity
  texts={['Mark Acedo', 'Flower Boy']}
  velocity={20} // Reduced from 100 to slow it down
  className="custom-scroll-text"
  
/>
<Footer  />
    </section>
    
  );
<Footer />
}

export default Projects;
