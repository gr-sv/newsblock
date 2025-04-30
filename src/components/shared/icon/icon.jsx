import React from 'react';
import classNames from 'classnames';
import s from './icon.module.scss'
import { Flex, Typography } from 'antd';

const { Text } = Typography;

function Icon ({ className, icon, emptyIcon, ...otherProps }) {
	return (
		<Flex
			align='center'
			justify='center'
			{...otherProps}
			className={classNames(className, {
				[s.icon]: icon,
				[s.emptyIcon]: emptyIcon,
			})}>

			<Text className={s.iconText}>i</Text>

		</Flex>
	)
}

export default Icon;