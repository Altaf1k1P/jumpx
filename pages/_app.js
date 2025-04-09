import React, { useState , useEffect , useRef } from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global styles
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import PopupForm from "../components/Popup/PopupForm";

function MyApp({ Component, pageProps }) {
  const [showPopup, setShowPopup] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init();
  
    const container = containerRef.current;
    const particleCount = 50;
    const mouseParticleLimit = 20;
    const mouseParticles = [];
  
    // Static background particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      resetParticle(particle);
      container?.appendChild(particle);
      animateParticle(particle);
    }
  
    function resetParticle(p) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      p.style.left = `${x}%`;
      p.style.top = `${y}%`;
      p.style.opacity = "0";
      return { x, y };
    }
  
    function animateParticle(particle) {
      const pos = resetParticle(particle);
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
  
      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
  
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30;
        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;
  
        setTimeout(() => {
          animateParticle(particle);
        }, duration * 1000);
      }, delay * 1000);
    }
  
    // Throttle mousemove
    let lastTime = 0;
    const throttle = 50; // ms
  
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < throttle) return;
      lastTime = now;
  
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
  
      let particle;
      if (mouseParticles.length >= mouseParticleLimit) {
        particle = mouseParticles.shift(); // reuse
      } else {
        particle = document.createElement("div");
        particle.className = "particle";
        container?.appendChild(particle);
      }
  
      const size = Math.random() * 3 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = "0.6";
      particle.style.transition = "none";
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
  
      requestAnimationFrame(() => {
        particle.style.transition = "all 2s ease-out";
        particle.style.left = `${x + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${y + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = "0";
  
        setTimeout(() => {
          mouseParticles.push(particle); // reuse instead of remove
        }, 2000);
      });
    };
  
    document.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jumpx - React Next.js AI & IT Startup Template</title>
      </Head>

      <div className="gradient-background">
        <div className="grid-overlay"></div>
        <div className="noise-overlay"></div>
        <div className="particles-container" ref={containerRef}></div>
      </div>

      <Navbar onEnquireClick={() => setShowPopup(true)} />
          {/* Popup */}
          {showPopup && (
            
        <div
          className="popup-overlay"
        >
          <div
            className="popup-container"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the form
          >
            <PopupForm onClose={() => setShowPopup(false)}/>
          </div>
        </div>
      )}
      <Component {...pageProps}  />
      <Footer/>

      {/* Go Top Button */}
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
        
    </>
  );
}

export default MyApp;
