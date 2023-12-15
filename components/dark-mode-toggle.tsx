// Importing React, icons, and theme-related functionalities
import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

// Importing UI components
import { Button } from './ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './ui/tooltip';
import { Label } from './ui/label';

// DarkModeToggle component for toggling between light, dark, and system themes
export default function DarkModeToggle() {
	const { setTheme } = useTheme();

	return (
		// DropdownMenu for containing the dark mode toggle button and theme options
		<DropdownMenu>
			{/* TooltipProvider for providing a tooltip for the dark mode toggle */}
			<TooltipProvider>
				{/* Tooltip for explaining the purpose of the dark mode toggle */}
				<Tooltip>
					{/* TooltipTrigger to define the trigger element for the tooltip */}
					<TooltipTrigger asChild>
						{/* DropdownMenuTrigger as the trigger element for the dropdown menu */}
						<DropdownMenuTrigger
							asChild
							className="bg-white dark:bg-slate-950">
							{/* Button for the dark mode toggle */}
							<Button
								variant="outline"
								size="icon">
								{/* SunIcon for representing the light theme */}
								<SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
								{/* MoonIcon for representing the dark theme */}
								<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
								{/* Screen reader only text for accessibility */}
								<span className="sr-only">Toggle theme</span>
							</Button>
						</DropdownMenuTrigger>
					</TooltipTrigger>
					{/* TooltipContent for displaying the tooltip content */}
					<TooltipContent>
						{/* Label within the tooltip content */}
						<Label>Toggle theme</Label>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>

			{/* DropdownMenuContent for displaying the theme options */}
			<DropdownMenuContent align="end">
				{/* DropdownMenuItem for setting the light theme */}
				<DropdownMenuItem onClick={() => setTheme('light')}>
					Light
				</DropdownMenuItem>
				{/* DropdownMenuItem for setting the dark theme */}
				<DropdownMenuItem onClick={() => setTheme('dark')}>
					Dark
				</DropdownMenuItem>
				{/* DropdownMenuItem for setting the system theme */}
				<DropdownMenuItem onClick={() => setTheme('system')}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
