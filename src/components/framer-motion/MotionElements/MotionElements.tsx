"use client"

import { PropsWithChildren } from "react";
import { AnimatePresence } from "framer-motion";

type Props = PropsWithChildren

export const MotionElements = ({children}: Props) => {
  return (
    <AnimatePresence>
      {children}
    </AnimatePresence>
  );
};