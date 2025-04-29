import mark from './assets/mawrk.png';

function About() {
  return (
    <div className="about font-cuteBody text-white min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl py-12 md:py-16 items-center">
        
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={mark}
            alt="Mark"
            className="h-[300px] sm:h-[380px] md:h-[600px] w-auto z-10 rounded-xl"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left space-y-5">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-header font-bold text-yellow-500">
            Who is Mark?
          </h1>

          <p className="text-sm md:text-xl font-primary leading-relaxed">
            Mark Acedo is a passionate fullstack developer and illustrator from Caloocan City.
            Whether it’s building immersive UIs or sketching up ideas, Mark brings creativity into everything.
          </p>

          <p className="text-sm md:text-xl font-primary leading-relaxed">
            With years of experience across multiple industries and projects,
            he’s learned to adapt fast, think sharp, and deliver quality work — always with a curious mind.
          </p>

          <p className="text-sm md:text-xl font-primary leading-relaxed">
            He enjoys crafting user-friendly websites, reusable components, and smart apps
            that solve real problems and improve everyday lives. Tech with purpose, always.
          </p>

          <p className="text-sm md:text-xl font-primary leading-relaxed">
            Currently open to freelance and full-time opportunities. While you're here...
            don’t be shy — say hi to Mark ❤️
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-4 items-center sm:justify-start space-y-3 sm:space-y-0 pt-4">
            <a href="#footer">
              <button className="bg-transparent text-sm sm:text-lg text-white py-2 px-5 border border-white rounded hover:bg-yellow-500 hover:text-black transition duration-300">
                Get in touch
              </button>
            </a>

            <a href="/Acedo-Resume.pdf" download>
              <button className="bg-transparent text-sm sm:text-lg text-white py-2 px-5 border border-white rounded hover:bg-yellow-500 hover:text-black transition duration-300">
                mawrks Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
