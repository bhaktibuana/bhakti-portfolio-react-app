import CryptoJS from 'crypto-js';
import { AxiosError } from 'axios';

import { APP_KEY } from '@/shared/constants';

/**
 * Crypto Helpers
 */
export const aesEncrypt = (payload: string) => {
	const IV = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');
	return CryptoJS.AES.encrypt(payload, CryptoJS.enc.Utf8.parse(APP_KEY), {
		iv: IV,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
	}).toString();
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
