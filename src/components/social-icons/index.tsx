import {
  Mail,
  Github,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  TikTok,
  Mastodon,
  Instagram,
} from "./icons";

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  mastodon: Mastodon,
  instagram: Instagram,
  tiktok: TikTok
};

type SocialIconProps = {
  kind: keyof typeof components;
  size?: number;
};

const SocialIcon = ({ kind, size }: SocialIconProps) => {
  const SocialSvg = components[kind];

  return (
    <SocialSvg
      className={`fill-white`}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

export default SocialIcon;
