import React from "react"
import { motion } from "framer-motion"

export function AnimatedIcon({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      animate={{
        rotateY: [0, 15, -15, 15, 0],
        rotateX: [0, 10, -10, 10, 0],
        scale: [1, 1.1, 1.1, 1.1, 1],
        boxShadow: [
          "0 0 10px rgba(0, 255, 0, 0.5)",
          "0 0 20px rgba(0, 255, 0, 0.7)",
          "0 0 10px rgba(0, 255, 0, 0.5)",
          "0 0 20px rgba(0, 255, 0, 0.7)",
          "0 0 10px rgba(0, 255, 0, 0.5)",
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ display: "inline-block", perspective: 1000 }}
    >
      {children}
    </motion.div>
  )
}
