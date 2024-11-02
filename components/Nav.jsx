"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`capitalize font-medium hover:text-accent transition-all ${
            link.path === pathname ? "text-accent border-accent" : ""
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
