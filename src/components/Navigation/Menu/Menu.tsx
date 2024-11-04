"use client"

import { useTranslations } from "next-intl";
import { navigationData } from "@/src/data/navigationData";
import { Link, usePathname } from "@/i18n/routing";
import styles from "./Menu.module.sass"

type Props = {
  isOpenMenu?: boolean
  setIsOpen?: (value: boolean) => void
};
export const Menu = ({isOpenMenu, setIsOpen}: Props) => {
  const t = useTranslations("Navigation");
  const pathName = usePathname();
  console.log(pathName)

  const onClickLink = () => {
    if(isOpenMenu && setIsOpen) setIsOpen(false)
  }


  const navigationElements = navigationData.map((item) => (
    <Link href={item.href} key={item.title} onClick={onClickLink} className={pathName === item.href ? styles.active : ''}>
      {t(item.title)}
    </Link>
  ));
  return (
    <>
      {navigationElements}
    </>
  );
};