import Wrapper from "@/src/components/Wrapper/Wrapper";
import { useTranslations } from "next-intl";
import { SectionTitle } from "@/src/components/SectionTitle/SectionTitle";
import styles from "./Skills.module.sass";
import { skillsIcons } from "@/src/data/skillsIcons";
import { SkillItem } from "@/src/components/SkillItem/SkillItem";
import { MotionElements } from "@/src/components/framer-motion/MotionElements/MotionElements";
import { MotionItem } from "@/src/components/framer-motion/MotionElements/MotionItem";

export default function Skills() {
  const t = useTranslations("Skills");
  const slillsElements = skillsIcons.map((skill, index) => (
    <MotionItem  key={skill.title + index} index={index}>
      <SkillItem icon={skill.icon} key={skill.title} title={skill.title} />
    </MotionItem>
  ));
  return (
    <Wrapper direction={"column"}>
      <Wrapper direction={"column"}>
        <SectionTitle>{t("sectionTitle")}</SectionTitle>
        <p>{t("text")}</p>
      </Wrapper>
      <Wrapper className={styles.skillsWrapper} justifyContent={'center'}>
        <MotionElements>
          {slillsElements}
        </MotionElements>
      </Wrapper>
    </Wrapper>
  );
}
