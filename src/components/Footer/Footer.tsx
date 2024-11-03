import Wrapper from "@/src/components/Wrapper/Wrapper";
import { Container } from "@/src/components/Container/Container";
import ExternalLink from "@/src/components/ExternalLink/ExternalLink";
import styles from "./Footer.module.sass";
import SocialLinks from "@/src/components/SocialLinks/SocialLinks";

export default function Footer() {
  return (
    <footer className={styles.footerWrap}>
      <Container>
        <Wrapper className={`${styles.footer} ${styles.wrapper}`} alignItems={'center'} justifyContent={'center'}>
          <ExternalLink href={"mailto:veremeevafrontend@gmail.com"} title={"Mail"} className={styles.link}>
            veremeevafrontend@gmail.com
          </ExternalLink>
          <SocialLinks className={`${styles.social} ${styles.media}`} />
        </Wrapper>
      </Container>
    </footer>
  );
}
