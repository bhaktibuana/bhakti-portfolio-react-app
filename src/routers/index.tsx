import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { T_Routers } from '@/shared/types';

import BeforeEach from '@/routers/middlewares/BeforeEach';
import { publicRouter } from '@/routers/PublicRouter';
import { privateRouter } from '@/routers/PrivateRouter';
import { authRouter } from '@/routers/AuthRouter';
import { notFoundRouter } from '@/routers/NotFoundRouter';

const AppRouters = () => {
	const [routers] = useState<T_Routers>([
		publicRouter,
		privateRouter,
		authRouter,
		notFoundRouter,
	] as T_Routers);

	const routes = () => {
		return routers.map((route) => {
			if (route.children === undefined)
				return (
					<Route
						key={route.id}
						path={route.path}
						element={route.element}
					/>
				);

			return (
				<Route key={route.id} element={route.element}>
					{route.children.map((child) => (
						<Route
							key={child.id}
							path={child.path}
							element={child.element}
						/>
					))}
				</Route>
			);
		});
	};

	return (
		<>
		<BrowserRouter>
			<BeforeEach />

			<Routes>{routes()}</Routes>
		</BrowserRouter>
		</>
	);
};

export default AppRouters;
