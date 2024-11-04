import { useTranslations } from "next-intl";
import styles from "./Home.module.sass";
import Wrapper from "@/src/components/Wrapper/Wrapper";
import { TypeWritterEffect } from "@/src/components/TypeWritterEffect/TypeWritterEffect";
import Image from "next/image";
import photo from "@/public/photo.webp";
import { MainText } from "@/src/components/MainText/MainText";
import { DownloadFile } from "@/src/components/DownloadFile/DownloadFile";
import { MotionElements } from "@/src/components/framer-motion/MotionElements/MotionElements";
import { MotionItem } from "@/src/components/framer-motion/MotionElements/MotionItem";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <Wrapper justifyContent={"space-around"} alignItems={"center"} className={`${styles.wrapper} ${styles.home}`}>
      <MotionElements>
        <MotionItem key={'info'} className={styles.info} initial={{ opacity: 0, x: -100 }}>
          <Wrapper direction={"column"} className={styles.info} justifyContent={"center"}>
            <MainText>
              {t("hello")} <span>&#128400;</span>,
            </MainText>
            <MainText>{t("myName")}</MainText>
            <MainText className={`${styles.name} ${styles.colorText}`}>{t("name")}</MainText>
            <MainText as={"h2"} className={styles.typeText}>
              <TypeWritterEffect strings={t("work").split(",")} />
            </MainText>
          </Wrapper>
        </MotionItem>
        <MotionItem key={'photo'} initial={{ opacity: 0, x: 100 }}>
          <Wrapper direction={"column"} alignItems={"center"} justifyContent={"center"}>
            <div className={styles.imageWrapper}>
              <Image src={photo} alt={"my photo"} className={styles.image} />
            </div>
            <DownloadFile>{t("downloadCV")}</DownloadFile>
          </Wrapper>
        </MotionItem>
      </MotionElements>
    </Wrapper>
  );
}
