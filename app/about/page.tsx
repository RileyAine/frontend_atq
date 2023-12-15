// Import necessary dependencies and components
'use client';
import pageContent from './content';

import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

// About component to display information about the page
export default function About() {
	// Fetch content data from external source
	const content = pageContent();

	return (
		<main className="content-main">
			{/* Section: Page Title */}
			<Label className="grid text-3xl justify-self-center items-center border-b-2">
				{content.PAGE_TITLE}
			</Label>

			{/* Iterate through sections and display content */}
			{...content.SECTIONS.map((section) => (
				<>
					{/* Section: Content Section */}
					<section
						key={section.SECTION_TITLE}
						className="content-section">
						<Label className="grid text-lg md:text-2xl justify-self-center">
							{/* Display section title */}
							{section.SECTION_TITLE}
						</Label>
						{/* Iterate through paragraphs and display content */}
						{...section.PARAGRAPHS.map((para, i) => <p key={i}>{para}</p>)}
					</section>
					<Separator />
				</>
			))}
		</main>
	);
}
