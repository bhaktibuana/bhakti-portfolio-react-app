import React from 'react';

import ScreenLayout from '@/components/layouts/screen/ScreenLayout';

export const withScreenLayout = <P extends object>(
	Component: React.ComponentType<P>,
) => {
	return (props: P) => (
		<>
		<ScreenLayout>
			<Component {...props} />
		</ScreenLayout>
		</>
	);
};
