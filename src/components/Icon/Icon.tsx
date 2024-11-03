import styles from "./SocialIcon.module.sass";
import { IconType } from "react-icons";

type Props = {
  className?: string;
  icon: IconType;
};
export default function Icon({ className, icon }: Props) {
  const commonClassName = styles.icon + " " + (className ?? "");
  return <>{icon({ className: commonClassName })}</>;
}
