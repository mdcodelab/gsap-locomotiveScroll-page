import React from 'react';
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

function useLocoScroll(start) {
  useEffect(()=> {
    if(start) return;

    const scrollEl=document.querySelector("#main-container");
    const locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        class: "is-reveal"  //when the el gets in the viewport 
    })
  }, [start])
}

export default useLocoScroll
