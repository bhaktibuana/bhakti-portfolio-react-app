import CryptoJS from 'crypto-js';
import { AxiosError } from 'axios';

import { APP_KEY } from '@/shared/constants';

/**
 * Crypto Helpers
 */
export const aesEncrypt = (payload: string) => {
	return CryptoJS.AES.encrypt(payload, APP_KEY).toString();
};

export const aesDecrypt = (payload: string) => {
	return CryptoJS.AES.decrypt(payload, APP_KEY).toString(CryptoJS.enc.Utf8);
};

/**
 * Axios Helpers
 */
export const axiosErrorHandler = (error: unknown) => {
	if (error instanceof AxiosError) return error;
	return null;
};
