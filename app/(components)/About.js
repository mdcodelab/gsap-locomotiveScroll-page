"use client";
import React, { useRef, useLayoutEffect } from 'react';
import SectionHeader from './SectionHeader';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function About() {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const anim = gsap.to(
      ref.current,
      {
        y: 0,
        opacity: 1,
        ease: "power2",
        color: "black",
        duration: 10,
        scrollTrigger: {
          trigger: ref.current, // Declanșează animația când elementul intră în viewport
          scrub: true, // Animația este lină și sincronizată cu scroll-ul
          start: "top bottom", // Start la 85% din viewport
          end: "top top", // Final la 50% din viewport
        },
      }
    );

    return () => {
      anim.kill(); // Curățare la demontarea componentei
    };
  }, []);

  return (
    <section className="about-section" data-scroll-section>
      <SectionHeader title="About" />
      <p className="headline" ref={ref}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et 
        voluptatibus eius qui explicabo, aperiam facere culpa sint eos 
        ratione quasi at accusantium, omnis, tempore delectus incidunt 
        quos veritatis perferendis ad consequatur veniam. Ratione deleniti 
        dignissimos soluta, quidem dolores, tempora ipsa qui nihil facere
        voluptatem id. Aliquid ab dicta architecto laboriosam.
      </p>
    </section>
  );
}

export default About;
