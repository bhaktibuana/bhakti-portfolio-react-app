import React, { ReactNode, useEffect } from 'react';

import { withScreenLayout } from '@/components/layouts/screen';
import { scrollTopTop } from '@/shared/utils';
import { useScreenContext } from '@/stores/contexts';

import '@/components/layouts/public/page/PublicPageLayout.scss';

const PublicPageLayout = ({ children }: { children: ReactNode }) => {
	const { type: screenType } = useScreenContext();

	useEffect(() => {
		scrollTopTop();
	}, []);

	return (
		<>
		<div className="_page-container">
			<div
				className={`_public-page-container container-${screenType}`}
			>
				{children}
			</div>
		</div>
		</>
	);
};

const Component = withScreenLayout(PublicPageLayout);

export default Component;
