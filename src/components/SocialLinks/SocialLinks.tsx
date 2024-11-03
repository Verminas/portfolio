import Wrapper from "@/src/components/Wrapper/Wrapper";
import { socialLinks } from "@/src/data/socialLinks";
import ExternalLink from "@/src/components/ExternalLink/ExternalLink";
import Icon from "@/src/components/Icon/Icon";

type Props = {
  className?: string;
};

export default function SocialLinks({ className }: Props) {
  const socialIcons = socialLinks.map((social) => (
    <ExternalLink href={social.href} title={social.title} key={social.title}>
      <Icon icon={social.icon} />
    </ExternalLink>
  ));
  return (
    <Wrapper justifyContent={"space-between"} alignItems={"center"} className={className}>
      {socialIcons}
    </Wrapper>
  );
}
