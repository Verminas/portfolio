"use client"

import { PropsWithChildren } from "react";
import styles from './MainText.module.sass'
import { useTheme } from "next-themes";

type Props = PropsWithChildren & {
  className?: string,
  as?: 'h2' | 'h3' | 'h4' | 'p'
}
export const MainText = ({className, children, as}: Props) => {
  const { theme = 'light' } = useTheme()
  const textClassName = styles.text + ' ' + styles[theme] + ' ' + (className ?? '');
  const Component = as || 'p'

  return (
    <Component className={textClassName} suppressHydrationWarning>{children}</Component>
  );
};