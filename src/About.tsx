import mark from './assets/mawrk.png';
// Removed logo import as it's no longer used

function About() {
  return (
    <div className="about font-cuteBody">
      <div className="min-h-[100vh] flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10 p-5">
          
          {/* Image Section */}
          <div className="relative mb-6 md:mb-0">
            <img
              src={mark}
              alt="Mark"
              className="h-[200px] md:h-[400px] w-auto mb-4 relative left-0 md:top-[100px] z-10 max-w-xs md:max-w-none"
            />
          </div>

          {/* Text Section */}
          <div className="text-white text-center md:text-left max-w-xl">
            <h1 className="text-3xl md:text-7xl mb-6 font-header font-bold text-yellow-500">
              Who is Mark?
            </h1>
            
            <p className="text-sm md:text-xl mb-6 font-primary leading-relaxed">
              Mark Acedo is a passionate fullstack developer and illustrator from Caloocan City.
              Whether it’s building immersive UIs or sketching up ideas, Mark brings creativity into everything.
            </p>

            <p className="text-sm md:text-xl mb-6 font-primary leading-relaxed">
              With years of experience across multiple industries and projects, 
              he’s learned to adapt fast, think sharp, and deliver quality work — always with a curious mind.
            </p>

            <p className="text-sm md:text-xl mb-6 font-primary leading-relaxed">
              He enjoys crafting user-friendly websites, reusable components, and smart apps
              that solve real problems and improve everyday lives. Tech with purpose, always.
            </p>

            <p className="text-sm md:text-xl mb-6 font-primary leading-relaxed">
              Currently open to freelance and full-time opportunities. While you're here... 
              don’t be shy — say hi to Mark ❤️
            </p>

            <div className="mt-5 font-primary">
              <a href="#footer">
                <button className="bg-transparent font-primary text-white text-2xl py-2 px-4 border border-white rounded transition duration-300 hover:bg-yellow-500 hover:text-red">
                  Get in touch
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
