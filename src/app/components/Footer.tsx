import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/karthikeyan-sreekumar', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/karthikeyan-sreekumar', label: 'LinkedIn' },
    // { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:karthikeyansreekumar@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    // { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">{'<KS />'}</div>
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              Frontend Developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-azure dark:hover:bg-gold transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>Email: karthikeyansreekumar@gmail.com</li>
              <li>Phone: +91 8547148937</li>
              <li>Location: Kerala, IN</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 dark:border-gray-900 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 dark:text-gray-500 text-sm text-center sm:text-left">
            © {currentYear} Karthikeyan Sreekumar. All rights reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> by Karthikeyan Sreekumar
          </p>
        </div>
      </div>
    </footer>
  );
}