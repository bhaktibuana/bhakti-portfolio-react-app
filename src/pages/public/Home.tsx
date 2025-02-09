import React from 'react';

import { withPublicPageLayout } from '@/components/layouts/public/page';

const Home = () => {
	return (
		<>
			<div>
				<span>Bhakti Mega Buana</span>
				<br />
				<span>I develop & automate Web3 solutions</span>
			</div>
		</>
	);
};

const Component = withPublicPageLayout(Home);

export default Component;
