import Private from '@/routers/middlewares/Private';
import { I_Router } from '@/shared/interfaces';

export const privateRouter = {
	id: 'auth-router',
	element: <Private />,
	children: [],
} as I_Router;
