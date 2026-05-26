// src/components/navbar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Assuming cn is available for conditional class names

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'الرئيسية' },
    { href: '/about', label: 'عن أم كلثوم' },
    { href: '/gallery', label: 'معرض الصور' },
    { href: '/contact', label: 'تواصل معنا' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4">
      <div className="flex h-16 items-center justify-between container">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-primary">كوكب الشرق</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary/80",
                  location.pathname === item.href || (item.href === '/' && location.pathname === '/')
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="rounded-full">
            تسجيل الدخول
          </Button>
          <Button variant="secondary" className="rounded-full">
            اشتراك
          </Button>
        </div>
        {/* Mobile menu button would go here */}
      </div>
    </nav>
  );
};

export default Navbar;
