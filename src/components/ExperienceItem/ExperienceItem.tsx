import Wrapper from "@/src/components/Wrapper/Wrapper";
import styles from "./ExperienceItem.module.sass";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

type Props = {
  title: string;
  place: string;
  period: string;
  kind: string;
};

export const ExperienceItem = ({ period, kind, place, title }: Props) => {
  return (
    <Wrapper justifyContent={"space-between"} alignItems={"center"} className={styles.wrapper}>
      <Wrapper direction={"column"} className={styles.mainInfo}>
        <h4 className={styles.title}>{title}</h4>
        <FaRegBuilding />
        <span className={styles.place}>{place}</span>
      </Wrapper>
      <Wrapper direction={"column"} className={styles.secondaryInfo}>
        <span className={styles.kind}>{kind}</span>
        <FaRegCalendarAlt />
        <p className={styles.period}>{period}</p>
      </Wrapper>
    </Wrapper>
  );
};
