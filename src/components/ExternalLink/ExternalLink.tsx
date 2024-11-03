"use client";

import { AnchorHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from "react";
import styles from "./ExternalLink.module.sass";
import { useTheme } from "next-themes";

type Props = PropsWithChildren &
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
    href: string;
    title?: string;
    className?: string;
  };

export default function ExternalLink({ href, title, children, className, ...prop }: Props) {
  const { theme = "light" } = useTheme();
  const linkClassName = styles.link + " " + styles[theme] + " " + (className ?? "");
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={linkClassName}
      {...prop}
      suppressHydrationWarning
    >
      {children}
    </a>
  );
}
