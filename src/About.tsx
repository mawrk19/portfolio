import SkillsBento from './components/SkillsBento';
import JourneyTimeline from './components/JourneyTimeline';
import GithubStats from './components/GithubStats';

function About() {
  return (
    <div className="about font-cuteBody text-white flex flex-col items-center px-4 sm:px-6 py-16">
      {/* Top Section: GitHub Stats (portrait) + Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl py-8 md:py-12 items-center">
        
        {/* Left: Leveling Up Portrait Card */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg md:text-xl font-header font-bold text-white/40 uppercase tracking-[0.15em] mb-6">
            Leveling Up...
          </h2>
          <GithubStats />
        </div>

        {/* Right: Who is Mark? */}
        <div className="text-center md:text-left space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-header font-bold text-yellow-500">
            Who is Mark?
          </h1>

          <p className="text-sm md:text-xl font-primary leading-relaxed text-white/90">
            Mark Acedo is a passionate <span className="text-yellow-400 font-bold">fullstack developer</span> and <span className="text-pink-400 font-bold">illustrator</span> from Caloocan City.
            Whether it's building immersive UIs or sketching up ideas, Mark brings creativity into everything.
          </p>

          <p className="text-sm md:text-xl font-primary leading-relaxed text-white/80">
            With years of experience across multiple industries and projects,
            he's learned to adapt fast, think sharp, and deliver quality work — always with a curious mind.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-4 items-center sm:justify-start space-y-3 sm:space-y-0 pt-2">
            <a href="#footer">
              <button className="bg-yellow-500 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300">
                Get in touch
              </button>
            </a>

            <a href="/Acedo, Mark Resume.pdf" download>
              <button className="bg-white/10 text-white font-bold py-3 px-8 rounded-full border border-white/20 hover:bg-white/20 transition duration-300 backdrop-blur-sm shadow-xl">
                Mark's Resume
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Skills Bento Grid Section */}
      <div className="w-full max-w-7xl mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-header font-bold text-yellow-500 inline-block border-b-4 border-yellow-500/50 pb-4 tracking-tight">
            My Toolbox
          </h2>
        </div>
        <SkillsBento />
      </div>

      {/* Journey Timeline Section */}
      <div className="w-full max-w-7xl mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-header font-bold text-pink-400 inline-block border-b-4 border-pink-400/50 pb-4 tracking-tight">
            The Journey So Far
          </h2>
        </div>
        <JourneyTimeline />
      </div>
    </div>
  );
}

export default About;
