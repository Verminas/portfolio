import Wrapper from "@/src/components/Wrapper/Wrapper";
import { MainText } from "@/src/components/MainText/MainText";
import styles from "./Contacts.module.sass";
import { ContactForm } from "@/src/components/ContactForm/ContactForm";
import ExternalLink from "@/src/components/ExternalLink/ExternalLink";
import { socialLinks } from "@/src/data/socialLinks";
import { SectionTitle } from "@/src/components/SectionTitle/SectionTitle";
import { useTranslations } from "next-intl";

export default function Contacts() {
  const t = useTranslations("Contact");
  const telegram = socialLinks.find((i) => i.title === "Telegram");
  const email = socialLinks.find((i) => i.title === "Email");
  const emailAddress = email?.href.split(':')[1]

  return (
    <Wrapper direction={"column"} alignItems={"center"}>
      <Wrapper direction={'column'} alignItems={'center'}>
        <ExternalLink href={telegram?.href || "#"} className={styles.link}>
          <SectionTitle className={`${styles.text} ${styles.title}`}>{t("title")}</SectionTitle>
        </ExternalLink>
        <ExternalLink href={email?.href || "#"} className={styles.link}>
          <MainText className={`${styles.colorText} ${styles.email}`}>{emailAddress}</MainText>
        </ExternalLink>
      </Wrapper>
      <ContactForm />
    </Wrapper>
  );
}
