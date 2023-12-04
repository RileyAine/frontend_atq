import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

export default function NavigationBar() {
	const navLinks = [
		{ title: 'Home', url: '/' },
		{ title: 'About', url: '/about' },
		{ title: 'Gender Identities', url: '/gender-identities' },
		{ title: 'Sexual Orientations', url: '/sexual-orientations' },
	];
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{...navLinks.map((navLink, index) => (
					<NavigationMenuItem key={index}>
						<Link
							href={navLink.url}
							legacyBehavior
							passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								{navLink.title}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
