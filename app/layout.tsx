// Import necessary dependencies and components
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css'; // Import global styles

import { cn } from '../lib/utils'; // Import utility function
import Header from '@/components/header'; // Import Header component
import Footer from '@/components/footer'; // Import Footer component
import { ThemeProvider } from '@/components/theme-provider'; // Import ThemeProvider component
import { ScrollArea } from '@/components/ui/scroll-area'; // Import ScrollArea component
import { Toaster } from '@/components/ui/toaster'; // Import Toaster component
import { Author } from 'next/dist/lib/metadata/types/metadata-types';

// Define fontSans with Latin subset
export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

const author: Author = { name: 'Riley;>' };

// Define metadata for the page
export const metadata: Metadata = {
	title: 'Are They Queer',
	description:
		'Exploring and celebrating diverse sexual orientations and gender identities.',
	authors: author,
	keywords: [
		'Queer',
		'LGBTQ+',
		'Sexual Orientations',
		'Gender Identities',
		'Famous',
		'Popular',
		'Gay',
		'Lesbian',
	],
	icons: '/AreTheyQueer.png', // URL or local path to the default share image
};

// RootLayout component for the overall layout structure
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			className="grid h-screen w-screen"
			lang="en"
			suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable
				)}>
				{/* ThemeProvider to handle theme switching */}
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					{/* Main layout with header, content area, and footer */}
					<div className="grid grid-rows-mobile-layout md:grid-rows-site-layout h-screen w-screen">
						{/* Header component */}
						<div className="grid">
							<Header />
						</div>
						{/* ScrollArea for the main content */}
						<ScrollArea className="grid md:w-10/12 lg:w-8/12 xl:w-6/12 items-start justify-self-center pageContentAnimation">
							<div className="grid p-4 justify-self-center">{children}</div>
						</ScrollArea>
						{/* Footer component */}
						<div className="grid">
							<Footer />
						</div>
					</div>
					{/* Toaster component for displaying notifications */}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
