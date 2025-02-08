import { getLocalTheme, getSystemTheme } from '@/shared/utils';

const light = {
	'color-white': '#ffffff',
	'color-backdrop': '#00000080',
	'color-background-001': '#fdfdfc',
	'color-background-002': 'rgba(253, 253, 252, 0.8)',
	'color-text-001': '#1b1b18',
	'color-text-002': '#706f6c',
	'color-stroke-001': '#0000000f',
	'color-shadow-001': '0px 1px 4px #92a1b066',
	'skeleton-gradient-from-color': 'rgba(22, 22, 21, 0.06)',
	'skeleton-gradient-to-color': 'rgba(22, 22, 21, 0.15)',
};

const dark = {
	'color-white': '#ffffff',
	'color-backdrop': '#00000080',
	'color-background-001': '#161615',
	'color-background-002': 'rgba(21, 21, 20, 0.8)',
	'color-text-001': '#ededec',
	'color-text-002': '#a1a09a',
	'color-stroke-001': '#f8f8f80f',
	'color-shadow-001': '0px 1px 4px #2f2f5666',
	'skeleton-gradient-from-color': 'rgba(253, 253, 252, 0.06)',
	'skeleton-gradient-to-color': 'rgba(253, 253, 252, 0.15)',
};

export const theme = () => {
	let localTheme = getLocalTheme();
	if (localTheme === 'auto') {
		localTheme = getSystemTheme();
	}
	if (localTheme === 'dark') return dark;
	return light;
};
