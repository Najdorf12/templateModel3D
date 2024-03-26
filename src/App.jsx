import Interface from "./components/Interface";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { useEffect } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import Works from "./components/Works";
const App = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis root>
      <main className="overflow-x-hidden w-full relative ">
        <div className="h-screen overflow-x-hidden w-screen fixed top-0 right-0 left-0 z-10 lg:block">
          <Canvas shadows camera={{ position: [35, 9, 80], fov: 4 }}>
            <Experience />
          </Canvas>
        </div>

        <section className="first-section bg-zinc-950 w-full h-screen text-gray-500 font-bold text-xl flex  flex-col items-center justify-center relative">
          <h1>HOME</h1>
          <p>asdasdsfdgf</p>
        </section>
        <section className=" second-section bg-zinc-950 w-full h-screen self-end flex items-center justify-start relative">
          <h1 className="about w-[40vw] h-full bg-gray-200"></h1>
        </section>
        <section className="third-section bg-zinc-950 w-full h-screen flex items-center justify-end relative"></section>
       
        <section id="horizontal">
        <div class="container">
            <div class="horizontal__content">
                <div class="horizontal__item">
                    <div class="horizontal__num">1</div>
                </div>
                <div class="horizontal__item">
                    <div class="horizontal__num">2</div>
                </div>
                <div class="horizontal__item">
                    <div class="horizontal__num">3</div>
                </div>
                <div class="horizontal__item">
                    <div class="horizontal__num">4</div>
                </div>
                <div class="horizontal__item">
                    <div class="horizontal__num">5</div>
                </div>
                <div class="horizontal__item">
                    <div class="horizontal__num">5</div>
                </div>
                <div class="horizontal__item">
                    <div class="horizontal__num ">5</div>
                </div>
            </div>
        </div>
    </section>
     
<section className="contact w-full h-screen bg-red-600">

</section>
    
      </main>
    </ReactLenis>
  );
};

export default App;
