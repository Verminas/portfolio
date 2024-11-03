import { NavDesktop } from "@/src/components/Navigation/NavDesktop/NavDesktop";
import { NavMobile } from "@/src/components/Navigation/NavMobile/NavMobile";
import styles from "./Navigation.module.sass";

export function Navigation() {
  return (
    <div className={styles.nav}>
      <NavDesktop/>
      <NavMobile/>
    </div>
  );
}
