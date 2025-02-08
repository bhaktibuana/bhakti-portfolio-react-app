import React, { ReactNode } from 'react';

import { T_ThemeType } from '@/shared/types';

/**
 * Provider Interfaces
 */
export interface I_DefaultProviderProps {
	children?: ReactNode;
}

/**
 * Context Interfaces
 */
export interface I_UserContext {
	user: I_MeResBody['data'];
	setUser: (value: I_MeResBody['data']) => void;
}

export interface I_ThemeContext {
	theme: T_ThemeType;
	setTheme: (value: T_ThemeType) => void;
	initTheme: () => void;
}

/**
 * Router Interfaces
 */
export interface I_Router {
	id: string;
	path?: string;
	element: React.JSX.Element;
	children?: I_RouterChild[];
}

export interface I_RouterChild {
	id: string;
	path: string;
	element: React.JSX.Element;
}

/**
 * Access Token Interfaces
 */
export interface I_AccessTokenPayload {
	id: number;
}

/**
 * API Interfaces
 */
export interface I_ApiUrl {
	app: string;
}

/**
 * API Query Interfaces
 */

/**
 * API Response Interfaces
 */
export interface I_MeResBody {
	data: {
		id: number;
		name: string;
		email: string;
	};
}
