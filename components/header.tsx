'use client';

import SearchBar from './search-bar';
import NavigationBar from './navigation-bar';
import DarkModeToggle from './dark-mode-toggle';
import Image from 'next/image';

export default function Header() {
	return (
		<header className="grid gap-2 content-center justify-center">
			<article className="grid absolute right-0 p-2">
				<DarkModeToggle />
			</article>
			<h1 className="grid relative place-content-center justify-self-center h-32 handmade text-5xl md:text-6xl lg:text-7xl xl:text-8xl pr-9 md:pr-12 lg:pr-14 xl:pr-16">
				{process.env.NEXT_PUBLIC_SITE_TITLE}

				<Image
					className="grid justify-self-end self-center absolute w-8 md:w-12 lg:w-14 xl:w-16"
					src="/atq_question_small.png"
					alt="Pride flag question mark"
					width={45}
					height={45}
				/>
			</h1>
			<article className="grid place-content-center">
				<NavigationBar />
			</article>
			<article className="grid w-screen place-content-center grid-flow-col gap-2 p-2 border-y-2">
				<SearchBar />
			</article>
		</header>
	);
}
