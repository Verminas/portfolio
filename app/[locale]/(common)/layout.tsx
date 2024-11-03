import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import { Container } from "@/src/components/Container/Container";
import styles from "./Layout.module.sass";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
