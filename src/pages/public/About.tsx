import React from 'react';

import { withPublicPageLayout } from '@/components/layouts/public/page';

const About = () => {
	return (
		<>
		<div>
			<span>About Page</span>
		</div>
		</>
	);
};

const Component = withPublicPageLayout(About);

export default Component;
