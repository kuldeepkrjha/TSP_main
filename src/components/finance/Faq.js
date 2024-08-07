import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../ui/FAQ_Bento-Grid/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const Faq = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-300 flex flex-col">
    
    <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "circIn",
        }} className=' flex flex-col place-content-center text-center items-center'>
     <h1 className=" p-10 mb-0 flex font-black text-5xl text-white text-center">Queries And FAQ</h1>
     <p className="font-bold text-sm md:text-lg text-center text-slate-300 text-balance mt-1 mb-5">Recent government initiatives have significantly uplifted the tribal community, transforming lives through improved healthcare, quality education, and sustainable livelihood opportunities.</p>
     </motion.div>

      <BentoGrid className="max-w-4xl mx-auto mb-5">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </div>
  );
};

export default Faq;

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "What is the eligibility criteria for financial support?",
    description: "Learn about the requirements to qualify for financial assistance under the tribal development project.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "How can I apply for the financial support scheme?",
    description: "Get step-by-step guidance on the application process for accessing financial aid.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "What types of projects are eligible for funding?",
    description: "Discover the kinds of tribal development projects that can receive financial support.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "What is the loan repayment process and terms?",
    description: "Understand the repayment terms, interest rates, and timelines for loans under this scheme.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Are there any subsidies or grants available?",
    description: "Find out if there are any non-repayable grants or subsidies offered for tribal development initiatives.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "How does the financial support program benefit tribal communities?",
    description: "Explore the impact and benefits of the financial assistance program on the economic development of tribal communities.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Where can I find additional resources and support?",
    description: "Access additional information and resources for successful application and project implementation.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];


