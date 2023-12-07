import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

export default function NavigationBar() {
	const navLinks =
		process.env.NODE_ENV === 'development'
			? [
					{ title: 'Home', url: '/' },
					{ title: 'About', url: '/about' },
					{ title: 'Gender Identities', url: '/gender-identities' },
					{ title: 'Sexual Orientations', url: '/sexual-orientations' },
			  ]
			: [
					{ title: 'Home', url: '/' },
					{ title: 'About', url: '/about' },
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
							<NavigationMenuLink
								className={navigationMenuTriggerStyle() + ' px-1'}>
								{navLink.title}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
