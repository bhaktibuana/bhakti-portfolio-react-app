import { createContext, useContext } from 'react';

import { I_UserContext } from '@/shared/interfaces';

export const UserContext = createContext<I_UserContext>({} as I_UserContext);

export const useUserContext = () => {
	return useContext(UserContext);
};
