import Wrapper from "@/src/components/Wrapper/Wrapper";
import { useTranslations } from "next-intl";
import { SectionTitle } from "@/src/components/SectionTitle/SectionTitle";
import { skillsIcons } from "@/src/data/skillsIcons";
import { SkillItem } from "@/src/components/SkillItem/SkillItem";
import styles from "./Skills.module.sass";

export default function Skills() {
  const t = useTranslations("Skills");
  const slillsElements = skillsIcons.map((skill) => (
    <SkillItem icon={skill.icon} key={skill.title} title={skill.title} />
  ));
  return (
    <Wrapper direction={"column"}>
      <Wrapper direction={"column"}>
        <SectionTitle>{t("sectionTitle")}</SectionTitle>
        <p>{t("text")}</p>
      </Wrapper>
      <Wrapper className={styles.skillsWrapper}>{slillsElements}</Wrapper>
    </Wrapper>
  );
}
