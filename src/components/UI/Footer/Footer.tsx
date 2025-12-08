import InstagramIcon from "../../../images/icon-instagram.svg?react";
import BlueSkyIcon from "../../../images/icon-bluesky.svg?react";
import TikTokIcon from "../../../images/icon-tiktok.svg?react";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center gap-6 items-center mb-6">
        <InstagramIcon />
        <BlueSkyIcon />
        <TikTokIcon />
      </div>
      <div className="text-center mb-5">Made with ❤️ and 🥑</div>
    </footer>
  );
};

export default Footer;
