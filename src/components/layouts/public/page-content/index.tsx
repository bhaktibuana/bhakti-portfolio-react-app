import React from 'react';

import { I_DefaultProviderProps } from '@/shared/interfaces';

import '@/components/layouts/public/page-content/index.scss';

const PageContent: React.FC<
	I_DefaultProviderProps & {
		title: string;
		titleAlign?: 'left' | 'right';
		disabled?: boolean;
	}
> = ({ children, title, titleAlign = 'left', disabled = false }) => {
	return (
		<>
		<section
			className={`public-page-content-section ${
				disabled ? 'disabled' : ''
			}`}
		>
			<h2 className={`content-section-title align-${titleAlign}`}>
				{title}
			</h2>

			{children}
		</section>
		</>
	);
};

export default PageContent;
