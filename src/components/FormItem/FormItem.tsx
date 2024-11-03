"use client"

import styles from "./FormItem.module.sass";
import { HTMLInputTypeAttribute, FocusEvent, ChangeEvent } from "react";
import { useTheme } from "next-themes";

type Props =  {
  as?: "input" | "textarea";
  id: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  isError?: boolean;
  errorText?: string;

  onChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement> | FocusEvent<HTMLTextAreaElement>) => void;
  value: string;
};

export const FormItem = ({ id, placeholder, type, name, as, errorText, onBlur, value, onChange, isError }: Props) => {
  const { theme = 'light' } = useTheme()
  const Component = as || "input";
  const typeProps = type ? { type } : {};
  const errorClassName = styles.error + " " + (isError ? styles.errorVisible : "");
  return (
    <label className={styles.label}>
      <Component
        autoComplete={"on"}
        className={`${styles.item} ${styles[theme]}`}
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        {...typeProps}
        onBlur={onBlur}
        onChange={onChange}
        suppressHydrationWarning
      />
      <span className={errorClassName}>{isError ? errorText : ""}</span>
    </label>
  );
};
