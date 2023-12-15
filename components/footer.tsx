'use client';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import AnimatedNavigationMenuLink from './animatedNavigationMenuLink';

export default function Footer() {
	const { toast } = useToast();
	const footerHeaders = [
		{
			title: 'Explore',
			links: [
				{ title: 'Home', url: '/' },
				{ title: 'Search', url: '' },
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
			title: 'Follow',
			links: [
				{ title: 'Facebook', url: '' },
				{ title: 'X', url: '' },
				{ title: 'Instagram', url: '' },
			],
		},
	];
	return (
		<footer className="grid items-start justify-center border-y-2 py-2 bg-inherit z-45 w-screen">
			<NavigationMenu className="items-start md:gap-2">
				{...footerHeaders.map((header) => (
					<NavigationMenuList
						className="grid"
						key={header.title}>
						<p className="grid justify-start text-md md:text-2xl px-2 md:px-4">
							{header.title}
						</p>
						{...header.links.map((link) => (
							<div
								key={link.title}
								className="grid justify-items-start items-center">
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
									<AnimatedNavigationMenuLink href={link.url}>
										{link.title}
									</AnimatedNavigationMenuLink>
								</NavigationMenuItem>
							</div>
						))}
					</NavigationMenuList>
				))}
			</NavigationMenu>
			<Label className="grid copyright col-span-full justify-items-center py-2">
				© 2023 {process.env.NEXT_PUBLIC_SITE_TITLE}. All rights reserved.
			</Label>
		</footer>
	);
}
