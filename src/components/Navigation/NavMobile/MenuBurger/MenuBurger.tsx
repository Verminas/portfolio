import styles from "./MenuBurger.module.sass";
import { useTheme } from "next-themes";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};
export const MenuBurger = ({ isOpen, onClick }: Props) => {
  const { theme = "light" } = useTheme();

  const spanClassName = styles.bar + ' ' + styles[theme]

  const spanElements = Array.from({ length: 5 }, (_, i) => (
    <span className={`${spanClassName} ${styles["bar" + (i + 1)]} ${isOpen ? styles.open : ""}`} key={i}  suppressHydrationWarning/>
  ));


  return (
    <button className={styles.hamburger} onClick={onClick}>
      {spanElements}
    </button>
  );
};
