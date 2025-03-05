import { I_Router } from '@/shared/interfaces';
import Public from '@/routers/middlewares/Public';

import Home from '@/pages/public/home/Home';
import About from '@/pages/public/about/About';
import Blog from '@/pages/public/blog/Blog';

export const publicRouter = {
	id: 'public-router',
	element: <Public />,
	children: [
		{
			id: 'home-router',
			path: '/',
			element: <Home />,
		},
		{
			id: 'about-router',
			path: '/about',
			element: <About />,
		},
		{
			id: 'blog-router',
			path: '/blog',
			element: <Blog />,
		},
	],
} as I_Router;
