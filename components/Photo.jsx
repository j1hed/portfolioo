"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-8 xl:pb-8">
      <div className="w-full h-full relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
            }}
            className="w-[260px] h-[230px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
          >
            <Image
              src="./assets/photo.png"
              priority
              quality={100}
              fill
              alt="jihed"
              className="object-contain"
            />
          </motion.div>
          <motion.svg
            className="w-[260px] h-[260px] xl:w-[506px] xl:h-[506px]"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#00ff99"         // Corrected
              strokeWidth="6"          // Corrected
              strokeLinecap="round"    // Corrected
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
};
export default Photo;
