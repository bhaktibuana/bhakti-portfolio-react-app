import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import { notification } from 'antd';

import { getAccessToken, removeAccessToken } from '@/shared/utils';
import { useUserContext } from '@/stores/contexts';
import { I_MeResBody } from '@/shared/interfaces';
import { userMe } from '@/apis/user';
import { axiosErrorHandler } from '@/shared/helpers';

const BeforeEach = () => {
	const token = getAccessToken();

	const navigate = useNavigate();
	const { setUser } = useUserContext();
	const { decodedToken, isExpired } = useJwt(token || '');

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
	}, [navigate, decodedToken, isExpired, setUser]);

	return null;
};

export default BeforeEach;
