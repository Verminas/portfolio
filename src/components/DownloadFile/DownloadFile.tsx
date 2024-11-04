"use client"

import { Button } from "@/src/components/Button/Button";
import { PropsWithChildren } from "react";
import styles from './DownloadFile.module.sass'

type Props = PropsWithChildren & {
  className?: string
}

export const DownloadFile = ({className, children}: Props) => {
  const buttonClassName = styles.button + ' ' + (className ?? '')

  const onDownloadFile = () => {
    const pdfUrl = "/files/cv.pdf"
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "frontend-veremeeva-cv.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <Button className={buttonClassName} onClick={onDownloadFile}>{children}</Button>
  );
};