'use client';

import SearchBar from './search-bar';
import NavigationBar from './navigation-bar';
import DarkModeToggle from './dark-mode-toggle';
import Image from 'next/image';
import HamburgerNavigation from './hamburger-navigation';
import useWindowSize from '@/lib/hooks/useWindowSize';
import Link from 'next/link';
import { Label } from './ui/label';
type navLink = { title: string; url: string };

export default function Header() {
	const windowWidth = useWindowSize()?.width;
	const windowIsMobile = windowWidth ? windowWidth < 700 : false;
	const navLinks: navLink[] = [
		{ title: 'Home', url: '/' },
		{ title: 'About', url: '/about' },
		{ title: 'Identities', url: '/gender-identities' },
		{ title: 'Orientations', url: '/sexual-orientations' },
	];

	return (
		<header className="grid gap-2 relative content-center justify-center pt-1 md:pt-0">
			<article className="grid absolute right-0 pt-3 px-3 md:px-2">
				<DarkModeToggle />
			</article>
			{windowIsMobile && (
				<article className="grid absolute left-0 pt-3 px-3 w-screen">
					<HamburgerNavigation navLinks={navLinks} />
				</article>
			)}
			<Link
				className="grid relative place-content-center justify-self-center h-8 my-2 md:my-12 md:h-26"
				href="/">
				<Label className="grid handmade text-3xl md:text-6xl lg:text-7xl xl:text-8xl pr-7 md:pr-12 lg:pr-14 xl:pr-16">
					{process.env.NEXT_PUBLIC_SITE_TITLE}
				</Label>
				<Image
					className="grid auto-col-auto justify-self-end self-center absolute w-6 md:w-12 lg:w-14 xl:w-16"
					src="/atq_question_small.png"
					alt="Pride flag question mark"
					width={45}
					height={45}
				/>
			</Link>
			{!windowIsMobile && (
				<article className="grid place-content-center">
					<NavigationBar navLinks={navLinks} />
				</article>
			)}
			<article className="grid w-screen place-content-center grid-flow-col gap-2 p-2 border-y-2">
				<SearchBar />
			</article>
		</header>
	);
}
