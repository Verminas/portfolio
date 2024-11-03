import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { IconType } from "react-icons";

type SocialLink = {
  title: string;
  icon: IconType;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/Verminas", icon: FaGithub, title: "GitHub" },
  { href: "https://www.linkedin.com/in/julia-veremeeva-frontend/", icon: FaLinkedin, title: "Linkedin" },
  { href: "mailto:veremeevafrontend@gmail.com", icon: IoMdMail, title: "Email" },
  { href: "https://t.me/rtkuq", icon: FaTelegram, title: "Telegram" },
];
