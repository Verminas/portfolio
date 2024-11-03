import { Navigation } from "@/src/components/Navigation/Navigation";
import styles from "./Header.module.sass";
import Wrapper from "@/src/components/Wrapper/Wrapper";
import SocialLinks from "@/src/components/SocialLinks/SocialLinks";
import { Container } from "@/src/components/Container/Container";
import LocaleSwitcher from "@/src/components/LocaleSwitcher/LocaleSwitcher";
import { ThemeToggle } from "@/src/components/ThemeToggle/ThemeToggle";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Wrapper justifyContent={"space-between"} alignItems={"center"}>
          <Wrapper className={styles.dop}>
            <LocaleSwitcher />
            <ThemeToggle/>
          </Wrapper>
          <Navigation />
          <SocialLinks className={`${styles.social} ${styles.media}`} />
        </Wrapper>
      </Container>
    </header>
  );
}
