import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuProps } from 'antd';

import { useScreenContext, useThemeContext } from '@/stores/contexts';
import { T_ThemeType } from '@/shared/types';
import { APP_THEME_OPTIONS, PUBLIC_NAV_MENU_ITEMS } from '@/shared/constants';
import avatarImage from '@/assets/images/avatar.jpg';

import Avatar from '@/components/bases/avatar/Avatar';
import Dropdown from '@/components/bases/dropdown/Dropdown';
import Icon from '@/components/bases/icon/Icon';
import TopNavButton from '@/components/bases/button/TopNavButton';

import '@/components/layouts/public/top-navigation/index.scss';

const TopNavigation = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { type: screenType } = useScreenContext();
	const { theme, setTheme } = useThemeContext();

	const [dropdownStatus, setDropdownStatus] = useState('inactive');

	const handleClickAvatar: React.MouseEventHandler<HTMLAnchorElement> = (
		e,
	) => {
		e.preventDefault();
		navigate('/');
	};

	const handleOpenDropdown = (state: boolean) => {
		setDropdownStatus(state ? 'active' : 'inactive');
	};

	const handleDropdownItemClick: MenuProps['onClick'] = (e) => {
		setTheme(e.key as T_ThemeType);
	};

	const dropdownItems: MenuProps['items'] = useMemo(() => {
		return APP_THEME_OPTIONS.map((item) => ({
			...item,
			disabled: false,
			danger: false,
			icon: (
				<div className="dropdown-item-icon-wrapper">
					{theme === item.key && <Icon name="check" stroke={2.5} />}
				</div>
			),
		}));
	}, [theme]);

	const menuItems = useMemo(() => {
		return (
			<>
				{PUBLIC_NAV_MENU_ITEMS.map((item, index) => {
					const isActive =
						item.to === '/'
							? item.to === location.pathname
							: location.pathname.includes(item.to);

					return (
						<TopNavButton
							actionType="navigate"
							key={index}
							label={item.label}
							to={item.to}
							active={isActive}
						/>
					);
				})}
			</>
		);
	}, [location.pathname]);

	return (
		<>
		<div className="top-nav-container">
			<div className={`top-nav-wrapper ${screenType}`}>
				{/* Left content */}
				{screenType === 'desktop' && (
					<a href="/" onClick={handleClickAvatar}>
						<Avatar
							loading={false}
							size={32}
							src={avatarImage}
						/>
					</a>
				)}

				{/* Mid content */}
				<div className="top-nav-menu-wrapper">{menuItems}</div>

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
