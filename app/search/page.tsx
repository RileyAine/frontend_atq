'use client';

import { Label } from '@/components/ui/label';

import { useSearchParams } from 'next/navigation';

export default function CharacterSheet() {
	const searchParams = useSearchParams()!;

	return (
		<main className="content-main">
			<Label className="grid text-3xl justify-self-center items-center border-b-2">
				{searchParams.get('id')}
				<p>Okay now build this character sheet business</p>
				<p>
					Also maybe look into making things whoosh out to the left and whoosh
					in from the right
				</p>
				<p>
					Grab the wiki url to get a persons data, and throw it up here in the
					tsx to display.
				</p>
			</Label>
		</main>
	);
}
