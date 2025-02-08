import Auth from '@/routers/middlewares/Auth';
import { I_Router } from '@/shared/interfaces';

export const authRouter = {
	id: 'auth-router',
	element: <Auth />,
	children: [
		// {
		// 	id: 'admin-login',
		// 	path: '/admin/login',
		// 	element: <AdminLogin />,
		// },
		// {
		// 	id: 'admin-register',
		// 	path: '/admin/register',
		// 	element: <AdminRegister />,
		// },
	],
} as I_Router;
