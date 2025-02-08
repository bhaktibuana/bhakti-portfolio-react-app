import React, { ReactNode, useEffect } from 'react';

import { T_ScreenType } from '@/shared/types';
import { useScreenContext } from '@/stores/contexts';

const ScreenLayout = ({ children }: { children: ReactNode }) => {
	const { setType, setSize } = useScreenContext();

	const generateScreenType = (): T_ScreenType => {
		const width = document.documentElement.clientWidth;
		const height = document.documentElement.clientHeight;

		setSize({ width, height });

		return width <= 768 ? 'mobile' : 'desktop';
	};

	const handleResizeWindow = (): void => {
		setType(generateScreenType());
	};

	useEffect(() => {
		window.addEventListener('resize', handleResizeWindow);

		return () => {
			window.removeEventListener('resize', handleResizeWindow);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
		<div>{children}</div>
		</>
	);
};

export default ScreenLayout;
