import React from "react";
import { motion } from "framer-motion";

import { CardStack } from "../ui/card-stack/card-stack";

const SuccessStories = () => {
  return (
    <div className="bg-gradient-to-b space-y-16 from-gray-900 to-gray-300 md:h-[48rem] h-[46rem] flex flex-col items-center">
    <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeInOut",
        }}>
      <h1 className=" mb-4 md:mb-3 font-black text-5xl text-white text-center mt-4 md:mt-10 ">Success Stories</h1>
      <p className="font-bold text-sm md:text-lg text-center text-slate-300 text-balance mt-4">Recent government initiatives have significantly uplifted the tribal community, transforming lives through improved healthcare, quality education, and sustainable livelihood opportunities. In Nandagaon, access to clean water and agricultural training has boosted the local economy and fostered self-reliance among residents. These success stories highlight the positive impact of government support, paving the way for a brighter future for all.</p>
      </motion.div>

      <div className=" space-x-2 md:space-x-2 lg:space-x-20 w-full flex items-center place-content-center ">
      {/*space-x-2 md:space-x-2 lg:space-x-3 ml-0 md:ml-10 lg:ml-32 */}
        <CardStack items={CARDS1} />
        <CardStack items={CARDS2} />
      </div>
    </div>
  );
};

export default SuccessStories;

const CARDS1 = [
  {
    id: 0,
    readMore: "Read More",
    content: (
      <p>
        Using goats to fight poverty in tribal Maharashtra, how a researcher's PhD transformed into a social enterprise
      </p>
    ),
    src: "/assets/image/slide3.png",
    alt: "goat",
    href: "https://yourstory.com/2017/10/nilratan-shende-eagl"
  },
  {
    id: 1,
    readMore: "Read More",
    content: (
      <p>
        अपनी दुकान - Modernization of Haat Bazaar and Small Godowns under MSP for MFP scheme.
      </p>
    ),
    href: "https://trifed.tribal.gov.in/node/969",
    src: "/assets/image/slide2.png",
    alt: "slide2"
  },
  {
    id: 2,
    readMore: "Read More",
    content: (
      <p>
        3,000 women in rural Telangana generated a 15.5cr turnover last year. Here's how.
      </p>
    ),
    href: "https://yourstory.com/2017/08/kodangal-telangana-farmer-producer-company",
    src: "/assets/image/slide1.png",
    alt:"slide1"
  },
];

const CARDS2 = [
  {
    id: 0,
    readMore: "Read More",
    content: (
      <p>
        Our financial support and training programs helped him upgrade his equipment and expand his market reach internationally.
      </p>
    ),
    href: "https://www.myscheme.gov.in/schemes/vtcta",
    src: "/assets/image/slide2",
    alt: "slide"
  },
  {
    id: 1,
    readMore: "Read More",
    content: (
      <p>
        Using goats to fight poverty in tribal Maharashtra, how a researcher's PhD transformed into a social enterprise
      </p>
    ),
    href: "https://yourstory.com/2017/10/nilratan-shende-eagl",
    src: "/assets/image/slide1",
    alt: "slide"
  },
  {
    id: 2,
    readMore: "Read More",
    content: (
      <p>
        अपनी दुकान - Modernization of Haat Bazaar and Small Godowns under MSP for MFP scheme.
      </p>
    ),
    href: "https://trifed.tribal.gov.in/node/969",
    src: "/assets/image/slide2",
    alt: "slide"
  },
];
