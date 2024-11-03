import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import styles from "./Wrapper.module.sass";

type Props = PropsWithChildren &  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  direction?: "row" | "column";
  justifyContent?: "space-between" | "space-around" | "space-evenly" | "center" | "flex-start" | "flex-end";
  alignItems?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch";
  className?: string;
};
export default function Wrapper(props: Props) {
  const { children, direction = "row", alignItems = "stretch", justifyContent = "flex-start", className, ...prop } = props;

  const directionStyle = " " + styles[direction];
  const justifyContentStyle = " " + styles[`justify-${justifyContent}`];
  const alignItemsStyle = " " + styles[`align-${alignItems}`];

  const wrapperClasses =
    styles.wrapper + directionStyle + justifyContentStyle + alignItemsStyle + " " + (className ?? "");
  return <div className={wrapperClasses} {...prop}>{children}</div>;
}
