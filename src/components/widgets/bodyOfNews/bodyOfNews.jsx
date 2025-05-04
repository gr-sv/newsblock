import React from 'react';
import { data } from '../../../data.js';
import { Button, Flex } from 'antd';
import s from './bodyOfNews.module.scss';
import { CaretDownFilled } from '@ant-design/icons';
import Tags from '../../shared/tags/tags.jsx';

function BodyOfNews () {
	return (
		<Flex vertical gap='middle'>
			<Flex vertical align='start'>
				<p>{data?.AB}</p>

				<Button type='text' icon={<CaretDownFilled />} iconPosition='end'>
					<span className={s.showMoreBtn}>Show more</span>
				</Button>
			</Flex>

			<Tags />
			
			<Button variant='solid' className={s.blueBtn}>Original Source</Button>
		</Flex>
		
	)
}

export default BodyOfNews;