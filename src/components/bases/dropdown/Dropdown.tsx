import React from 'react';
import { Dropdown as AntdDropdown, DropdownProps } from 'antd';

import { I_DefaultProviderProps } from '@/shared/interfaces';

import '@/components/bases/dropdown/dropdown.scss';

const Dropdown: React.FC<
	I_DefaultProviderProps & {
		menu?: DropdownProps['menu'];
		arrow?: DropdownProps['arrow'];
		trigger?: DropdownProps['trigger'];
		placement?: DropdownProps['placement'];
		disabled?: DropdownProps['disabled'];
		onOpenChange?: DropdownProps['onOpenChange'];
	}
> = ({
	children,
	menu = [] as DropdownProps['menu'],
	arrow = false,
	trigger = ['hover'],
	placement = 'bottomLeft',
	disabled = false,
	onOpenChange,
}) => {
	const handleOnOpenChange: DropdownProps['onOpenChange'] = (open, info) => {
		if (onOpenChange !== undefined) onOpenChange(open, info);
	};

	return (
		<>
			<AntdDropdown
				menu={menu}
				arrow={arrow}
				trigger={trigger}
				placement={placement}
				disabled={disabled}
				onOpenChange={handleOnOpenChange}
			>
				<div className="dropdown-child-wrapper">{children}</div>
			</AntdDropdown>
		</>
	);
};

export default Dropdown;
