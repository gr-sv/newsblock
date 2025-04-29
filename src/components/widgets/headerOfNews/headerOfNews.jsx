import React from 'react';
import classNames from 'classnames';
import { Flex, Typography } from 'antd';
import { data } from '../../../data.js';
import DateOfNews from '../../shared/dateOfNews/dateOfNews';
import Reach from '../../shared/reach/reach';
import Sentiment from '../../shared/sentiment/sentiment';
import TopTraffic from '../../shared/topTraffic/topTraffic';
import Icon from '../../shared/icon/icon.jsx';
import s from './headerOfNews.module.scss';

const { Link, Text, Title } = Typography;


function HeaderOfNews ({ className, fullHeader, shortHeader, ...otherProps }) {
	return (
		<Flex
			vertical
			gap='middle'
			{...otherProps}
			className={classNames(className, {
				[s.fullHeader]: fullHeader,
				[s.shortHeader]: shortHeader,
		})}>
			<Flex justify='space-between'>
				<Flex gap='middle' align='center'>
					<DateOfNews />

					<Text className={s.reachContent}>
						<Reach />
					</Text>
					
					<TopTraffic className={s.noneTopTraffic} />
				</Flex>

				<Flex gap='small'>
					<Sentiment className={s.noneSentiment} />
					<Icon icon />
					<Icon emptyIcon />
				</Flex>			
			</Flex>

			<Title className={s.title}>{data?.TI}</Title>
			
			<Flex justify='start' gap='middle'>
				<Link className={s.link} href={data?.DOM}>{data?.DOM}</Link>
				<Text className={s.country}>{data?.CNTR}</Text>
				<Text className={`${s.noneLang} ${s.lang}`}>{data?.LANG}</Text>
				<Text className={s.author}>{data?.AU}</Text>
			</Flex>
		</Flex>
		
	)	
}

export default HeaderOfNews;
