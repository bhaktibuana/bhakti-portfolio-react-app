import React, { useEffect, useMemo, useRef, useState } from 'react';

import { I_DefaultProviderProps } from '@/shared/interfaces';

import '@/components/layouts/motion/index.scss';

const Motion: React.FC<I_DefaultProviderProps & { delayLevel?: number }> = ({
	children,
	delayLevel = 1,
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	const delay = useMemo(() => {
		const baseDelay = 0.2;
		const multiplier = 0.2;
		return baseDelay + delayLevel * multiplier;
	}, [delayLevel]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.3 },
		);

		if (ref.current) observer.observe(ref.current);

		return () => observer.disconnect();
	}, []);

	return (
		<>
			<div
				ref={ref}
				className={`motion-reveal ${isVisible ? 'show' : ''}`}
				style={{
					transition: `opacity ${delay}s ease-out, transform ${delay}s ease-out`,
				}}
			>
				{children}
			</div>
		</>
	);
};

export default Motion;
