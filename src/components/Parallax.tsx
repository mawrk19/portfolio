import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import bg from '../assets/bg.png';
import sakura1 from '../assets/sakura1.svg';
import sakura2 from '../assets/sakura2.png';
import mawrk from '../assets/Logo ni Mark.png';
import About from '../About';
import Projects from '../Projects';
import Footer from '../Footer';

function ParallaxComponent() {
  const scrollToTop = () => {
    const parallaxContainer = document.querySelector('.parallax-container');
    if (parallaxContainer) {
      parallaxContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[100vh]">
      <Parallax 
        pages={5} 
        style={{ top: 0, left: 0 }} 
        className="parallax-container absolute w-full h-full bg-[#4d6937]"
      >
        {/* Background */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={2}
          style={{ 
            backgroundImage: `url(${bg})`, 
            backgroundSize: 'cover',
            zIndex: -2,
          }}
        />

        {/* About Section */}
        <ParallaxLayer 
          offset={1}
          speed={1} 
          factor={2}
          sticky={{ start: 1, end: 1.5 }}
          style={{ zIndex: 8 }}
        >
          <div id="about">
            <About />
          </div>
        </ParallaxLayer>

        {/* Projects Section */}
        <ParallaxLayer 
          offset={3}
          speed={0.3}
          factor={1}
          sticky={{ start: 2.8, end: 3.2 }}
          style={{
            zIndex: 9,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div id="projects" className="w-full">
            <Projects />
          </div>
        </ParallaxLayer>

        {/* Footer Section */}
        <ParallaxLayer
          offset={4}
          speed={1}
          factor={1}
          style={{ zIndex: 12 }}
        >
          <div id="footer">
            <Footer />
          </div>
        </ParallaxLayer>

        {/* Decorative sakura layers */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={4}
          style={{ 
            backgroundImage: `url(${sakura1})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center -100px',
            zIndex: 1,
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={-0.2}
          factor={1}
          style={{ 
            backgroundImage: `url(${mawrk})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '200px auto',
            backgroundPosition: 'center 300px',
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
            backgroundPosition: 'right top',
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
