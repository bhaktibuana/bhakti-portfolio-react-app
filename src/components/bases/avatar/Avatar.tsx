import React, { useMemo } from 'react';
import { Avatar as AntdAvatar, AvatarProps, Skeleton } from 'antd';

import '@/components/bases/avatar/avatar.scss';

const Avatar = ({
	loading = false,
	shape = 'circle',
	size = 'default',
	alt,
	icon,
	src,
	onClick,
	clickable = false,
}: {
	loading?: boolean;
	shape?: AvatarProps['shape'];
	size?: number | 'large' | 'small' | 'default';
	alt?: AvatarProps['alt'];
	icon?: AvatarProps['icon'];
	src?: AvatarProps['src'];
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	clickable?: boolean;
}) => {
	const isActive = useMemo(() => {
		return !loading && clickable ? 'active' : '';
	}, [loading, clickable]);

	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (isActive === 'active' && onClick !== undefined) onClick(e);
	};

	return (
		<>
		<div className={`avatar-wrapper ${isActive}`} onClick={handleClick}>
			{loading ? (
				<Skeleton.Avatar active shape={shape} size={size} />
			) : (
				<AntdAvatar
					shape={shape}
					size={size}
					alt={alt}
					icon={icon}
					src={src}
				/>
			)}{' '}
		</div>
		</>
	);
};

export default Avatar;
