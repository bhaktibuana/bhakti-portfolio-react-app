import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useScreenContext } from '@/stores/contexts';
import avatarImage from '@/assets/images/avatar.jpg';

import Avatar from '@/components/bases/avatar/Avatar';

import '@/components/layouts/public/top-navigation/index.scss';

const TopNavigation = () => {
	const navigate = useNavigate();
	const { type: screenType } = useScreenContext();

	const handleClickAvatar = () => {
		navigate('/asd');
	};

	return (
		<>
		<div className="top-nav-container">
			<div className={`top-nav-wrapper ${screenType}`}>
				{/* Left content */}
				{screenType === 'desktop' && (
					<Avatar
						clickable
						loading={false}
						size={32}
						src={avatarImage}
						onClick={handleClickAvatar}
					/>
				)}

				{/* Mid content */}

				{/* Right content */}
			</div>
		</div>
		</>
	);
};

export default TopNavigation;
