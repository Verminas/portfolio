import { useMessages, useTranslations } from "next-intl";
import Wrapper from "@/src/components/Wrapper/Wrapper";
import { SectionTitle } from "@/src/components/SectionTitle/SectionTitle";
import styles from './Projects.module.sass'
import { ProjectItem } from "@/src/components/ProjectItem/ProjectItem";

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
    <ProjectItem
      codeUrl={item.codeUrl}
      demoUrl={item.demoUrl}
      description={item.description}
      techStack={item.techStack}
      title={item.title}
      id={item.id}
      key={item.title + index}
    />
  ));

  return (
    <Wrapper direction={"column"}>
      <Wrapper direction={"column"}>
        <SectionTitle>{t("sectionTitle")}</SectionTitle>
        <p>{t("text")}</p>
      </Wrapper>
      <Wrapper justifyContent={'space-evenly'} className={styles.projectsWrapper}>{projectsElements}</Wrapper>
    </Wrapper>
  );
}
