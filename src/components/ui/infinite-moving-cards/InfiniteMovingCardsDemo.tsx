"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { InfiniteMovingCards } from "../infinite-moving-cards/infinite-moving-cards";

type InfiniteMovingCardsDemoProps = {
  testimonials: {
    name: string;
    quote: string;
    title: string;
    url: string;
  }[];
}

export function InfiniteMovingCardsDemo({testimonials} : InfiniteMovingCardsDemoProps) {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

