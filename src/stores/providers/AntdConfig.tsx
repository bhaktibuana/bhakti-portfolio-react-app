import React, { useMemo } from 'react';
import { ConfigProvider } from 'antd';

import { I_DefaultProviderProps } from '@/shared/interfaces';
import { theme } from '@/assets/styles/theme';
import { useThemeContext } from '@/stores/contexts';

const AntdConfigProvider: React.FC<I_DefaultProviderProps> = (props) => {
	const { theme: appTheme } = useThemeContext();

	const colors = useMemo(() => {
		return theme();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [appTheme]);

	return (
		<>
		<ConfigProvider
			theme={{
				components: {
					Skeleton: {
						gradientFromColor:
							colors['skeleton-gradient-from-color'],
						gradientToColor:
							colors['skeleton-gradient-to-color'],
					},
					Dropdown: {
						colorText: colors['color-text-001'],
						colorBgElevated: colors['color-background-004'],
						controlItemBgHover: colors['color-background-003'],
						controlPaddingHorizontal: 12,
					},
				},
			}}
		>
			{props.children}
		</ConfigProvider>
		</>
	);
};

export default AntdConfigProvider;
