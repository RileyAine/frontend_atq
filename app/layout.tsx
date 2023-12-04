import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

import { cn } from '../lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Separator } from '@/components/ui/separator';
import { Toaster } from '@/components/ui/toaster';

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
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
						<div className="grid items-start justify-center p-4">
							{children}
						</div>
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
