import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

function useLocoScroll(start) {
  useEffect(() => {
    if (!start) {
      const scrollEl = document.querySelector("#main-container");
      if (scrollEl) {  
        const locoScroll = new LocomotiveScroll({
          el: scrollEl,
          smooth: true,
          multiplier: 1,
          class: "is-reveal"
        });

        // Curăță instanța LocomotiveScroll la demontarea componentelor
        return () => locoScroll.destroy();
      }
    }
  }, [start]);  // Se actualizează doar atunci când preloader se schimbă
}

export default useLocoScroll;
