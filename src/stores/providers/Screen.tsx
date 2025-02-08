import React, { useState } from 'react';

import { ScreenContext } from '@/stores/contexts';
import { I_DefaultProviderProps, I_ScreenSize } from '@/shared/interfaces';
import { T_ScreenType } from '@/shared/types';

const ScreenProvider: React.FC<I_DefaultProviderProps> = (props) => {
	const [type, setType] = useState<T_ScreenType>('desktop');
	const [size, setSize] = useState<I_ScreenSize>({
		width: 0,
		height: 0,
	});

	const setTypeData = (value: T_ScreenType) => {
		setType(value);
	};

	const setSizeData = (value: I_ScreenSize) => {
		setSize(value);
	};

	return (
		<>
		<ScreenContext.Provider
			value={{
				type,
				size,
				setType: setTypeData,
				setSize: setSizeData,
			}}
		>
			{props.children}
		</ScreenContext.Provider>
		</>
	);
};

export default ScreenProvider;
