import axios, { AxiosResponse, AxiosError, AxiosInstance } from 'axios';

import { getAccessToken, removeAccessToken } from '@/shared/utils';
import { env } from '@/configs';
import { I_ApiUrl } from '@/shared/interfaces';
import { T_ApiUrlType } from '@/shared/types';

const apiUrl: I_ApiUrl = {
	app: env.APP_API_URL,
};

const token = getAccessToken();

const globalResponseHandler = (response: AxiosResponse) => response;

const globalErrorHandler = (error: AxiosError) => {
	const status = error.response?.status;
	const isTokenExpired = status === 401;

	const origin = window.location.origin;

	if (isTokenExpired) {
		removeAccessToken();

		const originalRequest = error.config;
		delete originalRequest?.headers.Authorization;
		history.pushState(null, '', origin);
	}

	return Promise.reject(error);
};

const clientConfig = (
	urlType: T_ApiUrlType = 'app',
	accessToken: string | null = token,
): AxiosInstance =>
	axios.create({
		baseURL: apiUrl[urlType],
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});

export const http = (
	urlType: T_ApiUrlType = 'app',
	accessToken: string | null = token,
): AxiosInstance => {
	const axiosClient = clientConfig(urlType, accessToken);
	axiosClient.interceptors.response.use(
		globalResponseHandler,
		globalErrorHandler,
	);
	return axiosClient;
};
