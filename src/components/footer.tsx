// src/components/footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/about', label: 'عن الموقع' },
    { href: '/contact', label: 'سياسة الخصوصية' },
    { href: '/contact', label: 'شروط الاستخدام' },
  ];

  return (
    <footer className="bg-card text-card-foreground py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-start">
            <h3 className="text-2xl font-bold mb-4 text-primary">كوكب الشرق</h3>
            <p className="text-muted-foreground text-lg">
              استكشف عالم أم كلثوم، الصوت الذي عبر الحدود والزمن.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-4 md:space-y-0">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-lg text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center text-muted-foreground mt-12 text-base">
          © {currentYear} كوكب الشرق. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
