"use client";
import { useState } from "react";
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
	{
	name: 'have an idea?',
	path: '/booking',
}
];

const MobileNav = () => {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const [clicked, setClicked] = useState(null);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger className="flex justify-center items-center" onClick={() => setOpen(true)}>
				<CiMenuFries className="text-[32px] text-accent" />
			</SheetTrigger>
			<SheetContent className="flex flex-col items-center p-6">
				<div className="mb-8 text-center">
					<Link href="/" aria-label="Homepage" onClick={() => setOpen(false)}>
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
							onClick={() => {
								setClicked(link.path);
								setTimeout(() => setOpen(false), 300); // Wait for animation before closing
							}}
							className={`text-xl capitalize hover:text-accent transition-all ${
								link.path === pathname ? "text-accent border-b-2 border-accent" : ""
							} ${clicked === link.path ? "animate-link" : ""}`}
						>
							{link.name}
						</Link>
					))}
				</nav>
			</SheetContent>
			<style jsx global>{`
  .animate-link {
    animation: linkMinimal 0.35s;
    transform: scale(1.05);
  }
  @keyframes linkMinimal {
    0% {
      color: #00ff99;
      transform: scale(1.12);
    }
    60% {
      color: #fff;
      transform: scale(1.07);
    }
    100% {
      color: inherit;
      transform: scale(1.05);
    }
  }
`}</style>
		</Sheet>
	);
};

export default MobileNav;
