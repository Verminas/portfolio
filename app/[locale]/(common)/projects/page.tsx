import { useMessages, useTranslations } from "next-intl";
import Wrapper from "@/src/components/Wrapper/Wrapper";
import { SectionTitle } from "@/src/components/SectionTitle/SectionTitle";
import styles from './Projects.module.sass'
import { ProjectItem } from "@/src/components/ProjectItem/ProjectItem";
import { MotionItem } from "@/src/components/framer-motion/MotionElements/MotionItem";
import { MotionElements } from "@/src/components/framer-motion/MotionElements/MotionElements";

type ProjectItem = {
  id: string
  title: string
  description: string
  techStack: string
  demoUrl: string
  codeUrl: string
}

type DataProjects = {
  projects: ProjectItem[]
}

export default function Projects() {
  const t = useTranslations("Projects");
  const data = useMessages();
  const dataProjects = data.Projects as unknown as DataProjects

  const projectsValues = Object.values(dataProjects.projects || {}) as ProjectItem[];
  const projectsElements = projectsValues.map((item, index) => (
    <MotionItem  key={item.title + index} index={index} >
      <ProjectItem
        codeUrl={item.codeUrl}
        demoUrl={item.demoUrl}
        description={item.description}
        techStack={item.techStack}
        title={item.title}
        id={item.id}
      />
    </MotionItem>
  ));

  return (
    <Wrapper direction={"column"}>
      <Wrapper direction={"column"}>
        <SectionTitle>{t("sectionTitle")}</SectionTitle>
        <p>{t("text")}</p>
      </Wrapper>
      <Wrapper justifyContent={'space-evenly'} className={styles.projectsWrapper}>
        <MotionElements>
          {projectsElements}
        </MotionElements>
        </Wrapper>
    </Wrapper>
  );
}
