import React from 'react';
import {
	IconProps,
	IconSunFilled,
	IconMoonFilled,
	IconCheck,
} from '@tabler/icons-react';

import { T_IconName } from '@/shared/types';

const iconMap: Record<T_IconName, React.ElementType> = {
	'sun-filled': IconSunFilled,
	'moon-filled': IconMoonFilled,
	check: IconCheck,
};

const Icon = ({
	name,
	size = 16,
	stroke = 1,
}: {
	name: T_IconName;
	size?: IconProps['size'];
	stroke?: IconProps['stroke'];
}) => {
	const IconComponent = iconMap[name];
	return IconComponent ? (
		<>
		<IconComponent size={size} stroke={stroke} />
		</>
	) : (
		<></>
	);
};

export default Icon;
