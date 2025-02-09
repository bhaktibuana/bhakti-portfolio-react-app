import React from 'react';

import { withPublicPageLayout } from '@/components/layouts/public/page';

const Blog = () => {
	return (
		<>
		<div>
			<span>Blog Page</span>
		</div>
		</>
	);
};

const Component = withPublicPageLayout(Blog);

export default Component;
