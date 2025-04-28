import React from 'react';
import { Flex, Typography } from 'antd';
import { data } from '../../../data.js';
import DateOfNews from '../../shared/dateOfNews/dateOfNews';
import Reach from '../../shared/reach/reach';
import Sentiment from '../../shared/sentiment/sentiment';
import TopTraffic from '../../shared/topTraffic/topTraffic';

const { Link, Text, Title } = Typography;


function HeaderOfNews () {
	return (
		<Flex vertical>
			<Flex justify='space-between'>
				<Flex gap='middle' align='center'>
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

			<Flex>
				<Title>{data?.TI}</Title>
			</Flex>

			<Flex justify='start' gap='middle'>
				<Link href={data?.DOM}>{data?.DOM}</Link>
				<Text>{data?.CNTR}</Text>
				<Text>{data?.LANG}</Text>
				<Text>{data?.AU}</Text>
			</Flex>
		</Flex>
		
	)	
}

export default HeaderOfNews;
