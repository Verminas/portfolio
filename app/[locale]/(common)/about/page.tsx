import Wrapper from "@/src/components/Wrapper/Wrapper";
import { SectionTitle } from "@/src/components/SectionTitle/SectionTitle";
import { ExperienceItem } from "@/src/components/ExperienceItem/ExperienceItem";
import styles from "./About.module.sass";
import { useTranslations, useMessages } from "next-intl";

type ExperienceItem = {
  title: string;
  place: string;
  period: string;
  kind: string;
};

type DataAbout = {
    WorkExperience: {
      sectionTitle: string;
      experience: ExperienceItem[];
    };
    Education: {
      sectionTitle: string;
      experience: ExperienceItem[];
    };
}

export default function About() {
  const t = useTranslations("About");
  const data = useMessages();
  const dataAbout = data.About as unknown as DataAbout
  

  const experienceValues = Object.values(dataAbout.WorkExperience.experience || {}) as ExperienceItem[];
  const experienceElements = experienceValues.map((item, index) => (
    <ExperienceItem
      title={item.title}
      place={item.place}
      kind={item.kind}
      period={item.period}
      key={item.title + index}
    />
  ));
  const educationValues = Object.values(dataAbout.Education.experience || {}) as ExperienceItem[];
  const educationElements = educationValues.map((item, index) => (
    <ExperienceItem
      title={item.title}
      place={item.place}
      kind={item.kind}
      period={item.period}
      key={item.title + index}
    />
  ));

  return (
    <Wrapper direction={"column"} className={styles.wrapper}>
      <Wrapper direction={"column"} className={styles.wrapperBlur}>
        <SectionTitle>{t("AboutMe.sectionTitle")}</SectionTitle>
        <p className={styles.aboutText}>{t("AboutMe.text")}</p>
      </Wrapper>
      <Wrapper direction={"column"} className={styles.wrapperBlur}>
        <SectionTitle>{t("WorkExperience.sectionTitle")}</SectionTitle>
        <Wrapper direction={"column"} alignItems={"center"}>
          {experienceElements}
        </Wrapper>
      </Wrapper>
      <Wrapper direction={"column"} className={styles.wrapperBlur}>
        <SectionTitle>{t("Education.sectionTitle")}</SectionTitle>
        <Wrapper direction={"column"} alignItems={"center"}>
          {educationElements}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}
