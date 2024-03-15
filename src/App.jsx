import Interface from "./components/Interface";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import {ScrollControls, Scroll} from "@react-three/drei";
import ScrollManager from "./components/ScrollManager";
import { useState } from "react";

const App = () => {
const [section,setSection] = useState(0);

  return (
    <Canvas shadows camera={{ position: [30, 5, 80], fov: 5 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages={4} damping={.15}>
       <ScrollManager section={section} onSectionChange={setSection}/>
        <Experience />
        <Scroll html>
          <Interface />
        </Scroll>
      </ScrollControls>
    </Canvas>

  );
};

export default App;
