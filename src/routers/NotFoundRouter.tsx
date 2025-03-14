import { I_Router } from '@/shared/interfaces';
import NotFound from '@/pages/public/not-found/NotFound';

export const notFoundRouter = {
	id: 'not-found-router',
	path: '/*',
	element: <NotFound />,
} as I_Router;
