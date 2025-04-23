import React from 'react';
import { data } from '../../../data.js';
import { Flex, Typography } from 'antd';
const { Text } = Typography;

function TopTraffic () {

	return (
		<Flex gap='5px'>
			<Text>Top Traffic:</Text>
			
			{(data?.TRAFFIC).map(traffic => (
				<Text>
					{`${traffic.value} ${Math.round(traffic.count * 100)}%`}
				</Text>	
			))}
		</Flex>
	)
}

export default TopTraffic;