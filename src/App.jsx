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

        <section className="first-section  bg-zinc-900 w-full h-screen flex gap-2 flex-col justify-center items-start relative">
          <article className=" ml-64 flex flex-col justify-center items-center z-10">
            <h1 className="relative text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-red to-neutral-800  font-title self-start ml-6">
              Hi,Im
            </h1>
            <h1 className="relative text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-title font-bold ml-36">
              AGUSTIN
            </h1>
            <h1 className="relative text-lg  md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-title font-bold self-start">
              MORRO
            </h1>
            <p className="text-base text-gray-400 font-text  max-w-md mt-8 self-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum, accusantium ipsa? Quos fugiat culpa <br />
              numquam, harum quidem!
            </p>
            <button className="mt-8 bg-gradient-to-tl from-red text-gray-300 px-2 py-1 flex justify-center items-center w-36 font-semibold text-base rounded-md self-start">
              Portfolio
            </button>
          </article>

          <div className="flex flex-col items-center text-4xl gap-4 mt-5 ml-10 mb-5 absolute left-0 bottom-0 text-gray-400">
            <i className="bx bxl-github"></i>
            <i className="bx bxl-linkedin"></i>
            <div className="w-1 h-28 bg-gray-400"></div>
          </div>
        </section>

        <section className="second-section bg-zinc-900 w-full h-screen self-end flex items-start justify-end relative pt-44 text-center">
          <article className="flex flex-col gap-8 w-1/2 mr-28 relative">
            <h3 className="font-title font-bold text-6xl text-gray-200 ">
              <span className=" pl-2 bg-clip-text text-transparent bg-gradient-to-b from-red to-neutral-600">
                A
              </span>
              BOUT ME
            </h3>
            <p className="font-text font-normal text-md text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae voluptates explicabo temporibus fuga amet provident
              mollitia? Quos error voluptatibus <br />
              voluptatem reiciendis? Aspernatur voluptas obcaecati omnis
              dolorum,
              <br />
              reprehenderit impedit repudiandae. Aperiam. <br />
              Reprehenderit impedit repudiandae.
            </p>
          </article>
        </section>

        <section className="third-section bg-zinc-900 w-full h-screen flex items-start justify-start relative">
          <article className="w-full relative flex justify-center items-center -mt-28">
            <ul className="z-10 text-zinc-700 text-9xl flex mt-20 gap-8 justify-center items-center max-w-lg ">
              <li>
                <i class="bx bxl-javascript"></i>
              </li>
              <li>
                <i class="bx bxl-react"></i>
              </li>
              <li>
                <i class="bx bxl-html5"></i>
              </li>
              <li>
                <i class="bx bxl-css3"></i>
              </li>
              <li>
                <i class="bx bxl-nodejs"></i>
              </li>
              <li>
                <i class="bx bxl-typescript"></i>
              </li>
              <li></li>
            </ul>
          </article>
        </section>
      </main>
      <Works />
      <Contact />
    </ReactLenis>
  );
};

export default App;
