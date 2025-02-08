import React, { useState } from 'react';

import { UserContext } from '@/stores/contexts';
import { I_DefaultProviderProps, I_MeResBody } from '@/shared/interfaces';

const UserProvider: React.FC<I_DefaultProviderProps> = (props) => {
	const [user, setUser] = useState<I_MeResBody['data']>(
		{} as I_MeResBody['data'],
	);

	const setUserData = (value: I_MeResBody['data']): void => {
		setUser(value);
	};

	return (
		<>
		<UserContext.Provider
			value={{
				user,
				setUser: setUserData,
			}}
		>
			{props.children}
		</UserContext.Provider>
		</>
	);
};

export default UserProvider;
