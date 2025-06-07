"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Img1 from "../../Public/assets/work/thumb1.png";
import Img2 from "../../Public/assets/work/thumb2.png";
import Img3 from "../../Public/assets/work/thumb3.png";

// FadeIn animation variant
const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  },
});

const projects = [
  {
    img: Img1,
    alt: "Project 1",
    title: "FurniShop",
    role: "Front End Developer",
    languages: "HTML, CSS, JavaScript",
  },
  {
    img: Img2,
    alt: "Project 2",
    title: "Home Interior Design",
    role: "Front End Developer",
    languages: "React, Tailwind CSS",
  },
  {
    img: Img3,
    alt: "Project 3",
    title: "Alina Lee",
    role: "Front End Developer",
    languages: "Next.js, TypeScript",
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-b from-emerald-900 to-teal-800 overflow-x-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center md:text-left mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white tracking-tight">
            My Latest <span className="text-lime-400">Work</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-md mx-auto md:mx-0 text-emerald-200 leading-relaxed">
            Discover my latest projects showcasing innovative designs and seamless animations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-teal-800">
              View All Projects
            </button>
            <a
              href="https://github.com/j1hed"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-teal-700 hover:bg-teal-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-teal-800"
            >
              My GitHub
            </a>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-teal-900 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 z-10 transition-all duration-500"></div>
              {/* Image */}
              <Image
                className="relative w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                src={project.img}
                alt={project.alt}
                width={600}
                height={400}
                priority
              />
              {/* Project Info */}
              <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                <span className="block text-sm sm:text-base font-medium text-lime-300">
                  {project.role}
                </span>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
                <span className="mt-1 block text-xs sm:text-sm text-emerald-300">
                  {project.languages}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;