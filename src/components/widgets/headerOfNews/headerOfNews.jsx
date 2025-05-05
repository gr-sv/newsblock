import React from 'react';
import classNames from 'classnames';
import { Flex, Typography, Space } from 'antd';
import { 
	GlobalOutlined,
	UserOutlined,
	FlagOutlined,
	BookOutlined
} from '@ant-design/icons';
import { data } from '../../../data.js';
import DateOfNews from '../../shared/dateOfNews/dateOfNews';
import Reach from '../../shared/reach/reach';
import Sentiment from '../../shared/sentiment/sentiment';
import TopTraffic from '../../shared/topTraffic/topTraffic';
import Icon from '../../shared/icon/icon.jsx';
import s from './headerOfNews.module.scss';

const { Link } = Typography;

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

					<Reach className={s.reachContent} />
					
					<TopTraffic className={s.topTraffic} />
				</Flex>

				<Flex gap='middle'>
					<Sentiment className={s.sentiment} />
					<Icon infoIcon />
					<Icon emptyIcon />
				</Flex>			
			</Flex>

			<h1 className={s.title}>{data?.TI}</h1>
			
			<Flex justify='start' gap='middle'>
				<Space>
					<GlobalOutlined />
					<Link href={data?.DOM}>
						<span className={s.linkText}>{data?.DOM}</span>
					</Link>
				</Space>
				
				<Space className={s.country}>
					<FlagOutlined />
					<p>{data?.CNTR}</p>
				</Space>
				
				<Space className={s.lang}>
					<BookOutlined />
					<p>{data?.LANG}</p>
				</Space>
				
				<Space className={s.author}>
					<UserOutlined />
					<p>{data?.AU}</p>
				</Space>
			</Flex>
		</Flex>
	)
}

export default HeaderOfNews;
