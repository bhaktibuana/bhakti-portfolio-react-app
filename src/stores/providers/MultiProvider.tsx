import React from 'react';

import { AuthProvider } from '@/stores/providers';
import { I_DefaultProviderProps } from '@/shared/interfaces';

const MultiProvider: React.FC<I_DefaultProviderProps> = (props) => {
	const providers = [AuthProvider];

	return providers.reduceRight((child, Provider) => {
		return <Provider>{child}</Provider>;
	}, props.children);
};

export default MultiProvider;
