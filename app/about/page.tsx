'use client';
import content_prod from './content.prod';
import content_dev from './content.dev';

import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function About() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams()!;
	console.log(router);
	console.log(pathname);
	// This fuckin thing depends on the url
	// you can get it by going /about (where you are), ?sort=(whatever)
	console.log(searchParams.get('sort'));

	const content =
		process.env.NODE_ENV === 'production' ? content_prod() : content_dev();
	return (
		<main className="content-main">
			<Label className="grid text-3xl justify-self-center items-center border-b-2">
				{content.PAGE_TITLE}
			</Label>
			{...content.SECTIONS.map((section) => (
				<>
					<section
						key={section.SECTION_TITLE}
						className="content-section">
						<Label className="grid text-lg md:text-2xl justify-self-center">
							{section.SECTION_TITLE}
						</Label>
						{...section.PARAGRAPHS.map((para, i) => <p key={i}>{para}</p>)}
					</section>
					<Separator />
				</>
			))}
		</main>
	);
}
