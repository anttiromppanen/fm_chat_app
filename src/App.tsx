import { Variants, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import BackgroundShapes from "./components/BackgroundShapes";
import Phone from "./components/Phone/Phone";

const textSectionVariants: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 3, staggerChildren: 5 },
  },
};

const textSectionChildrenVariants: Variants = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5 },
  },
};

function App() {
  const textSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textSectionRef.current) {
        textSectionRef.current.style.display = "block";
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-dvh w-full flex-col items-center md:min-h-screen md:flex-row md:justify-center">
      <BackgroundShapes />
      <div className="flex flex-col items-center gap-x-32 py-16 md:flex-row md:justify-center md:px-10">
        <Phone />
        <motion.div
          ref={textSectionRef}
          variants={textSectionVariants}
          initial="initial"
          animate="animate"
          className="hidden px-6 text-center md:w-1/2 md:px-0 md:text-left"
        >
          <motion.h1
            variants={textSectionChildrenVariants}
            className="text-userMainHeadingColor mt-20 text-[40px] font-semibold tracking-wide"
          >
            Simple booking
          </motion.h1>
          <motion.p
            variants={textSectionChildrenVariants}
            className="text-userParagraphColor mt-6 max-w-[600px] text-base leading-7"
          >
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </motion.p>
        </motion.div>
      </div>
    </main>
  );
}

export default App;
