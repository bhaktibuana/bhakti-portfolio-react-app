import React, { useState } from 'react';

import { ThemeContext } from '@/stores/contexts';
import { I_DefaultProviderProps } from '@/shared/interfaces';
import { T_ThemeType } from '@/shared/types';
import {
	getSystemTheme,
	setAppTheme,
	setLocalTheme,
	initAppTheme,
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
		initAppTheme(setTheme);
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
