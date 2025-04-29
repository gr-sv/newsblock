import React from 'react';
import classNames from 'classnames';
import { data } from '../../../data.js';
import { Flex, Typography } from 'antd';

const { Text } = Typography;

function TopTraffic ({ className, ...otherProps }) {

	return (
		<Flex
			gap='5px'
			{...otherProps}
			className={classNames(
				className,
		)}>
			<Text>Top Traffic:</Text>
			
			{(data?.TRAFFIC).map(traffic => (
				<Text key={traffic.value}>
					{`${traffic.value === 'United States of America' ? 'USA' : traffic.value} ${Math.round(traffic.count * 100)}%`}
			  	</Text>
			))}
		</Flex>
	)
}

export default TopTraffic;