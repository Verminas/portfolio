"use client"

import { useTranslations } from "next-intl";
import { navigationData } from "@/src/data/navigationData";
import { Link } from "@/i18n/routing";

type Props = {
  isOpenMenu?: boolean
  setIsOpen?: (value: boolean) => void
};
export const Menu = ({isOpenMenu, setIsOpen}: Props) => {
  const t = useTranslations("Navigation");

  const onClickLink = () => {
    if(isOpenMenu && setIsOpen) setIsOpen(false)
  }

  const navigationElements = navigationData.map((item) => (
    <Link href={item.href} key={item.title} onClick={onClickLink}>
      {t(item.title)}
    </Link>
  ));
  return (
    <>
      {navigationElements}
    </>
  );
};