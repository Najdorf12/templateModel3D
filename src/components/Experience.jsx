import {
  OrbitControls,
  ScrollControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Roman from "./Roman";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense } from "react";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <OrbitControls 
         enablePan={false}
				enableRotate={false}
				enableZoom={false} />
      <group position={[6, -2.5, 6]}>
        <Roman scale={1.1} />
        <Suspense />
      </group>
    </>
  );
};

export default Experience;
