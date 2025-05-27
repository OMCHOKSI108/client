import { FaGithub, FaLinkedin, FaYoutube, FaXTwitter, FaInstagram, FaDiscord } from 'react-icons/fa6';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/DEvang0876' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/devang0876/' },
    { icon: FaYoutube, href: 'https://www.youtube.com/@devangdevf738' },
    { icon: FaXTwitter, href: 'https://x.com/DevangDhandhuk1' },
    { icon: FaInstagram, href: 'https://www.instagram.com/__deviiinee_/' },
    //{ icon: FaDiscord, href: 'https://discord.com/users/dhairyagothi' },
  ];

  return (
    <footer className="py-8 bg-page border-t border-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <p className="text-black text-sm">
            Old me makes me Perfect ✨🔥
          </p>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-accent transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <p className="text-black text-sm">
            © {new Date().getFullYear()} Devang Dhandhukiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;