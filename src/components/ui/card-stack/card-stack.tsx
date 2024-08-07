import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  content: React.ReactNode;
  readMore: string;
  href: string;
  src: string;
  alt: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative w-[15rem] md:w-[20rem] lg:w-[30rem]">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute h-96 w-60 md:w-72 md:h-[28rem] lg:h-[28rem] lg:w-[30rem] rounded-3xl p-4 shadow-xl border border-y-3 border-solid border-slate-800 border-x-0 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between bg-gradient-to-b from-slate-700 via-slate-500 to-slate-300"
            style={{
              transformOrigin: "top center",
              transform: `translateY(${index * -CARD_OFFSET}px) scale(${1 - index * SCALE_FACTOR})`,
              zIndex: items.length - index,
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, // decrease z-index for the cards that are behind
            }}
          >
            {/* Background image with blur */}
            {/* <div
              className="absolute inset-0 rounded-3xl"
              style={{
                backgroundImage: `url(${card.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'blur(1px)', // Apply the blur effect here
                zIndex: -1, // Place behind card content
                opacity: 1, // Adjust opacity to control how visible the blur is
              }}
            /> */}
            <div className="relative z-10 flex flex-col space-y-3 items-center text-center text-balance">
              <img src={card.src} alt={card.alt} className="h-50 w-80 rounded-3xl mt-5 mb-4"/>
              <div>
              <div className=" text-white dark:text-neutral-200 font-bold text-sm lg:text-xl md:text-lg mb-3">
                {card.content}
              </div>
              <div>
                <a href={card.href}>
                  <p className="text-sky-600 hover:text-sky-400 hover:underline hover:font-black font-bold mt-4 dark:text-neutral-200">
                    {card.readMore}
                  </p>
                </a>
              </div>
              </div>
              
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
