import React from 'react';
import classNames from 'classnames';
import s from './icon.module.scss'
import { Flex } from 'antd';

function Icon ({ className, infoIcon, emptyIcon, ...otherProps }) {
	return (
		<Flex
			align='center'
			justify='center'
			{...otherProps}
			className={classNames(className, {
				[s.infoIcon]: infoIcon,
				[s.emptyIcon]: emptyIcon,
			})}>

			<p className={s.iconText}>i</p>
		</Flex>
	)
}

export default Icon;