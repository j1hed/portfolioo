"use client"; // Ensure this file is client-side rendered
import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Year of experience",
  },
  {
    num: 2,
    text: "Projects completed",
  },
  {
    num: 3,
    text: "Technologies mastered",
  },
  {
    num: 107,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0" >
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none "> {/* Using flex layout */}
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 gap-4 items-center justify-center xl:justify-start" // Fixed `felx-1` typo and added flex direction
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                }`}>
                  {item.text} {/* Corrected from item.index to item.text */}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
