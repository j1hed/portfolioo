import { animate, motion } from "framer-motion";
import { delay } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: "0%",
  },
};

const reversedIndex = (index) => {
  const totalSteps = 4;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reversedIndex(index) * 0.1,
          }}
          className="h-full w-full bg-purple-200 relative"
        />
      ))}
    </>
  );
}

export default Stairs;
