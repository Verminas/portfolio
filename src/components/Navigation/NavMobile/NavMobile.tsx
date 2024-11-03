"use client";

import styles from "./NavMobile.module.sass";
import { useState } from "react";
import { MenuBurger } from "@/src/components/Navigation/NavMobile/MenuBurger/MenuBurger";
import { useTheme } from "next-themes";
import { Menu } from "@/src/components/Navigation/Menu/Menu";

export const NavMobile = () => {
  const { theme = "light" } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navigationClassName = isOpen ? `${styles.navigation} ${styles[theme]} ${styles.open}` : styles.navigation;

  const onOpenClose = () => setIsOpen((prev) => !prev);
  return (
    <div className={styles.navWrapper}>
      <MenuBurger onClick={onOpenClose} isOpen={isOpen} />
      <nav className={navigationClassName} suppressHydrationWarning><Menu isOpenMenu={isOpen} setIsOpen={setIsOpen}/></nav>
    </div>
  );
};
