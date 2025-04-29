import React from 'react';
import classNames from 'classnames';
import s from './icon.module.scss'
import { Typography } from 'antd';

const { Text } = Typography;

function Icon ({ className, icon, emptyIcon, ...otherProps }) {
	return (
		<div
			{...otherProps}
			className={classNames(className, {
				[s.icon]: icon,
				[s.emptyIcon]: emptyIcon,
			})}>

			<Text className={s.iconText}>i</Text>

		</div>
	)
}

export default Icon;