import React from 'react';

import { I_DefaultProviderProps } from '@/shared/interfaces';
import {
	AuthProvider,
	ThemeProvider,
	ScreenProvider,
	AntdConfigProvider,
} from '@/stores/providers';

const MultiProvider: React.FC<I_DefaultProviderProps> = (props) => {
	const providers = [
		AuthProvider,
		ThemeProvider,
		ScreenProvider,
		AntdConfigProvider,
	];

	return providers.reduceRight((child, Provider) => {
		return <Provider>{child}</Provider>;
	}, props.children);
};

export default MultiProvider;
