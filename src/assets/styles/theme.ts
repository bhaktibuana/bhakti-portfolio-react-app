import { getLocalTheme, getSystemTheme } from '@/shared/utils';

const light = {
	color_white: '#ffffff',
	color_backdrop: '#00000080',
	color_background_001: '#fdfdfc',
	color_text_001: '#131313',
	color_stroke_001: '#0000000f',
	color_shadow_001: '0px 1px 4px #92a1b066',
};

const dark = {
	color_white: '#ffffff',
	color_backdrop: '#00000080',
	color_background_001: '#161615',
	color_text_001: '#ffffff',
	color_stroke_001: '#f8f8f80f',
	color_shadow_001: '0px 1px 4px #2f2f5666',
};

export const theme = () => {
	let localTheme = getLocalTheme();
	if (localTheme === 'auto') {
		localTheme = getSystemTheme();
	}
	if (localTheme === 'dark') return dark;
	return light;
};
