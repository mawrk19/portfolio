import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import bg from '../assets/bg.png';
import sakura1 from '../assets/sakura1.png';
import sakura2 from '../assets/sakura2.png';
import mawrk from '../assets/Logo ni Mark.png';
import Navbar from './Navbar';
import About from '../About';

function ParallaxComponent() {
  return (
    <div className="relative h-[100vh]"> {/* 👈 force height for 7 pages */}
   

      <Parallax pages={7} style={{ top: 0, left: 0 }} className="absolute w-full h-full bg-red-500">

        {/* Background Layer */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={4}
          style={{ 
            backgroundImage: `url(${bg})`, 
            backgroundSize: 'cover',
            zIndex: -1,
          }}
        />

      <ParallaxLayer 
        offset={1}
        speed={0.5} 
        factor={1}
        sticky={{ start: 1, end: 7}}
        style={{ 
          zIndex: 10 
        }}>
        <Navbar />
      </ParallaxLayer>

      <ParallaxLayer 
        offset={1}
        speed={0.5} 
        factor={2}
        sticky={{ start: 1, end: 1.5}}
        style={{ 
          zIndex: 9
        }}>
        <About />
      </ParallaxLayer>

        {/* Sakura Layer 1 */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={7}
          style={{ 
            backgroundImage: `url(${sakura1})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center -200px',
            zIndex: 2,
          }}
        />

        {/* Logo Layer */}
        <ParallaxLayer
          offset={0}
          speed={-0.2}
          factor={1}
          style={{ 
            backgroundImage: `url(${mawrk})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '200px auto',
            backgroundPosition: 'center 300px',
            zIndex: 1,
          }}
        />

        {/* Sakura Layer 2 */}
        <ParallaxLayer
          offset={0}
          speed={0.6}
          factor={2}
          style={{ 
            backgroundImage: `url(${sakura2})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right top',
            zIndex: 1,
          }}
        />

      </Parallax>
    </div>
  );
}

export default ParallaxComponent;
