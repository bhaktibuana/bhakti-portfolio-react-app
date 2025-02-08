import React from 'react';

import { withPublicPageLayout } from '@/components/layouts/public/page';

const Home = () => {
	return (
		<>
			<div>Home page</div>
		</>
	);
};

const Component = withPublicPageLayout(Home);

export default Component;
