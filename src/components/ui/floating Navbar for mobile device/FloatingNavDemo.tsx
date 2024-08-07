"use client";
import React from "react";
import { FloatingNav } from "./floating-navbar";
import { IconReportMoney, IconHours24, IconLibrary, IconBrandCarbon } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Financial Solutions",
      link: "/financial",
      icon: <IconReportMoney className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Support Schemes",
      link: "https://tribal.cg.gov.in/services",
      icon: <IconHours24 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Literacy Program",
      link: "http://tsplearningprog.s3-website.ap-south-1.amazonaws.com",
      icon: (
        <IconLibrary className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Carbon Credit",
      link: "http://tspsuraj.s3-website.ap-south-1.amazonaws.com",
      icon: (
        <IconBrandCarbon className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

