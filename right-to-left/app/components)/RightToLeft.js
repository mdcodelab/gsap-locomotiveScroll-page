"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Home() {
  const notFirstSlides = useRef([]);
  const headings = useRef([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(notFirstSlides.current, { xPercent: 100 });
    gsap.set(headings.current, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-slides", // Elementul care declanșează animațiile
        start: "top top", 
        end: "+=500%", 
        scrub: true,
        pin: true // Animația sincronizată cu scroll-ul
      },
    });

    // Adaugă animațiile în timeline
    notFirstSlides.current.forEach((slide, index) => {
      tl.to(slide, { xPercent: 0, duration: 1, stagger: 1 }, index * 1); // Slide intră din dreapta
    });

    headings.current.forEach((heading, index) => {
      tl.to(heading,
        { opacity: 1, duration: 1, stagger: 1 },
        index * 1 // Delay sincronizat cu slide-ul
      );
    });
  }, []);

  return (
    <>
      <section className="section">
        <div>
          <h1>Reveal Sections on Scroll</h1>
          <p>GSAP & ScrollTrigger -{" "}<span>right-to-left horizontal animation</span></p>
          <p>👇 Scroll down</p>
        </div>
      </section>

      <section className="section-slides">
        <div className="slides">
          <div className="slide">
            <figure>
              <img width="1920" height="1280" src="/images/image-2.jpg" alt="lily"/>
              <figcaption><h2 className="heading" ref={(el) => el && headings.current.push(el)}>Liy</h2></figcaption>
            </figure>
          </div>

          <div className="slide" ref={(el) => {if (el && !notFirstSlides.current.includes(el)) {
    notFirstSlides.current.push(el);
  }
}}>
            <figure>
              <img width="1920" height="1005" src="/images/image-3.jpg" alt="rose"/>
              <figcaption><h2 className="heading" ref={(el) => el && headings.current.push(el)}>Rose</h2></figcaption>
            </figure>
          </div>

          <div className="slide" ref={(el) => {
  if (el && !notFirstSlides.current.includes(el)) {
    notFirstSlides.current.push(el);
  }
}}
          >
            <figure>
              <img width="1920" height="1005" src="/images/image-4.jpg" alt="rose"/>
              <figcaption><h2 className="heading" ref={(el) => el && headings.current.push(el)}>Rose</h2></figcaption>
            </figure>
          </div>
          {/* Adaugă restul slide-urilor aici, similar */}
        </div>
      </section>

      <section className="section">
        <h2>Thank you!</h2>
      </section>
    </>
  );
}

export default Home;
