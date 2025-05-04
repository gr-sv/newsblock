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
					
					<TopTraffic className={s.noneTopTraffic} />
				</Flex>

				<Flex gap='small'>
					<Sentiment className={s.noneSentiment} />
					<Icon icon />
					<Icon emptyIcon />
				</Flex>			
			</Flex>

			<h1 className={s.title}>{data?.TI}</h1>
			
			<Flex justify='start' gap='middle'>
				<Space>
					<GlobalOutlined />
					<Link className={s.link} href={data?.DOM}>{data?.DOM}</Link>
				</Space>
				
				<Space>
					<FlagOutlined />
					<p className={s.country}>{data?.CNTR}</p>
				</Space>
				
				<Space>
					<BookOutlined />
					<p className={`${s.noneLang} ${s.lang}`}>{data?.LANG}</p>
				</Space>
				
				<Space>
					<UserOutlined />
					<p className={s.author}>{data?.AU}</p>
				</Space>
			</Flex>
		</Flex>
	)
}

export default HeaderOfNews;
