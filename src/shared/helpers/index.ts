import CryptoJS from 'crypto-js';
import { AxiosError } from 'axios';

import { APP_KEY } from '@/shared/constants';

/**
 * Crypto Helpers
 */
/**
 * AES Encrypt
 *
 * @param payload
 * @returns
 */
export const aesEncrypt = (payload: string) => {
	const IV = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');
	return CryptoJS.AES.encrypt(payload, CryptoJS.enc.Utf8.parse(APP_KEY), {
		iv: IV,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
	}).toString();
};

/**
 * AES Decrypt
 *
 * @param payload
 * @returns
 */
export const aesDecrypt = (payload: string) => {
	try {
		const IV = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');

		const bytes = CryptoJS.AES.decrypt(
			payload,
			CryptoJS.enc.Utf8.parse(APP_KEY),
			{
				iv: IV,
				mode: CryptoJS.mode.CBC,
				padding: CryptoJS.pad.Pkcs7,
			},
		);

		const decrypted = bytes.toString(CryptoJS.enc.Utf8);

		if (!decrypted) throw new Error('Decryption failed');

		return decrypted;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		return null;
	}
};

/**
 * Axios Helpers
 */
/**
 * Parse Axios error
 *
 * @param error
 * @returns
 */
export const axiosErrorHandler = (error: unknown) => {
	if (error instanceof AxiosError) return error;
	return null;
};
