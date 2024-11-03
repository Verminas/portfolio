"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";
import { FrozenRouter } from "@/src/components/framer-motion/FrozenRouter";

type LayoutTransitionProps = {
  children: React.ReactNode;
  className?: React.ComponentProps<typeof motion.div>["className"];
  style?: React.ComponentProps<typeof motion.div>["style"];
  initial: React.ComponentProps<typeof motion.div>["initial"];
  animate: React.ComponentProps<typeof motion.div>["animate"];
  exit: React.ComponentProps<typeof motion.div>["exit"];
}

/**

 To solve the problem of using Framer Motion in Next.js App Router version 14 and higher.
 ** Problem and discussion: https://github.com/vercel/next.js/issues/49279
 ** Solution: https://www.imcorfitz.com/posts/adding-framer-motion-page-transitions-to-next-js-app-router
 */

export function LayoutTransition({
                                   children,
                                   className,
                                   style,
                                   initial,
                                   animate,
                                   exit,
                                 }: LayoutTransitionProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        className={className}
        style={style}
        key={segment}
        initial={initial}
        animate={animate}
        exit={exit}
      >
        <FrozenRouter>
          {children}
        </FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}