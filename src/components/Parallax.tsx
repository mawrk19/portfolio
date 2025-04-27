import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import bg from '../assets/bg.png';
import sakura1 from '../assets/sakura1.svg';
import sakura2 from '../assets/sakura2.svg';
import mawrk from '../assets/logo.png';
import About from '../About';
import Projects from '../Projects';
import { IoIosArrowDown } from "react-icons/io";

function ParallaxComponent() {
  const scrollToTop = () => {
    const parallaxContainer = document.querySelector('.parallax-container');
    if (parallaxContainer) {
      parallaxContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative h-screen">
      <Parallax
        pages={4.9}
        style={{ top: 0, left: 0 }}
        className="parallax-container absolute w-full h-full bg-[#4d6937]"
      >
        {/* Enhanced Background with Texture */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={2}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center -100px',
            zIndex: -7,
          }}
        />
        
        {/* Texture Overlay */}
        <ParallaxLayer
          offset={0}
          speed={0.3}
          factor={5}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='rgba(255,255,255,0.05)' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            zIndex: -3,
            opacity: 0.7,
          }}
        />
        
        {/* Noise Texture */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={5}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
            zIndex: -3,
            opacity: 0.2,
          }}
        />
        
        {/* Light Rays */}
        <ParallaxLayer
          offset={0}
          speed={0.2}
          factor={2}
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 180, 0.08), transparent 70%)',
            zIndex: -3,
          }}
        />

        {/* About Section */}
        <ParallaxLayer
          offset={1}
          speed={1}
          factor={1}
          sticky={{ start: 1, end: 1.5 }}
          style={{ zIndex: 8 }}
        >
          <div id="about">
            <div className='relative text-4xl top-[-100px] z-20 flex flex-col items-center justify-center animate-bounce drop-shadow-amber-300'>  
              <IoIosArrowDown />
            </div>
            <About />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={2.7}
          speed={-1}
          sticky={{ start: 2.7, end: 2.8 }}
          style={{
            zIndex: 9,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            paddingTop: '80px',
          }}
        >
          <div id="projects" className="w-full">
            <Projects />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={4.6}
          speed={0.2}
          style={{
            zIndex: 12,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: '40px',
          }}
        >
          <div id="footer" className="w-full absolute bottom-0">
            {/* <Footer /> */}
          </div>
        </ParallaxLayer>
        
        {/* Enhanced decorative layers */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={4.3}
          style={{
            backgroundImage: `url(${sakura1})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center -100px',
            zIndex: 1,
          }}
        />
        
        {/* Floating Sakura Petals - replacing the orbit elements */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          factor={5}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Cg fill='rgba(255,223,236,0.15)'%3E%3C!-- Petal 1 --%3E%3Cpath d='M80 120c-4.6-2-9.8-2.6-14.7-1.5-4.9 1-9.3 3.5-12.6 7-6.7 7-8.4 17.3-4.4 26 4 8.8 12.8 14.4 22.3 14.4 3.5 0 7-0.7 10.2-2.2 6.6-2.9 11.6-8.5 13.8-15.4 2.2-6.9 1.1-14.3-2.9-20.2-4-5.9-10.2-9.8-17.1-11.2 1.8 1 3.4 2.2 4.8 3.7 5.6 5.9 6.9 14.8 3.2 22.1-3.7 7.3-11.5 11.4-19.6 10.3-8.1-1.1-14.7-7-16.6-14.8-1.9-7.9 1.5-16 8.4-20.2 6.6-4 15-3.5 21.2 1.1 1.5 1.1 2.8 2.5 3.9 4z'/%3E%3C!-- Petal 2 --%3E%3Cpath d='M200 60c4.6 2.1 9.8 2.6 14.8 1.5 5-1.1 9.4-3.6 12.7-7.2 6.6-7.2 8.2-17.5 4-26.2-4.1-8.7-13-14.1-22.5-14-3.5 0-7 0.7-10.3 2.2-6.5 3-11.4 8.7-13.5 15.6-2.1 7-0.9 14.3 3.2 20.1 4.1 5.8 10.3 9.6 17.2 11 -1.8-1-3.4-2.3-4.7-3.8-5.5-6-6.6-15-2.8-22.2 3.8-7.2 11.7-11.2 19.8-10 8.1 1.2 14.6 7.2 16.4 15 1.8 7.9-1.8 15.9-8.7 20-6.7 3.9-15.1 3.3-21.1-1.4-1.5-1.2-2.7-2.6-3.7-4.1z'/%3E%3C!-- Petal 3 --%3E%3Cpath d='M660 180c-0.9-5 0-10.1 2.6-14.6 2.6-4.5 6.7-7.8 11.5-9.4 9.6-3.3 20.1 0.4 26.4 9.3 6.3 8.9 6.3 20.8 0 29.7-1.7 2.3-3.6 4.4-5.9 6-6 4.2-13.6 5.4-20.7 3.4-7.1-2-12.9-7.3-15.9-14.3-3-7-2.7-14.9 0.8-21.6 -0.5 2.1-0.8 4.3-0.8 6.5 0 8.1 3.9 15.6 10.5 20.2 6.6 4.6 15 5.3 22.3 1.9 7.3-3.5 12.1-10.5 12.7-18.6 0.6-8.1-3.3-15.8-10.1-20.3-6.5-4.3-14.9-4.8-21.7-1.3-1.7 0.9-3.2 2-4.6 3.2z'/%3E%3C!-- Petal 4 --%3E%3Cpath d='M580 620c0.9 5 0 10.1-2.6 14.6-2.6 4.5-6.7 7.8-11.5 9.4-9.6 3.3-20.1-0.4-26.4-9.3-6.3-8.9-6.3-20.8 0-29.7 1.7-2.3 3.6-4.4 5.9-6 6-4.2 13.6-5.4 20.7-3.4 7.1 2 12.9 7.3 15.9 14.3 3 7 2.7 14.9-0.8 21.6 0.5-2.1 0.8-4.3 0.8-6.5 0-8.1-3.9-15.6-10.5-20.2-6.6-4.6-15-5.3-22.3-1.9-7.3 3.5-12.1 10.5-12.7 18.6-0.6 8.1 3.3 15.8 10.1 20.3 6.5 4.3 14.9 4.8 21.7 1.3 1.7-0.9 3.2-2 4.6-3.2z'/%3E%3C!-- Petal 5 --%3E%3Cpath d='M360 480c-2-4.6-2.6-9.8-1.5-14.7 1-4.9 3.5-9.3 7-12.6 7-6.7 17.3-8.4 26-4.4 8.8 4 14.4 12.8 14.4 22.3 0 3.5-0.7 7-2.2 10.2-2.9 6.6-8.5 11.6-15.4 13.8-6.9 2.2-14.3 1.1-20.2-2.9-5.9-4-9.8-10.2-11.2-17.1 1 1.8 2.2 3.4 3.7 4.8 5.9 5.6 14.8 6.9 22.1 3.2 7.3-3.7 11.4-11.5 10.3-19.6-1.1-8.1-7-14.7-14.8-16.6-7.9-1.9-16 1.5-20.2 8.4-4 6.6-3.5 15 1.1 21.2 1.1 1.5 2.5 2.8 4 3.9z'/%3E%3C!-- Petal 6 --%3E%3Cpath d='M400 120c2 4.6 2.6 9.8 1.5 14.7-1 4.9-3.5 9.3-7 12.6-7 6.7-17.3 8.4-26 4.4-8.8-4-14.4-12.8-14.4-22.3 0-3.5 0.7-7 2.2-10.2 2.9-6.6 8.5-11.6 15.4-13.8 6.9-2.2 14.3-1.1 20.2 2.9 5.9 4 9.8 10.2 11.2 17.1-1-1.8-2.2-3.4-3.7-4.8-5.9-5.6-14.8-6.9-22.1-3.2-7.3 3.7-11.4 11.5-10.3 19.6 1.1 8.1 7 14.7 14.8 16.6 7.9 1.9 16-1.5 20.2-8.4 4-6.6 3.5-15-1.1-21.2-1.1-1.5-2.5-2.8-4-3.9z'/%3E%3C!-- Petal 7 --%3E%3Cpath d='M120 320c5 0.9 10.1 0 14.6-2.6 4.5-2.6 7.8-6.7 9.4-11.5 3.3-9.6-0.4-20.1-9.3-26.4-8.9-6.3-20.8-6.3-29.7 0-2.3 1.7-4.4 3.6-6 5.9-4.2 6-5.4 13.6-3.4 20.7 2 7.1 7.3 12.9 14.3 15.9 7 3 14.9 2.7 21.6-0.8-2.1 0.5-4.3 0.8-6.5 0.8-8.1 0-15.6-3.9-20.2-10.5-4.6-6.6-5.3-15-1.9-22.3 3.5-7.3 10.5-12.1 18.6-12.7 8.1-0.6 15.8 3.3 20.3 10.1 4.3 6.5 4.8 14.9 1.3 21.7-0.9 1.7-2 3.2-3.2 4.6z'/%3E%3C!-- Petal 8 --%3E%3Cpath d='M600 400c-5-0.9-10.1 0-14.6 2.6-4.5 2.6-7.8 6.7-9.4 11.5-3.3 9.6 0.4 20.1 9.3 26.4 8.9 6.3 20.8 6.3 29.7 0 2.3-1.7 4.4-3.6 6-5.9 4.2-6 5.4-13.6 3.4-20.7-2-7.1-7.3-12.9-14.3-15.9-7-3-14.9-2.7-21.6 0.8 2.1-0.5 4.3-0.8 6.5-0.8 8.1 0 15.6 3.9 20.2 10.5 4.6 6.6 5.3 15 1.9 22.3-3.5 7.3-10.5 12.1-18.6 12.7-8.1 0.6-15.8-3.3-20.3-10.1-4.3-6.5-4.8-14.9-1.3-21.7 0.9-1.7 2-3.2 3.2-4.6z'/%3E%3C!-- Repeat with more petal positions --%3E%3Cpath d='M180 710c-4.6-2-9.8-2.6-14.7-1.5-4.9 1-9.3 3.5-12.6 7-6.7 7-8.4 17.3-4.4 26 4 8.8 12.8 14.4 22.3 14.4 3.5 0 7-0.7 10.2-2.2 6.6-2.9 11.6-8.5 13.8-15.4 2.2-6.9 1.1-14.3-2.9-20.2-4-5.9-10.2-9.8-17.1-11.2 1.8 1 3.4 2.2 4.8 3.7 5.6 5.9 6.9 14.8 3.2 22.1-3.7 7.3-11.5 11.4-19.6 10.3-8.1-1.1-14.7-7-16.6-14.8-1.9-7.9 1.5-16 8.4-20.2 6.6-4 15-3.5 21.2 1.1 1.5 1.1 2.8 2.5 3.9 4z'/%3E%3Cpath d='M300 650c4.6 2.1 9.8 2.6 14.8 1.5 5-1.1 9.4-3.6 12.7-7.2 6.6-7.2 8.2-17.5 4-26.2-4.1-8.7-13-14.1-22.5-14-3.5 0-7 0.7-10.3 2.2-6.5 3-11.4 8.7-13.5 15.6-2.1 7-0.9 14.3 3.2 20.1 4.1 5.8 10.3 9.6 17.2 11 -1.8-1-3.4-2.3-4.7-3.8-5.5-6-6.6-15-2.8-22.2 3.8-7.2 11.7-11.2 19.8-10 8.1 1.2 14.6 7.2 16.4 15 1.8 7.9-1.8 15.9-8.7 20-6.7 3.9-15.1 3.3-21.1-1.4-1.5-1.2-2.7-2.6-3.7-4.1z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '800px',
            backgroundRepeat: 'repeat',
            zIndex: 0,
            opacity: 0.6,
          }}
        />
        
        <ParallaxLayer
          offset={0}
          speed={-0.2}
          factor={1}
          style={{
            backgroundImage: `url(${mawrk})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '250px auto',
            backgroundPosition: 'center 250px',
            zIndex: -1,
          }}
        />
       
        <ParallaxLayer
          offset={0}
          speed={0.6}
          factor={2}
          style={{
            backgroundImage: `url(${sakura2})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            zIndex: -1,
          }}
        />
        
        {/* Back to Top Button */}
        <div className="fixed bottom-4 right-4 z-20">
          <button
            onClick={scrollToTop}
            className="bg-transparent text-white text-2xl py-2 px-4 border border-white rounded-full transition duration-300 hover:bg-yellow-500 hover:text-red"
          >
            ↑
          </button>
        </div>
      </Parallax>
    </div>
  );
}

export default ParallaxComponent;