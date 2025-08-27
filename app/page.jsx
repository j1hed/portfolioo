"use client"; // Ensure this file is client-side rendered
import Photo from "../components/Photo"; // Import Photo component
import { Button } from "../components/ui/button"; // Import Button component
import { FiDownload } from "react-icons/fi"; // Import download icon
import Socials from "../components/Socials"; // Import Socials component
import Stats from "../components/Stats";
//import BookingSection from "@/components/BookingSection"
import { SplashCursor } from "@/components/SplashCursor";

//import { metadata } from "./layout";
export default function Home() {
  return (
    <section className="h-full">
      <SplashCursor />
      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-between xl:p-1 xl:pb-17">
        
        {/* Text Section */}
        <div className="text-center xl:text-left order-2 xl:order-none"> {/* Added horizontal padding */}
          <div className="text-lg sm:text-xl text-gray-400"> As a Student</div> {/* Adjusted text size */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-0 font-semibold"> {/* Responsive heading sizes */}
            Hello I&apos;m <br />
            <span className="text-accent">Jiheed Mechi</span>
          </h1>
          <p className="max-w-[550px] mb-2 text-white/80 text-base sm:text-lg md:text-xl"> {/* Responsive paragraph sizes */}
            I am adept at creating visually stunning webpages and have proficiency in numerous programming languages and technologies.
          </p>
          
          {/* Button and Socials Section */}
          <div className="flex flex-row items-center gap-8">
            <Button 
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
              <span>Download CV</span>
              <FiDownload className="text-xl transition-colors duration-100" />
            </Button>
            
            {/* Social Media Section */}
            <Socials 
              containerStyles="flex" 
              iconStyles="w-9 h-9 rounded-full flex justify-center items-center text-base text-white hover:bg-green-500 transition-colors duration-300"
            />
          </div>
        </div>

        {/* Photo Section */}
        <div className="order-1 xl:order-none mb-2 xl:mb-0"> {/* Order classes for layout */}
          <Photo/> {/* Placeholder for photo */}
        </div>
      </div>
      <Stats/>
    </section>
  );
}
