import styles from "./NavDesktop.module.sass";
import { Menu } from "@/src/components/Navigation/Menu/Menu";

export const NavDesktop = () => {
  return <nav className={styles.navigation}><Menu/></nav>;
};
