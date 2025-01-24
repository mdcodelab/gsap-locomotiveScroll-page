
"use client";
import React from 'react';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


function page() {
  const slides = useRef([]);
  const notFirstSlides = useRef([]);
  const headings=useRef([]);

  const addToRefs = (el, array, isNotFirstChild=false) => {
    if(el && !array.current.includes(el)) {
      array.current.push(el);
    }
    if(isNotFirstChild && !array.current.includes(el)) {
      notFirstSlides.current.push(el);
    }
  }

  useLayoutEffect(()=> {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(notFirstSlides.current, {clipPath: "inset(0 0 0 0)"});
    gsap.set(headings.current, {opacity: 0});

    const tl=gsap.timeline({
      scrollTrigger: {
        trigger: '.section-slides',
        start: 'top top',
        end: '+=500%',
        scrub: true,
        pin: true
      }
    })

    notFirstSlides.current.forEach((slide, index)=> {
      tl.to(slide, {ease: "none", clipPath: "inset(0 0 100% 0)",
         stagger: 1, duration: 1})
    });

    headings.current.forEach((heading, index)=> {
      tl.to(heading, {opacity: 1, duration: 1, stagger: 1})
    });

    slides.current.forEach((slide, index)=> {
      gsap.set(slide, {
        zIndex: (i, target, targets) => targets.length - i
      })
    })
    
  }, [])
  return (
    <>
      <section className="section">
  <div>
    <h1>Reveal Sections on Scroll</h1>
    <p>GSAP & ScrollTrigger - <span>clip-path horizontal animation</span></p>
    <p>👇 Scroll down</p>
  </div>
</section>

<section className="section-slides">
  <div className="slides">
    <div className="slide" ref={(el)=> addToRefs(el, slides)}>
      <figure>
        <img width="1920" height="1280" src="https://assets.codepen.io/162656/gallery-edinburgh.jpg" alt="edinburgh" />
        <figcaption>
          <h2 className="heading" ref={(el)=> addToRefs(el, headings)}>Edinburgh</h2>
        </figcaption>
      </figure>
    </div>

    <div className="slide" ref={(el)=> {
      addToRefs(el, slides);
      if(el && el !==slides.current[0])
      {
        addToRefs(el, notFirstSlides, true);
      }
    }}>
      <figure>
        <img width="1920" height="1005" src="https://assets.codepen.io/162656/gallery-berlin.jpg" alt="berlin" />
        <figcaption>
          <h2 className="heading" ref={(el)=> addToRefs(el, headings)}>Berlin</h2>
        </figcaption>
      </figure>
    </div>

    <div className="slide" ref={(el)=> {
      addToRefs(el, slides);
      if(el && el !==slides.current[0])
      {
        addToRefs(el, notFirstSlides, true);
      }
    }}>
      <figure>
        <img width="1920" height="1282" src="https://assets.codepen.io/162656/gallery-havana.jpg" alt="havana" />
        <figcaption>
          <h2 className="heading" ref={(el)=> addToRefs(el, headings)}>Havana</h2>
        </figcaption>
      </figure>
    </div>

    <div className="slide" ref={(el)=> {
      addToRefs(el, slides);
      if(el && el !==slides.current[0])
      {
        addToRefs(el, notFirstSlides, true);
      }
    }}>
      <figure>
        <img width="1920" height="1279" src="https://assets.codepen.io/162656/gallery-london.jpg" alt="london" />
        <figcaption>
          <h2 className="heading" ref={(el)=> addToRefs(el, headings)}>London</h2>
        </figcaption>
      </figure>
    </div>

    <div className="slide" ref={(el)=> {
      addToRefs(el, slides);
      if(el && el !==slides.current[0])
      {
        addToRefs(el, notFirstSlides, true);
      }
    }}>
      <figure>
        <img width="1920" height="1439" src="https://assets.codepen.io/162656/gallery-athens.jpg" alt="athens" />
        <figcaption>
          <h2 className="heading" ref={(el)=> addToRefs(el, headings)}>Athens</h2>
        </figcaption>
      </figure>
    </div>

    <div className="slide" ref={(el)=> {
      addToRefs(el, slides);
      if(el && el !==slides.current[0])
      {
        addToRefs(el, notFirstSlides, true);
      }
    }}>
      <figure>
        <img width="1920" height="1281" src="https://assets.codepen.io/162656/gallery-vienna.jpg" alt="vienna" />
        <figcaption>
          <h2 className="heading" ref={(el)=> addToRefs(el, headings)}>Vienna</h2>
        </figcaption>
      </figure>
    </div>
  </div>
</section>
<section className="section">
  <h2>Thank you!</h2>
</section>
    </>
  )
}

export default page
