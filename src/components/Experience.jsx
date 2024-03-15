import { OrbitControls,ScrollControls,PerspectiveCamera } from "@react-three/drei";
import Roman from "./Roman"


const Experience = () => {
  return (
    <>
    <ambientLight intensity={.2}/>
      <OrbitControls enableZoom={false} />
    <group position={[5,-2.5,5]}>
        <Roman scale={1.1} />
    </group>
    </>
  );
};

export default Experience;
