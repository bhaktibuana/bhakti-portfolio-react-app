import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import '@/components/bases/button/topNavButton.scss';

const TopNavButton: React.FC<{
	label: string;
	actionType?: 'default' | 'navigate';
	to?: string;
	target?: React.HTMLAttributeAnchorTarget;
	disabled?: boolean;
	active?: boolean;
	onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}> = ({
	label,
	actionType = 'default',
	to,
	target,
	disabled = false,
	active = false,
	onClick,
}) => {
	const navigate = useNavigate();

	const isDisabled = useMemo(() => {
		return disabled ? 'disabled' : '';
	}, [disabled]);

	const isActive = useMemo(() => {
		return active ? 'active' : '';
	}, [active]);

	const handleClick: React.MouseEventHandler<
		HTMLAnchorElement | HTMLButtonElement
	> = (e) => {
		e.preventDefault();
		if (disabled) return;
		if (actionType === 'navigate' && to) {
			if (target === '_blank') {
				window.open(to, '_blank');
			} else {
				navigate(to);
			}
		}
		if (onClick !== undefined) onClick(e);
	};

	return (
		<>
		{actionType === 'navigate' ? (
			<a
				className={`top-nav-menu-button ${isActive} ${isDisabled}`}
				href={to}
				onClick={handleClick}
			>
				{label}
			</a>
		) : (
			<button
				className={`top-nav-menu-button ${isActive} ${isDisabled}`}
				onClick={handleClick}
			>
				{label}
			</button>
		)}
		</>
	);
};

export default TopNavButton;
