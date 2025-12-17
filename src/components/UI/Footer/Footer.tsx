import InstagramIcon from "../../../images/icon-instagram.svg?react";
import BlueSkyIcon from "../../../images/icon-bluesky.svg?react";
import TikTokIcon from "../../../images/icon-tiktok.svg?react";

const Footer = () => {
  return (
    <footer className="md:flex md:justify-between md:items-center md:flex-row-reverse md:px-8 md:py-10 xl:max-w-dsktp-md xl:mx-auto">
      <div className="flex justify-center gap-6 items-center mb-6 select-none md:mb-0">
        <InstagramIcon className="cursor-pointer" />
        <BlueSkyIcon className="cursor-pointer" />
        <TikTokIcon className="cursor-pointer" />
      </div>
      <div className="text-center mb-5 md:text-base md:mb-0">
        Made with ❤️ and 🥑
      </div>
    </footer>
  );
};

export default Footer;
