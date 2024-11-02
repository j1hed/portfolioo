import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

// Array of social links
const socialLinks = [
  { icon: <FaGithub />, path: 'https://github.com/j1hed' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/jihed-mechi-a4626b264/' },
  { icon: <FaYoutube />, path: 'https://youtube.com/channel/username' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/j1hedmech/' },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
