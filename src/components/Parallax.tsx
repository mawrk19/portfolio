import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bg from '../assets/bg.png';
import sakura1 from '../assets/sakura1.svg';
import sakura2 from '../assets/sakura2.svg';
import mawrk from '../assets/logo.png';
import About from '../About';
import Projects from '../Projects';
import { IoIosArrowDown } from "react-icons/io";
import Footer from '../Footer';

gsap.registerPlugin(ScrollTrigger);

function ParallaxComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Ref for layers
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const textureOverlayRef = useRef<HTMLDivElement>(null);
  const noiseTextureRef = useRef<HTMLDivElement>(null);
  const lightRaysRef = useRef<HTMLDivElement>(null);
  const sakura1Ref = useRef<HTMLDivElement>(null);
  const sakura2Ref = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const petalsRef = useRef<HTMLDivElement>(null);
  
  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scroller = containerRef.current;
      
      // Speed mappings based on react-spring factor & speed:
      // A positive yPercent makes it move slower than scroll (pushing it down)
      // A negative yPercent makes it move faster than scroll (pulling it up)
      
      if (bgLayerRef.current) gsap.to(bgLayerRef.current, {
        yPercent: 30, // equivalent to speed 0.5
        ease: 'none',
        scrollTrigger: { trigger: scroller, start: 'top top', end: 'bottom top', scrub: true, scroller }
      });
      
      if (textureOverlayRef.current) gsap.to(textureOverlayRef.current, {
        yPercent: 20, // equivalent to speed 0.3
        ease: 'none',
        scrollTrigger: { trigger: scroller, start: 'top top', end: 'bottom top', scrub: true, scroller }
      });
      
      // Noise texture speed 0 - moves with scroll
      
      if (lightRaysRef.current) gsap.to(lightRaysRef.current, {
        yPercent: 15, // equivalent to speed 0.2
        ease: 'none',
        scrollTrigger: { trigger: scroller, start: 'top top', end: 'bottom top', scrub: true, scroller }
      });
      
      if (sakura1Ref.current) gsap.to(sakura1Ref.current, {
        yPercent: 30, // equivalent to speed 0.5
        ease: 'none',
        scrollTrigger: { trigger: scroller, start: 'top top', end: 'bottom top', scrub: true, scroller }
      });
      
      if (petalsRef.current) gsap.to(petalsRef.current, {
        yPercent: 5, // equivalent to speed 0.1
        ease: 'none',
        scrollTrigger: { trigger: scroller, start: 'top top', end: 'bottom top', scrub: true, scroller }
      });
      
      if (logoRef.current) gsap.to(logoRef.current, {
        yPercent: -15, // equivalent to speed -0.2
        ease: 'none',
        scrollTrigger: { trigger: scroller, start: 'top top', end: 'bottom top', scrub: true, scroller }
      });
      
      if (sakura2Ref.current) gsap.to(sakura2Ref.current, {
        yPercent: 40, // equivalent to speed 0.6
        ease: 'none',
        scrollTrigger: { trigger: scroller, start: 'top top', end: 'bottom top', scrub: true, scroller }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);
  
  return (
    <div
      ref={containerRef}
      className="relative h-screen bg-[#4d6937] overflow-y-auto overflow-x-hidden"
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="relative w-full h-[500vh]">
        {/* Background Layers */}
        <div 
          ref={bgLayerRef}
          className="absolute top-0 w-full h-[200vh] pointer-events-none" 
          style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center -100px', zIndex: -7 }} 
        />
        
        <div 
          ref={textureOverlayRef}
          className="absolute top-0 w-full h-[500vh] pointer-events-none" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z... (truncated) ...' fill='rgba(255,255,255,0.05)' fill-rule='evenodd'/%3E%3C/svg%3E")`, zIndex: -3, opacity: 0.7 }} 
        />
        
        <div 
          ref={noiseTextureRef}
          className="absolute top-0 w-full h-[500vh] pointer-events-none" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'        />
        
        <div 
          ref={noiseTextureRef}
          className="absolute top-0 w-full h-[500vh] pointer-events-nonute top-0 w-full h-[200vh] pointer-events-none" 
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 180, 0.08), transparent 70%)', zIndex: -3 }} 
        />
        
        <div 
          ref={sakura1Ref}
          className="absolute top-0 w-full h-[430vh] pointer-events-none" 
          style={{ backgroundImage: `url(${sakura1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center -100px', zIndex: 1 }} 
        />
        
        <div 
          ref={petalsRef}
          className="absolute top-0 w-full h-[500vh] pointer-events-none" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Cg fill='rgba(255,223,236,0.15)'%3E%3Cpath ... (truncated) ...'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '800px', backgroundRepeat: 'repeat', zIndex: 0, opacity: 0.6 }} 
        />
        
        <div 
          ref={logoRef}
          className="absolute top-0 w-full h-[100vh] pointer-events-none" 
          style={{ backgroundImage: `url(${mawrk})`, backgroundRepeat: 'no-repeat', backgroundSize: '250px auto', backgroundPosition: 'center 250px', zIndex: -1 }} 
        />
        
        <div 
          ref={sakura2Ref}
          className="absolute top-0 w-full h-[200vh] pointer-events-none" 
          style={{ backgroundImage: `url(${sakura2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', zIndex: -1 }} 
        />

        {/* Content Layers */}
        <div className="absolute top-[100vh] w-full z-[8]">
          <div id="about" className="pt-20">
            <div className='relative text-4xl top-[-100px] flex flex-col items-center justify-center animate-bounce drop-shadow-amber-300'>  
              <IoIosArrowDown />
            </div>
            <About />
          </div>
        </div>
        
        <div className="absolute top-[270vh] w-full z-[9] flex justify-center items-start pt-[80px]">
          <div id="projects" className="w-full">
            <Projects />
          </div>
        </div>
        
        <div className="absolute top-[460vh] w-full z-[10]">
          <Footer />
        </div>
        
      </div>

      {/* Back to Top */}
      <div className="fixed bottom-4 right-4 z-20">
        <button
          onClick={scrollToTop}
          className="bg-[#1f0739] text-white text-2xl py-2 px-4 border border-white rounded-full transition duration-300 hover:bg-yellow-500 hover:text-red"
        >
          ↑
        </button>
      </div>
    </div>
  );
}

export default ParallaxComponent;
