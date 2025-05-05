import React from 'react';
import classNames from 'classnames';
import s from './topTraffic.module.scss';
import { data } from '../../../data.js';
import { Flex } from 'antd';


function TopTraffic ({ className, ...otherProps }) {
	return (
		<Flex
			gap='5px'
			{...otherProps}
			className={classNames(
				className,
		)}>
			<p className={s.textColor}>Top Traffic:</p>
			
			{(data?.TRAFFIC).map(traffic => (
				<p key={traffic.value}>
					<span className={s.valueColor}>{`${traffic.value === 'United States of America' ? 'USA' : traffic.value}`}</span> <span className={s.countColor}>{`${Math.round(traffic.count * 100)}%`}</span>
			  	</p>
			))}
		</Flex>
	)
}

export default TopTraffic;