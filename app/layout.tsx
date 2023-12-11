import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

import { cn } from '../lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Toaster } from '@/components/ui/toaster';

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	title: 'Riley W',
	description: 'My personal Next.js app',
};

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
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<div className="grid grid-rows-site-layout h-screen">
						<div className="grid">
							<Header />
						</div>
						<ScrollArea className="grid items-start justify-self-center p-4 w-11/12 md:w-9/12 lg:w-7/12 xl:w-6/12 pageContentAnimation">
							<div className="grid">{children}</div>
						</ScrollArea>
						<div className="grid">
							<Footer />
						</div>
					</div>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
