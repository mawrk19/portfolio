import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mountainBg from '../assets/bg.png';
import backBranches from '../assets/sakura1.svg';
import frontBranches from '../assets/sakura2.svg';
import logoImage from '../assets/logo.png';
import About from '../About';
import Projects from '../Projects';
import { IoIosArrowDown } from "react-icons/io";
import Footer from '../Footer';

gsap.registerPlugin(ScrollTrigger);

function ParallaxComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const mountainBgRef = useRef<HTMLDivElement>(null);
  const backBranchesRef = useRef<HTMLDivElement>(null);
  const frontBranchesRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background layers
      gsap.to(mountainBgRef.current, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '50% top',
          scrub: true,
          scroller: containerRef.current,
        },
      });

      gsap.to(backBranchesRef.current, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '60% top',
          scrub: true,
          scroller: containerRef.current,
        },
      });

      gsap.to(frontBranchesRef.current, {
        yPercent: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          scroller: containerRef.current,
        },
      });

      gsap.to(logoRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          scroller: containerRef.current,
        },
      });

      // Hero text fades out on scroll
      gsap.to(heroTextRef.current, {
        yPercent: -50,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: '60% top',
          end: 'bottom top',
          scrub: true,
          scroller: containerRef.current,
        },
      });

      // About section fade-in
      gsap.from(aboutRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 85%',
          scroller: containerRef.current,
          toggleActions: 'play none none none',
        },
      });

      // Projects section fade-in
      gsap.from(projectsRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 85%',
          scroller: containerRef.current,
          toggleActions: 'play none none none',
        },
      });

      // Footer fade-in
      gsap.from(footerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          scroller: containerRef.current,
          toggleActions: 'play none none none',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-y-auto overflow-x-hidden"
      style={{ scrollBehavior: 'smooth', backgroundColor: '#2a3d20' }}
    >
      {/* ===== FULL PAGE SAKURA1 SVG BACKGROUND ===== */}
      <div
        className="fixed left-0 top-0 w-full z-0 pointer-events-none"
        style={{
          height: '110vh',
          backgroundImage: `url(${backBranches})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      {/* ===== LAYER 1: Mountain Background ===== */}
      <div
        ref={mountainBgRef}
        className="absolute top-0 left-0 w-full h-[120vh] pointer-events-none"
        style={{
          backgroundImage: `url(${mountainBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center -100px',
          zIndex: 1,
        }}
      />

      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative h-screen overflow-hidden" style={{ zIndex: 2 }}>


        {/* LAYER 4: Front Branches */}
        <div
          ref={frontBranchesRef}
          className="absolute inset-0 w-full h-[130%]"
          style={{
            backgroundImage: `url(${frontBranches})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center -100px',
            zIndex: 0,
          }}
        />

        {/* LAYER 3: Logo */}
        <div
          ref={logoRef}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${logoImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '250px auto',
            backgroundPosition: 'center 250px',
            zIndex: 3,
          }}
        />



        {/* Floating Sakura Petals */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Cg fill='rgba(255,223,236,0.15)'%3E%3Cpath d='M80 120c-4.6-2-9.8-2.6-14.7-1.5-4.9 1-9.3 3.5-12.6 7-6.7 7-8.4 17.3-4.4 26 4 8.8 12.8 14.4 22.3 14.4 3.5 0 7-0.7 10.2-2.2 6.6-2.9 11.6-8.5 13.8-15.4 2.2-6.9 1.1-14.3-2.9-20.2-4-5.9-10.2-9.8-17.1-11.2 1.8 1 3.4 2.2 4.8 3.7 5.6 5.9 6.9 14.8 3.2 22.1-3.7 7.3-11.5 11.4-19.6 10.3-8.1-1.1-14.7-7-16.6-14.8-1.9-7.9 1.5-16 8.4-20.2 6.6-4 15-3.5 21.2 1.1 1.5 1.1 2.8 2.5 3.9 4z'/%3E%3Cpath d='M200 60c4.6 2.1 9.8 2.6 14.8 1.5 5-1.1 9.4-3.6 12.7-7.2 6.6-7.2 8.2-17.5 4-26.2-4.1-8.7-13-14.1-22.5-14-3.5 0-7 0.7-10.3 2.2-6.5 3-11.4 8.7-13.5 15.6-2.1 7-0.9 14.3 3.2 20.1 4.1 5.8 10.3 9.6 17.2 11-1.8-1-3.4-2.3-4.7-3.8-5.5-6-6.6-15-2.8-22.2 3.8-7.2 11.7-11.2 19.8-10 8.1 1.2 14.6 7.2 16.4 15 1.8 7.9-1.8 15.9-8.7 20-6.7 3.9-15.1 3.3-21.1-1.4-1.5-1.2-2.7-2.6-3.7-4.1z'/%3E%3Cpath d='M660 180c-0.9-5 0-10.1 2.6-14.6 2.6-4.5 6.7-7.8 11.5-9.4 9.6-3.3 20.1 0.4 26.4 9.3 6.3 8.9 6.3 20.8 0 29.7-1.7 2.3-3.6 4.4-5.9 6-6 4.2-13.6 5.4-20.7 3.4-7.1-2-12.9-7.3-15.9-14.3-3-7-2.7-14.9 0.8-21.6-0.5 2.1-0.8 4.3-0.8 6.5 0 8.1 3.9 15.6 10.5 20.2 6.6 4.6 15 5.3 22.3 1.9 7.3-3.5 12.1-10.5 12.7-18.6 0.6-8.1-3.3-15.8-10.1-20.3-6.5-4.3-14.9-4.8-21.7-1.3-1.7 0.9-3.2 2-4.6 3.2z'/%3E%3Cpath d='M580 620c0.9 5 0 10.1-2.6 14.6-2.6 4.5-6.7 7.8-11.5 9.4-9.6 3.3-20.1-0.4-26.4-9.3-6.3-8.9-6.3-20.8 0-29.7 1.7-2.3 3.6-4.4 5.9-6 6-4.2 13.6-5.4 20.7-3.4 7.1 2 12.9 7.3 15.9 14.3 3 7 2.7 14.9-0.8 21.6 0.5-2.1 0.8-4.3 0.8-6.5 0-8.1-3.9-15.6-10.5-20.2-6.6-4.6-15-5.3-22.3-1.9-7.3 3.5-12.1 10.5-12.7 18.6-0.6 8.1 3.3 15.8 10.1 20.3 6.5 4.3 14.9 4.8 21.7 1.3 1.7-0.9 3.2-2 4.6-3.2z'/%3E%3Cpath d='M360 480c-2-4.6-2.6-9.8-1.5-14.7 1-4.9 3.5-9.3 7-12.6 7-6.7 17.3-8.4 26-4.4 8.8 4 14.4 12.8 14.4 22.3 0 3.5-0.7 7-2.2 10.2-2.9 6.6-8.5 11.6-15.4 13.8-6.9 2.2-14.3 1.1-20.2-2.9-5.9-4-9.8-10.2-11.2-17.1 1 1.8 2.2 3.4 3.7 4.8 5.9 5.6 14.8 6.9 22.1 3.2 7.3-3.7 11.4-11.5 10.3-19.6-1.1-8.1-7-14.7-14.8-16.6-7.9-1.9-16 1.5-20.2 8.4-4 6.6-3.5 15 1.1 21.2 1.1 1.5 2.5 2.8 4 3.9z'/%3E%3Cpath d='M400 120c2 4.6 2.6 9.8 1.5 14.7-1 4.9-3.5 9.3-7 12.6-7 6.7-17.3 8.4-26 4.4-8.8-4-14.4-12.8-14.4-22.3 0-3.5 0.7-7 2.2-10.2 2.9-6.6 8.5-11.6 15.4-13.8 6.9-2.2 14.3-1.1 20.2 2.9 5.9 4 9.8 10.2 11.2 17.1-1-1.8-2.2-3.4-3.7-4.8-5.9-5.6-14.8-6.9-22.1-3.2-7.3 3.7-11.4 11.5-10.3 19.6 1.1 8.1 7 14.7 14.8 16.6 7.9 1.9 16-1.5 20.2-8.4 4-6.6 3.5-15-1.1-21.2-1.1-1.5-2.5-2.8-4-3.9z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '800px',
            backgroundRepeat: 'repeat',
            zIndex: 1,
            opacity: 0.6,
          }}
        />

        {/* Hero Text */}
        {/* <div
          ref={heroTextRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-20"
        >
          <div className="mt-[350px] text-center px-4">
            <h1 className="text-4xl md:text-6xl font-header font-bold text-white drop-shadow-lg mb-2">
              Mark Acedo
            </h1>
            <div className="text-xl md:text-3xl font-primary font-bold">
              <TypingEffect words={["Fullstack Developer", "Illustrator", "Creative Coder", "Problem Solver"]} />
            </div>
          </div>
        </div> */}

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-4xl text-white animate-bounce">
          <IoIosArrowDown />
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section ref={aboutRef} id="about" className="relative" style={{ zIndex: 3 }}>
        <About />
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section ref={projectsRef} id="projects" className="relative py-16" style={{ zIndex: 3 }}>
        <Projects />
      </section>

      {/* ===== FOOTER ===== */}
      <section ref={footerRef} id="footer">
        <Footer />
      </section>

      {/* Back to Top Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={scrollToTop}
          className="bg-[#1f0739]/80 text-white text-xl py-3 px-4 border border-white/20 rounded-full transition duration-300 hover:bg-yellow-500 hover:text-black backdrop-blur-md shadow-xl"
        >
        </button>
      </div>
    </div>
  );
}

export default ParallaxComponent;
