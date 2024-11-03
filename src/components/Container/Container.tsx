import { PropsWithChildren } from "react";
import styles from "./Container.module.sass";

export const Container = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};
