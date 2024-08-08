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
    description: "To qualify for financial assistance under the tribal development project, applicants must belong to a recognized tribal community, have a project proposal aimed at community development and many more.",
  },
  {
    title: "How can I apply for the financial support scheme?",
    description: "To apply for financial support, you need to submit an application form along with necessary documents like proof of tribal affiliation, project proposal, and income certificates. ",
  },
  {
    title: "What types of projects are eligible for funding?",
    description: "Eligible projects typically include those that focus on community development, such as educational programs, healthcare initiatives, infrastructure improvements, and economic development activities. ",
  },
  {
    title: "How does the financial support program benefit tribal communities?",
    description: "The financial assistance program provides crucial support for the economic development of tribal communities by funding projects that create jobs, improve access to education and healthcare, and enhance infrastructure. It also empowers communities to preserve their cultural heritage and promotes self-reliance through sustainable development initiatives. The overall impact is an improved quality of life and increased opportunities for community members.",
  },
  {
    title: "Are there any subsidies or grants available?",
    description: "Yes, the program offers various subsidies and grants that do not require repayment. These are available for specific types of projects such as renewable energy installations, educational scholarships, and small business development. ",
  },
  {
    title: "What is the loan repayment process and terms?",
    description: "The loan repayment process involves paying back the borrowed amount according to the terms set by the program. ",
  },
  {
    title: "Where can I find additional resources and support?",
    description: "Additional resources and support can be found through the program's official website, where you can access application guidelines, success stories, and contact information for support centers. Local tribal councils and development offices also provide assistance, including workshops, training sessions, and one-on-one consultations to help applicants successfully navigate the application process and implement their projects.",
  },
];



