import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import { Container } from "@/src/components/Container/Container";
import styles from "./Layout.module.sass";
import { LayoutTransition } from "@/src/components/framer-motion/LayoutTransition";
import { useTranslations } from "next-intl";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = useTranslations("HomePage");

  return (
    <div className={styles.wrapper}>
      <Header />
      <LayoutTransition
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: [-100, -10, 10, 0] }}
        exit={{ opacity: 0, x: 300 }}
      >
        <main className={styles.main}>
          <h1 className={styles.hidden}>{t("tagInfo")}</h1>
          <Container>{children}</Container>
        </main>
      </LayoutTransition>
      <Footer />
    </div>
  );
}
