import Interface from "./components/Interface";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Works from "./components/Works";
import Contact from "./components/Contact";

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

        <section className="first-section bg-zinc-900 w-full h-screen flex flex-col justify-center items-center relative pl-56">
          <h1 className="relative text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-neutral-600 font-sans font-bold">
            Hi,Im
          </h1>
          <h1 className="relative text-lg md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            AGUSTIN
          </h1>
          <h1 className="relative text-lg  md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            MORRO
          </h1>
          <p className="text-md text-gray-400  max-w-lg  mt-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatum, accusantium ipsa? Quos fugiat culpa laboriosam eaque
            tempora deleniti impedit suscipit numquam, harum quidem! Magnam nemo
            sint dignissimos consectetur eius eum.
          </p>
        </section>
        <section className=" second-section bg-zinc-900 w-full h-screen self-end flex items-center justify-start relative">
          <h1 className="about w-full h-full bg-zinc-900"></h1>
        </section>
        <section className="third-section bg-zinc-900 w-full h-screen flex items-center justify-end relative"></section>
      </main>
      <Works />
      <Contact />
    </ReactLenis>
  );
};

export default App;
