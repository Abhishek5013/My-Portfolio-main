
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isSheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavContent = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setSheetOpen(false)}
          className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary bg-transparent hover:bg-white/10 dark:hover:bg-black/10 border border-transparent hover:border-white/20 dark:hover:border-white/10 backdrop-blur-sm"
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'border-b border-white/5 bg-background/50 backdrop-blur-xl' : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center">
        <Link
  href="#home"
  className="mr-6 flex items-center space-x-2 group transition-all"
>
  <div className="p-[2px] rounded-full transition-all duration-300 hover:bg-white/10 dark:hover:bg-black/10">
    <Image
      src="/logo1.jpg"
      alt="logo1"
      width={50}
      height={50}
      className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </div>
</Link>


        <div className="flex-1" />

        <nav className="hidden items-center space-x-2 md:flex">
          <NavContent />
        </nav>

        <div className="ml-4 flex items-center space-x-2">
          
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="rounded-full border border-white/10 bg-white/5 hover:bg-white/10 dark:hover:bg-black/10">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px]">
                <div className="flex h-full flex-col p-6">
                    <Link href="#home" className="mb-8 flex items-center space-x-2" onClick={() => setSheetOpen(false)}>
                        <Image src="/logo1.jpg" alt="logo1" width={50} height={50}  style={{ borderRadius: "50%", objectFit: "cover" }}/>
                    </Link>
                    <nav className="flex flex-col space-y-4">
                        <NavContent />
                    </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
