import React from 'react';

import PublicPageLayout from '@/components/layouts/public/page/PublicPageLayout';

export const withPublicPageLayout = <P extends object>(
	Component: React.ComponentType<P>,
) => {
	return (props: P) => (
		<>
		<PublicPageLayout>
			<Component {...props} />
		</PublicPageLayout>
		</>
	);
};
