"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}  // Starts invisible
        animate={{ opacity: 1 }}  // Fades in
        exit={{ opacity: 0 }}  // Fades out
        transition={{ duration: 0.55, ease: [0.42, 0, 0.42, 1] }}
      >
        {/* Content to render after the transition */}
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
