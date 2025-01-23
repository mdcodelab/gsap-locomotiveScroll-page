"use client";
import React, { useRef, useLayoutEffect, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Footer() {
  const element = useRef(null); 

  // useLayoutEffect(() => {
  //   // Creăm un context GSAP
  //   let ctx = gsap.context(() => {
  //     // Timeline pentru animație
  //     gsap.from(element.current, {
  //       y: -200, 
  //       duration: 5, 
  //       opacity: 0, 
  //     });
  //   });

  //   // Cleanup GSAP context la demontarea componentei
  //   return () => ctx.revert();
  // }, []);


useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false, 
  });
}, []);


  return (
    <section className="footer" data-scroll-section>
      <SectionHeader title="Made in" />
      <h1 className="location" id="location-text" data-aos="slide-up">
        Rio de Janeiro
      </h1>
    </section>
  );
}

export default Footer;
