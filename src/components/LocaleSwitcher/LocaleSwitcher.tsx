"use client";

import { useParams } from "next/navigation";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { Button } from "@/src/components/Button/Button";
import styles from "@/src/components/ThemeToggle/ThemeToggle.module.sass";

export default function LocaleSwitcher() {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  function onSelectChange() {
    const nextLocale = locale === "en" ? "ru" : "en";
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale, scroll: false }
      );
    });
  }

  return <Button onClick={onSelectChange} className={`${styles.button} ${styles.toggle}`}>{locale.toUpperCase()}</Button>;
}
