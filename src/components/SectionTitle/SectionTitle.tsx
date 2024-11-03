"use client"

import { PropsWithChildren } from "react";
import styles from "./SectionTitle.module.sass";
import { useTheme } from "next-themes";

type Props = PropsWithChildren & {
  className?: string
}
export const SectionTitle = ({ children, className }: Props) => {
  const { theme = 'light' } = useTheme()
  const classsNames = styles.title + ' ' + styles[theme] + ' ' + (className ?? '')
  return <h3 className={classsNames} suppressHydrationWarning>{children}</h3>;
};
