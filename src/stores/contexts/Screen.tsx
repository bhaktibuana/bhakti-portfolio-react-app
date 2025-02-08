import { createContext, useContext } from 'react';

import { I_ScreenContext } from '@/shared/interfaces';

export const ScreenContext = createContext<I_ScreenContext>(
	{} as I_ScreenContext,
);

export const useScreenContext = () => {
	return useContext(ScreenContext);
};
