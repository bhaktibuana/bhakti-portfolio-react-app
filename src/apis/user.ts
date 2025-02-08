import { AxiosResponse } from 'axios';

import { http } from '@/shared/libs/http';
import { I_MeResBody } from '@/shared/interfaces';

const urlType = 'app';
const baseURL = '/api/user';

export const userMe = (): Promise<AxiosResponse<I_MeResBody>> => {
	const url = `${baseURL}/me`;
	return http(urlType).get(url);
};
