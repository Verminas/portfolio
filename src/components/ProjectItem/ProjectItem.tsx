"use client"

import Wrapper from "@/src/components/Wrapper/Wrapper";
import Image, { StaticImageData } from "next/image";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import styles from "./ProjectItem.module.sass";
import ExternalLink from "@/src/components/ExternalLink/ExternalLink";
import { useTranslations } from "next-intl";

import example from "@/public/example.png";
import example2 from "@/public/example2.png";
import { useTheme } from "next-themes";

type Props = {
  id: string;
  title: string;
  description: string;
  techStack: string;
  demoUrl: string;
  codeUrl: string;
};

type ProjectImage = {
  [key: string]: StaticImageData;
};

const projectsImage: ProjectImage = {
  "1": example,
  "2": example2,
};

export const ProjectItem = ({ codeUrl, demoUrl, description, techStack, title, id }: Props) => {
  const t = useTranslations("Projects");
  const { theme = 'light' } = useTheme()

  return (
    <Wrapper direction={"column"} className={`${styles.wrapper} ${styles[theme]}`} suppressHydrationWarning >
      <Image src={projectsImage[id]} alt={"project image example"} className={styles.image} />
      <Wrapper direction={"column"} className={`${styles.wrapperInfo} ${styles[theme]}`} suppressHydrationWarning>
        <h4 className={`${styles.title} ${styles[theme]}`} suppressHydrationWarning>{title}</h4>
        <p className={styles.description}>{description}</p>
        <p className={styles.techStack}>{`${t("techStack")}: ${techStack}`}</p>
        <Wrapper justifyContent={"space-between"} alignItems={"center"}>
          <ExternalLink href={demoUrl} title={t("livePreview")} className={`${styles.link} ${styles[theme]}`} suppressHydrationWarning>
            <FaLink />
            {t("livePreview")}
          </ExternalLink>
          <ExternalLink href={codeUrl} title={t("viewCode")} className={`${styles.link} ${styles[theme]}`} suppressHydrationWarning>
            <FaGithub />
            {t("viewCode")}
          </ExternalLink>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
