'use client';

import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/gideonagbavor8',
      icon: '⚙️',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: '💼',
    },
    {
      name: 'X',
      href: 'https://x.com/KordexTech',
      icon: '𝕏',
    },
  ];

  return (
    <footer className="bg-[#0A1628] text-[#E8EDF5] py-16 border-t border-[#1E6FD9]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#1E6FD9] rounded flex items-center justify-center font-semibold text-white">
                KX
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm">Kordex</span>
                <span className="text-[#4A9FFF] text-xs font-medium">
                  Technologies
                </span>
              </div>
            </div>
            <p className="text-[#8BA5C8] text-sm mb-2">Execute with intelligence.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#8BA5C8] hover:text-[#4A9FFF] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">More</h3>
            <ul className="space-y-2">
              {footerLinks.slice(3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#8BA5C8] hover:text-[#4A9FFF] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1E6FD9]/20 hover:bg-[#1E6FD9] rounded flex items-center justify-center transition-all text-[#4A9FFF] hover:text-white"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1E6FD9]/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-[#8BA5C8]">
            <p>&copy; 2024 Kordex Technologies. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <Link href="#" className="hover:text-[#4A9FFF] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#4A9FFF] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
