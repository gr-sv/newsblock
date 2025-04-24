import React from 'react';
import { Flex, Typography } from 'antd';
import DateOfNews from '../../shared/dateOfNews/dateOfNews';
import Reach from '../../shared/reach/reach';
import Sentiment from '../../shared/sentiment/sentiment';
import TopTraffic from '../../shared/topTraffic/topTraffic';

const { Text } = Typography;


function HeaderOfNews () {
	return (
		<Flex justify='space-between'>
			<Flex gap='middle'>
				<DateOfNews />
				<Text>
					<Reach /> Reach
				</Text>
				
				<TopTraffic />
			</Flex>

			<Flex gap='small'>
				<Sentiment />
				<div>i-icon</div>
				<div>empty-icon</div>
			</Flex>			
		</Flex>
	)	
}

export default HeaderOfNews;
