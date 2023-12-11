import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import AnimatedNavigationMenuLink from './animatedNavigationMenuLink';

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
						<AnimatedNavigationMenuLink href={navLink.url}>
							{navLink.title}
						</AnimatedNavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
