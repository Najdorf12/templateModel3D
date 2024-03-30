import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-90vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1000 top",
          scrub: 3,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer overflow-hidden bg-zinc-900">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-section-inner h-screen w-[150vw] relative flex"
        >
          <div className="scroll-section  h-screen w-[150vw] flex gap-14 justify-end items-center lg:pl-32 text-xl">
            <h3 className="w-64 h-96 bg-gray-200 text-8xl rounded-md "></h3>
            <h3 className="w-64 h-96 bg-gray-200 text-8xl  rounded-md"></h3>
            <h3 className="w-64 h-96 bg-gray-200 text-8xl  rounded-md"></h3>
            <h3 className="w-64 h-96 bg-gray-200 text-8xl  rounded-md "></h3>
            <h3 className="w-64 h-96 bg-gray-200 text-8xl  rounded-md"></h3>
            <h3 className="w-64 h-96 bg-gray-200 text-8xl  rounded-md"></h3>
          </div>
          {/* <div className="scroll-section bg-amber-700 h-screen w-full flex gap-5 justify-center items-center">
            <h3 className ="w-60 h-80 bg-violet-900" >Section 2</h3>
            <h3 className ="w-60 h-80 bg-violet-900">Section 1</h3>
            <h3 className ="w-60 h-80 bg-violet-900">Section 1</h3>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Works;
