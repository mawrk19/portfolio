type ProjectCardProps = {
  img: string;
  title: string;
  body: string;
  link: string;
};

const ProjectCard = ({ img, title, body, link }: ProjectCardProps) => (
  <a
    href={link}
    className="relative rounded-2xl overflow-hidden shadow-xl group h-60 md:h-72 flex items-end p-0 transition-transform duration-300 hover:scale-[1.025] focus:scale-[1.025] outline-none"
    style={{
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    tabIndex={0}
  >
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-300 z-0" />

    {/* Content */}
    <div className="relative z-10 w-full p-4 flex flex-col">
      <h3 className="text-lg md:text-xl font-bold font-header text-white mb-2 drop-shadow-md">
        {title}
      </h3>
      <p className="text-xs md:text-sm bg-white/80 text-[#1f0739] rounded-md px-3 py-2 font-primary shadow-sm backdrop-blur-sm">
        {body}
      </p>
    </div>

    {/* Subtle border highlight on hover */}
    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300 pointer-events-none" />
  </a>
);

export default ProjectCard;
