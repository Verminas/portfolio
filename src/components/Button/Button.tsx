"use client"

import { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.sass";
import { useTheme } from "next-themes";

type Props<T extends ElementType> = {
  as?: T;
  children: ReactNode;
};

/**
 * React polymorphic components with TypeScript
 * @see {@link https://itnext.io/react-polymorphic-components-with-typescript-f7ce72ea7af2 Article about polymorphic components}
 */

export const Button = <T extends ElementType = "button">({
  className,
  children,
  as,
  ...props
}: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const { theme = 'light' } = useTheme()
  const Component = as || "button";
  const buttonClassName = styles.button + ' ' + styles[theme] + " " + (className ?? "");
  return (
    <Component className={buttonClassName} {...props} suppressHydrationWarning>
      {children}
    </Component>
  );
};
