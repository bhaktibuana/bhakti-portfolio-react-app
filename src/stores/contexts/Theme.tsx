import { createContext, useContext } from 'react';

import { I_ThemeContext } from '@/shared/interfaces';

export const ThemeContext = createContext<I_ThemeContext>({} as I_ThemeContext);

export const useThemeContext = () => {
	return useContext(ThemeContext);
};
