import mark from './assets/mawrk.png';
import bnw from './assets/Logo ni Mark bnw.svg';

function About() {
  return (
    <div className="about font-cuteBody">
      <div className="bg-[#372d3b] h-[100vh] flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10 p-5">
          
          {/* Image Section */}
          <div className="relative">
            <img
              src={mark}
              alt="Mark"
              className="h-100 w-auto mb-4 relative left-[-20px] top-[100px] z-10"
            />
            <img
              src={bnw}
              alt="Logo"
              className="absolute top-[150px] left-[-180px] h-150 w-auto z-0 animate-spin"
            />
          </div>

          {/* Text Section */}
          <div className="text-white text-center md:text-left max-w-xl">
            <h1 className="text-7xl mb-6 font-header font-bold text-yellow-500">Who is Mark?</h1>
            
            <p className="text-xl mb-6 font-primary leading-relaxed">
              Mark Acedo is a passionate fullstack developer and illustrator from Caloocan City.
              Whether it’s building immersive UIs or sketching up ideas, Mark brings creativity into everything.
            </p>

            <p className="text-xl mb-6 font-primary leading-relaxed">
              With years of experience across multiple industries and projects, 
              he’s learned to adapt fast, think sharp, and deliver quality work — always with a curious mind.
            </p>

            <p className="text-xl mb-6 font-primary leading-relaxed">
              He enjoys crafting user-friendly websites, reusable components, and smart apps
              that solve real problems and improve everyday lives. Tech with purpose, always.
            </p>

            <p className="text-xl mb-6 font-primary leading-relaxed">
              Currently open to freelance and full-time opportunities. While you're here... 
              don’t be shy — say hi to Mark ❤️
            </p>

            <div className="mt-5 font-primary">
              <a href="#footer">
                <button className="bg-transparent font-primary text-white text-3xl py-2 px-4 border border-white rounded transition duration-300 hover:bg-yellow-500 hover:text-red">
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
