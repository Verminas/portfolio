"use client"

import { AnimationProps, motion } from "framer-motion";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren &  AnimationProps & {
  index?: number
  className?: string
}
export const MotionItem = (props: Props) => {
  const defaultInitial = { opacity: 0, x: -100 }
  const defaultAnimate = { opacity: 1, x: 0, }
  const defaultExit = { opacity: 0, x: 100 }

  const {children, index = 1, initial = defaultInitial, animate = defaultAnimate, exit = defaultExit, className = ''} = props

  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      layout
      transition={{ duration: 0.9, delay: index / 2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
