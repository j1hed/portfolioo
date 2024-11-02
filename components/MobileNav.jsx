"use client";
import { SheetContent, SheetTrigger, Sheet } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center p-6">
        <div className="mb-8 text-center">
          <Link href="/" aria-label="Homepage">
            <h1 className="text-3xl font-semibold">
              Jihed<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-xl capitalize hover:text-accent transition-all ${
                link.path === pathname ? "text-accent border-b-2 border-accent" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
