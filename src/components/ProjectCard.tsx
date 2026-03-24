type ProjectCardProps = {
  img: string;
  title: string;
  body: string;
  link: string;
  tags?: string[];
};

const ProjectCard = ({ img, title, body, link, tags }: ProjectCardProps) => (
  <a
    href={link}
    className="relative rounded-2xl overflow-hidden shadow-xl group h-64 md:h-80 flex items-end p-0 transition-transform duration-300 hover:scale-[1.025] focus:scale-[1.025] outline-none"
    style={{
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    tabIndex={0}
  >
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300 z-0" />

    {/* Content */}
    <div className="relative z-10 w-full p-4 flex flex-col">
      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1 mb-2">
        {tags?.map((tag, i) => (
          <span 
            key={i} 
            className="text-[10px] md:text-xs font-bold uppercase tracking-wider bg-yellow-500/90 text-black px-2 py-0.5 rounded-full backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-lg md:text-xl font-bold font-header text-white mb-1 drop-shadow-md">
        {title}
      </h3>
      <p className="text-xs md:text-sm bg-white/10 text-white/90 border border-white/20 rounded-md px-3 py-2 font-primary shadow-sm backdrop-blur-md line-clamp-2">
        {body}
      </p>
    </div>

    {/* Subtle border highlight on hover */}
    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-400/50 transition-all duration-300 pointer-events-none" />
  </a>
);

export default ProjectCard;
