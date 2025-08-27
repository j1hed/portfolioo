import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-4 xl:py-8 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with link */}
        <Link href="/" aria-label="Homepage">
          <h1 className="text-4xl font-semibold">
            Jihed<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="bg-accent-hover text-white px-4 py-2 rounded transition-colors duration-300">
              Hire me
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
