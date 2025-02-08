import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import { notification } from 'antd';

import { getAccessToken, removeAccessToken } from '@/shared/utils';
import { useThemeContext, useUserContext } from '@/stores/contexts';
import { I_MeResBody } from '@/shared/interfaces';
import { userMe } from '@/apis/user';
import { axiosErrorHandler } from '@/shared/helpers';

const BeforeEach = () => {
	const token = getAccessToken();

	const location = useLocation();
	const { initTheme } = useThemeContext();
	const { setUser } = useUserContext();
	const { decodedToken, isExpired } = useJwt(token || '');

	useEffect(() => {
		initTheme();
	}, [initTheme]);

	useEffect(() => {
		const getMe = async (): Promise<void> => {
			try {
				const response = await userMe();
				setUser(response.data.data);
			} catch (e) {
				const error = axiosErrorHandler(e);
				const description = error
					? error.message
					: 'Authentication failed';

				removeAccessToken();
				setUser({} as I_MeResBody['data']);
				notification['error']({
					message: 'User Authentication',
					description,
					placement: 'bottomRight',
				});
			}
		};

		if (decodedToken === null) return;
		if (isExpired) {
			removeAccessToken();
			setUser({} as I_MeResBody['data']);
		} else {
			getMe();
		}
	}, [location.pathname, decodedToken, isExpired, setUser]);

	return null;
};

export default BeforeEach;
