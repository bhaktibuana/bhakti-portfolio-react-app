import { aesDecrypt, aesEncrypt } from '@/shared/helpers';
import { ACCESS_TOKEN_KEY_NAME } from '@/shared/constants';

/**
 * Access Token Utils
 */
const findAccessTokenKey = (name: string) => {
	const localStorageKeys = Object.keys(localStorage);
	return localStorageKeys.length > 0
		? localStorageKeys.find((key) => aesDecrypt(key) === name)
		: undefined;
};

export const getAccessToken = () => {
	const token = localStorage.getItem(
		findAccessTokenKey(ACCESS_TOKEN_KEY_NAME) || '',
	);
	return token === null ? null : aesDecrypt(token);
};

export const setAccessToken = (payload: string) => {
	payload = aesEncrypt(payload);
	localStorage.setItem(ACCESS_TOKEN_KEY_NAME, payload);
};

export const removeAccessToken = () => {
	const key = localStorage.getItem(
		findAccessTokenKey(ACCESS_TOKEN_KEY_NAME) || '',
	);
	if (key !== null) localStorage.removeItem(key);
};
