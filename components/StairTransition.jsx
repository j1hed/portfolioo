"use client";

import { usePathname } from "next/navigation";
import Stairs from "./Stairs"; // Correct single import
import { motion, AnimatePresence } from "motion/react";

const StairTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="h-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
        initial={{ opacity: 0 }}  // Fade-in effect
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}  // Fade-out effect
        transition={{ duration: 0.3 }}
      >
        {/* Stairs transition animation */}
        <Stairs />

        {/* This ensures the children content is visible after transition */}
        <div className="relative w-full h-full flex items-center justify-center">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;