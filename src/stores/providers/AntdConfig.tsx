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
				},
			}}
		>
			{props.children}
		</ConfigProvider>
		</>
	);
};

export default AntdConfigProvider;
