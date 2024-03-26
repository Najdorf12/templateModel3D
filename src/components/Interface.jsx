import { motion } from "framer-motion";

const Interface = () => {
  return (
    <>
      <motion.section
        className="first-section h-screen w-full p-8 mx-auto flex flex-col justify-center items-center"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.6,
          },
        }}
      >
        Header
      </motion.section>
      <AboutSection />
      <WorksSection />
    </>
  );
};

const AboutSection = () => {
  return (
    <>
      <motion.section
        className="second-section h-screen w-full p-8 mx-auto flex flex-col justify-center items-center"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.6,
          },
        }}
      >
       About SECTION
      </motion.section>
    </>
  );
};


const WorksSection = () => {
  return (
    <>
      <motion.section
        className="third-section h-screen w-full p-8 mx-auto flex flex-col justify-center items-center"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.6,
          },
        }}
      >
       WORKS SECTION
      </motion.section>
    </>
  );
};

export default Interface;
