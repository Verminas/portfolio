import { IconType } from "react-icons";
import Icon from "@/src/components/Icon/Icon";
import styles from "./SkillItem.module.sass";
import Wrapper from "@/src/components/Wrapper/Wrapper";

type Props = {
  icon: IconType;
  title: string;
};
export const SkillItem = ({ icon, title }: Props) => {
  return (
    <Wrapper className={styles.wrapper} direction={"column"} alignItems={"center"} justifyContent={"center"}>
      <Icon icon={icon} className={styles.svg} />
      <span className={styles.title}>{title}</span>
    </Wrapper>
  );
};
