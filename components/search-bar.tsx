'use client';

import * as React from 'react';
import { CheckIcon, CrossCircledIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from '@/components/ui/command';
import { Label } from '@/components/ui/label';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

let sampleNames: {
	extract: string;
	index: number;
	ns: number;
	pageid: number;
	pageimage: string;
	thumbnail: {
		height: number;
		source: string;
		width: number;
	};
	title: string;
}[] = [];

export default function SearchBar() {
	const [names, setNames] = React.useState(sampleNames);
	const [value, setValue] = React.useState('');

	async function fetchNames(e: string) {
		console.log(e);
		let trimVal = e.trim();
		if (trimVal.length > 0) {
			let t = await fetch(
				'https://en.wikipedia.org/w/api.php?action=query&generator=search&format=json&exintro&exsentences=1&exlimit=max&gsrlimit=10&gsrsearch=hastemplate:Birth_date_and_age+'.concat(
					trimVal,
					'&pithumbsize=100&pilimit=max&prop=pageimages%7Cextracts&origin=*'
				)
			);
			const results = await t.json();
			sampleNames = Object.values(results.query.pages);
			console.log(sampleNames);
			if (!t.ok) throw Error(t.statusText);
			setNames(sampleNames);
			return results;
		}
	}

	function onSelectName(name: string) {
		setValue(name);
		setNames([]);
	}
	return (
		<main className="grid grid-cols-3">
			<Label className="grid content-center justify-end p-2">Is</Label>
			<Command className="grid static">
				<CommandInput
					placeholder="whomst"
					value={value}
					onValueChange={(event) => fetchNames(event)}
				/>
				{value ? (
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger
								className={cn(
									'grid absolute h-5 w-5 self-center justify-self-end',
									value ? 'opacity-100' : 'opacity-0'
								)}>
								<CrossCircledIcon onClick={() => onSelectName('')} />
							</TooltipTrigger>
							<TooltipContent>
								<p>New search?</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				) : (
					''
				)}
				<CommandGroup className="grid absolute pt-10 bg-inherit">
					{names.map((name) => (
						<CommandItem
							key={name.pageid}
							value={name.title}
							onSelect={() => {
								onSelectName(name.title);
							}}>
							<CheckIcon
								className={cn(
									'mr-2 h-4 w-4',
									value === name.title ? 'opacity-100' : 'opacity-0'
								)}
							/>
							{name.title}
						</CommandItem>
					))}
				</CommandGroup>
			</Command>
			<Label className="grid content-center justify-start p-2">Queer?</Label>
		</main>
	);
}
