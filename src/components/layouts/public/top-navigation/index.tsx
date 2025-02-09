import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuProps } from 'antd';

import { useScreenContext, useThemeContext } from '@/stores/contexts';
import { T_ThemeType } from '@/shared/types';
import avatarImage from '@/assets/images/avatar.jpg';

import Avatar from '@/components/bases/avatar/Avatar';
import Dropdown from '@/components/bases/dropdown/Dropdown';
import Icon from '@/components/bases/icon/Icon';

import '@/components/layouts/public/top-navigation/index.scss';

const TopNavigation = () => {
	const navigate = useNavigate();
	const { type: screenType } = useScreenContext();
	const { theme, setTheme } = useThemeContext();

	const [dropdownStatus, setDropdownStatus] = useState('inactive');

	const handleClickAvatar = () => {
		navigate('/asd');
	};

	const handleOpenDropdown = (state: boolean) => {
		setDropdownStatus(state ? 'active' : 'inactive');
	};

	const handleDropdownItemClick: MenuProps['onClick'] = (e) => {
		setTheme(e.key as T_ThemeType);
	};

	const dropdownItems: MenuProps['items'] = useMemo(
		() => [
			{
				key: 'auto',
				label: 'Automatic',
				icon: (
					<div className="dropdown-item-icon-wrapper">
						{theme === 'auto' && (
							<Icon name="check" stroke={2.5} />
						)}
					</div>
				),
				disabled: false,
				danger: false,
			},
			{
				key: 'light',
				label: 'Light',
				icon: (
					<div className="dropdown-item-icon-wrapper">
						{theme === 'light' && (
							<Icon name="check" stroke={2.5} />
						)}
					</div>
				),
				disabled: false,
				danger: false,
			},
			{
				key: 'dark',
				label: 'Dark',
				icon: (
					<div className="dropdown-item-icon-wrapper">
						{theme === 'dark' && (
							<Icon name="check" stroke={2.5} />
						)}
					</div>
				),
				disabled: false,
				danger: false,
			},
		],
		[theme],
	);

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
					<Dropdown
						menu={{
							items: dropdownItems,
							onClick: handleDropdownItemClick,
						}}
						placement="bottomRight"
						arrow={{ pointAtCenter: true }}
						trigger={['click']}
						onOpenChange={handleOpenDropdown}
					>
						<button className={`icon-button ${dropdownStatus}`}>
							<Icon
								name={
									theme === 'light'
										? 'sun-filled'
										: 'moon-filled'
								}
								size={17}
							/>
						</button>
					</Dropdown>
				</div>
			</div>
		</>
	);
};

export default TopNavigation;
