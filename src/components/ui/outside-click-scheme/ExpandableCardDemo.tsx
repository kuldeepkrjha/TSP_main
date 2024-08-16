"use client";
// import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  // priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className=" w-full h-60 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-slate-400 text-black hover:bg-slate-900 hover:text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-row justify-between items-center hover:bg-slate-700 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className=" h-14 w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-slate-300 hover:text-sky-600 hover:underline text-xs sm:text-base text-bold text-balance text-left"
                >
                  {card.title}
                </motion.h3>
                
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-xs sm:text-sm rounded-full font-bold bg-gray-300 hover:bg-slate-800 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
    src: "https://pmjdy.gov.in/mypics/pmjdylogo.png",
    ctaText: "Explore",
    ctaLink: "https://pmjdy.gov.in/scheme",
    content: () => {
      return (
        <p>
          Objective: Pradhan Mantri Jan-Dhan Yojana (PMJDY) is National Mission for Financial Inclusion to ensure access to financial services, namely, a basic savings & deposit accounts, remittance, credit, insurance, pension in an affordable manner. Under the scheme, a basic savings bank deposit (BSBD) account can be opened in any bank branch or Business Correspondent (Bank Mitra) outlet, by persons not having any other account.
        </p>
      );
    },
  },
  {
    title: "Deendayal Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM)",
    src: "/assets/image/DAY.png",
    ctaText: "Explore",
    ctaLink: "https://nrlm.gov.in/outerReportAction.do?methodName=showIndex#gsc.tab=0",
    content: () => {
      return (
        <p>
          Deendayal Antyodaya Yojana-National Rural Livelihood Mission (DAY-NRLM) is a flagship poverty alleviation program implemented by the Ministry of Rural Development, Government of India. It aims to reduce poverty by enabling the poor household to access gainful self-employment and skilled wage employment opportunities resulting in sustainable and diversified livelihood options for the poor. This is one of the world's largest initiatives to improve the livelihoods of the poor. The Mission seeks to achieve its objective through investing in four core components viz., (a) social mobilization and promotion and strengthening of self-managed and financially sustainable community institutions of the rural poor women; (b) financial inclusion; (c) sustainable livelihoods; and (d) social inclusion, social development and access to entitlements through convergence.
        </p>
      );
    },
  },

  {
    title: "Stand-Up India Scheme for financing",
    src: "https://www.standupmitra.in/Images/standuplogo.gif",
    ctaText: "Explore",
    ctaLink: "https://www.standupmitra.in/Home/SchemeGuidelines",
    content: () => {
      return (
        <p>
         The objective of the Stand-Up India scheme is to facilitate bank loans between 10 lakh and 1 Crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one woman borrower per bank branch for setting up a greenfield enterprise.
This enterprise may be in manufacturing, services, agri-allied activities or the trading sector In case of non-individual enterprises at least
51% of the shareholding and controlling stake should be held by either an SC/ST or Woman entrepreneur.
        </p>
      );
    },
  },
  {
    title: "Tribal Cooperative Marketing Development Federation of India (TRIFED)",
    src: "https://www.sarkarimirror.com/wp-content/uploads/2017/09/trifed.png",
    ctaText: "Explore",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          To empower tribal communities through enhanced income generation from their produce. TRIFED has initiated steps to foster VanDhan Micro enterprises through 50-100 State level Producer Companies. VanDhan Producer Companies aims at enhancing productivity, cost reduction, efficient aggregation, large scale processing for value addition, better by-product utilization and efficient marketing of the produce.
Details:
Marketing support for Minor Forest Produce (MFP) and tribal handicrafts.
Provides Minimum Support Price (MSP) for selected MFPs.
Training and capacity building programs for tribal artisans.
        </p>
      );
    },
  },
  {
    title: "Mudra Yojana (Micro Units Development & Refinance Agency Ltd.)",
    src: "https://www.mudra.org.in/images/logo.png",
    ctaText: "Explore",
    ctaLink: "https://www.mudra.org.in/",
    content: () => {
      return (
        <p>
          Pradhan Mantri MUDRA Yojana (PMMY) is a scheme launched by the Hon’ble Prime Minister on April 8, 2015 for providing loans up to 10 lakh to the non-corporate, non-farm small/micro enterprises. These loans are classified as MUDRA loans under PMMY. These loans are given by Commercial Banks, RRBs, Small Finance Banks, MFIs and NBFCs. The borrower can approach any of the lending institutions mentioned above or can apply online through this portal www.udyamimitra.in . Under the aegis of PMMY, MUDRA has created three products namely 'Shishu', 'Kishore' and 'Tarun' to signify the stage of growth / development and funding needs of the beneficiary micro unit / entrepreneur and also provide a reference point for the next phase of graduation / growth.
        </p>
      );
    },
  },
  {
    title: "National Scheduled Tribes Finance and Development Corporation (NSTFDC)",
    src: "https://dshelpingforever.com/wp-content/uploads/2022/03/Untitled-36.jpg",
    ctaText: "Explore",
    ctaLink: "https://nstfdc.tribal.gov.in/",
    content: () => {
      return (
        <p>
          The National Scheduled Tribes Finance and Development Corporation (NSTFDC) is an apex organisation set up in 2001 under the Ministry of Tribal Affairs, Government of India. Its primary aim is economic upliftment of the Scheduled Tribes by way of providing financial assistance for income generating/ sustainable livelihood activities.
The Corporation has been implementing its various schemes through State Channelizing Agencies, the Regional Rural Banks, PSU Banks (having partnership with NSTFDC) - including the likes of National Cooperative Development Corporation (NCDC), Stree Nidhi, NEDFi, NABKISAN etc. During the last two decades of its existence the Corporation has been able to reach tens of thousands of beneficiaries in the target group across the country.
        </p>
      );
    },
  },
];
