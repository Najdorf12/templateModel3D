import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";

const ScrollManager = (props) => {
  const { section, onSectionChange } = props;

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  useLayoutEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
       onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current; 
      return
    }
   
    const curSection = Math.floor(data.scroll.current * data.pages);
    console.log("current", curSection)
    
    if (data.scroll.current > lastScroll.current && data.scroll.current > 0 ) {
      onSectionChange(section + 1);
    }
    if (
      data.scroll.current < lastScroll.current) {
      onSectionChange(section - 1);
    }
   
    lastScroll.current = data.scroll.current;
  });

  return null;
};
export default ScrollManager;
