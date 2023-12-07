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
import { useRouter } from 'next/navigation';

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

async function sampleSearch(value: string) {
	const url = `
	https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&exintro&exsentences=1&gsrlimit=10&gsrsearch=insource:/\{\{Birth_date_and_age/i%20${value}&pithumbsize=100&piprop=thumbnail&prop=pageimages|extracts&origin=*
	`;
	const apiResponse = await fetch(url + 'b');
	const resJSON = await apiResponse.json();
	// Assuming you have fetched and parsed the JSON response from the Wikipedia API
	const searchResults = Object.values(resJSON.query.pages);
	// Now, peopleResults contains only search results related to people (namespace 0)
	return searchResults;
}

export default function SearchBar() {
	const [names, setNames] = React.useState(sampleNames);
	const [value, setValue] = React.useState('');

	const router = useRouter();

	async function fetchNames(e: string) {
		let trimVal = e.trim();
		if (trimVal.length > 0) {
			let apiResponse = await fetch(
				'https://en.wikipedia.org/w/api.php?action=query&generator=search&format=json&exintro&exsentences=1&exlimit=max&gsrlimit=10&gsrsearch=hastemplate:Birth_date_and_age+'.concat(
					trimVal,
					'&pithumbsize=100&pilimit=max&prop=pageimages%7Cextracts&origin=*'
				)
			);

			const results = await apiResponse.json();
			sampleNames = Object.values(results.query.pages);
			if (!apiResponse.ok) throw Error(apiResponse.statusText);
			setNames(sampleNames);
			return results;
		}
	}

	function onSelectName(name: string, pageid: number) {
		setValue(name);
		setNames([]);
		router.push('search?id=' + pageid);
	}

	function onClearName() {
		setValue('');
		setNames([]);
		router.push('/');
	}

	return (
		<main className="grid grid-cols-3">
			<Label className="grid content-center justify-end p-2">
				{process.env.NODE_ENV === 'development' ? 'Is' : 'Learn About: '}
			</Label>
			<Command className="grid static">
				<CommandInput
					placeholder={
						process.env.NODE_ENV === 'development' ? 'whomst' : 'Type a Name!'
					}
					value={value}
					disabled={value.length > 0}
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
								<CrossCircledIcon onClick={() => onClearName()} />
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
								onSelectName(name.title, name.pageid);
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

			<Label className="grid content-center justify-start p-2">
				{process.env.NODE_ENV === 'development' && 'Queer?'}
			</Label>
		</main>
	);
}
