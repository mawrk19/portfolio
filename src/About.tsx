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
              className="absolute top-[150px] left-[-180px] h-150 w-auto z-0"
            />
          </div>

          {/* Text Section */}
          <div className="text-white text-center md:text-left">
            <h1 className="text-5xl mb-4 font-primary text-red-500">Who is Mark?</h1>
            <p className="text-xl mb-2 font-primary">
              Mark Acedo is a fullstack developer<br /> and illustrator from
              Caloocan City. <br />Currently accepting clients and full-time <br />
              opportunities. <br /> <br />
            </p>
            <p className="text-xl mb-2 font-primary">
              With many years of creative experience <br />across multiple projects.
              <br /> Mark loves learning new things <br />
              and thinking on their feet. <br /> <br />
            </p>
            <p className="text-xl mb-2 font-primary">
              Mark loves designing websites <br />
              and components and creating useful<br />
              applications that can upgrade the <br />
              quality of living with the use
              of tech. <br />
              While you're here, be sure to say hi to Mark <span>❤️</span>
            </p>

            <div className="mt-5 font-primary">
              <button className="bg-transparent font-primary text-white text-3xl py-2 px-4 border border-white rounded transition duration-300 hover:bg-yellow-500 hover:text-red ">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
