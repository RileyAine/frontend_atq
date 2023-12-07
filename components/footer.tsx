'use client';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';

export default function Footer() {
	const { toast } = useToast();
	const footerHeaders = [
		{
			title: 'Explore',
			links: [
				{ title: 'Home', url: '/' },
				{ title: 'Search', url: '/search' },
				{ title: '"Queer"', url: '/the-queer-word' },
			],
		},
		{
			title: 'Connect',
			links: [
				{ title: 'About', url: '/about' },
				{ title: 'Contact', url: '' },
				{ title: 'Contribute', url: '' },
			],
		},
		{
			title: 'Legal',
			links: [
				{ title: 'Privacy Policy', url: '' },
				{ title: 'Terms of Service', url: '' },
			],
		},
		{
			title: 'Follow ' + (process.env.NODE_ENV === 'development' ? 'Us' : 'Me'),
			links: [
				{ title: 'Facebook', url: '' },
				{ title: 'X', url: '' },
				{ title: 'Instagram', url: '' },
			],
		},
	];
	return (
		<footer className="grid auto-cols-auto items-start justify-center border-y-2 p-2">
			<NavigationMenu className="items-start gap-2">
				{...footerHeaders.map((header) => (
					<NavigationMenuList
						className="grid"
						key={header.title}>
						<p className="grid justify-start text-lg md:text-2xl px-4">
							{header.title}
						</p>
						{...header.links.map((link) => (
							<div
								key={link.title}
								className="grid justify-start items-center">
								<NavigationMenuItem
									key={link.title}
									onClick={() => {
										if (link.url.length == 0) {
											toast({
												title: link.title + ' link coming soon!',
												description:
													"This link isn't functional yet!  We hope it will be working very soon!",
											});
										}
									}}>
									<Link
										href={link.url}
										legacyBehavior
										passHref>
										<NavigationMenuLink
											className={navigationMenuTriggerStyle()}>
											{link.title}
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
							</div>
						))}
					</NavigationMenuList>
				))}
			</NavigationMenu>
			<Label className="grid copyright col-span-full justify-items-center py-2">
				© 2023{' '}
				{process.env.NODE_ENV === 'development'
					? process.env.NEXT_PUBLIC_SITE_TITLE
					: process.env.NEXT_PUBLIC_SITE_TITLE_PROD}
				. All rights reserved.
			</Label>
		</footer>
	);
}
