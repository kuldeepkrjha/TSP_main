"use client";
import React, { useEffect, useRef, useState, ReactNode  } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    
    description: ReactNode;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[35rem] overflow-y-auto flex justify-center relative space-x-24 rounded-md p-10"
      ref={ref}
    >
      <div className="relative mt-6 place-items-center text-center place-content-center justify-between ">
        <div className=" max-w-lg text-center place-content-center justify-between items-center sm:max-w-2xl">
          {content.map((item, index) => (
            <div key={index} className="my-5">
              {/* <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2> */}
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.9,
                  // opacity of description text
                }}
                className={`text-kg text-slate-300 max-w-lg sm:max-w-2xl mt-5 sm:text-left items-center text-center ${
                  activeCard === index ? 'animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-lg' : ''
                }`}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div></div>
      <div
        // style={{ background: backgroundGradient }}
        // className={cn(
        //   "hidden lg:block h-80 w-[20rem] rounded-md bg-white sticky top-20 overflow-hidden object-cover",
        //   contentClassName
        // )}
        className="hidden lg:block sticky top-0 bg-transparent overflow-hidden"
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
