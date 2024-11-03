"use client"

import { useTheme } from "next-themes"
import { Button } from "@/src/components/Button/Button";
import { LuSunMoon } from "react-icons/lu";
import styles from "./ThemeToggle.module.sass"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button onClick={onChangeTheme} suppressHydrationWarning className={`${styles.button} ${styles.toggle}`}><LuSunMoon/></Button>
  )
}
