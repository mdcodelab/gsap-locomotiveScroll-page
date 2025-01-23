"use client";
import React, { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

function Header() {
  const ref_1 = useRef(null);
  const ref_2 = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(ref_1.current, {
        y: "+=30",
        duration: 0.3,
        opacity: 0
      })
        .from(ref_2.current, {
          opacity: 0,
          y: "+=30",
          delay: 0.3,
          stagger: 0.5,
        });
    });

    return () => ctx.revert(); // Cleanup pentru GSAP context
  }, []);

  return (
    <section className="header-container" data-scroll-section>
      <ul className="header-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id="header-text" style={{ position: "relative" }}>
        <span ref={ref_1}>Art</span> <span ref={ref_2}>Object</span>
      </h1>
    </section>
  );
}

export default Header;
