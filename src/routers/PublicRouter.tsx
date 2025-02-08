import { I_Router } from '@/shared/interfaces';
import Public from '@/routers/middlewares/Public';

import Home from '@/pages/public/Home';

export const publicRouter = {
	id: 'public-router',
	element: <Public />,
	children: [
		{
			id: 'home-router',
			path: '/',
			element: <Home />,
		},
	],
} as I_Router;
