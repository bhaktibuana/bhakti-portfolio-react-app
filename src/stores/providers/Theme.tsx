import React, { useState } from 'react';

import { ThemeContext } from '@/stores/contexts';
import { I_DefaultProviderProps } from '@/shared/interfaces';
import { T_ThemeType } from '@/shared/types';
import {
	getLocalTheme,
	getSystemTheme,
	setAppTheme,
	setLocalTheme,
} from '@/shared/utils';

const ThemeProvider: React.FC<I_DefaultProviderProps> = (props) => {
	const [theme, setTheme] = useState<T_ThemeType>('light');

	const setThemeData = (value: T_ThemeType): void => {
		setTheme(value);
		setLocalTheme(value);

		if (value === 'auto') {
			setAppTheme(getSystemTheme());
		} else {
			setAppTheme(value);
		}
	};

	const initTheme = () => {
		const defaultTheme: T_ThemeType = getSystemTheme();
		let localTheme = getLocalTheme();

		if (localTheme) {
			setTheme(localTheme as T_ThemeType);
			if (localTheme === 'auto') {
				localTheme = getSystemTheme();
			}
			setAppTheme(localTheme as T_ThemeType);
		} else {
			setLocalTheme(defaultTheme as T_ThemeType);
			setTheme(defaultTheme as T_ThemeType);
			setAppTheme(defaultTheme as T_ThemeType);
		}
	};

	return (
		<>
		<ThemeContext.Provider
			value={{
				theme,
				setTheme: setThemeData,
				initTheme,
			}}
		>
			{props.children}
		</ThemeContext.Provider>
		</>
	);
};

export default ThemeProvider;
