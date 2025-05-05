import React from 'react';
import { data } from '../../../data.js';
import { Button, Flex } from 'antd';
import s from './bodyOfNews.module.scss';
import { CaretDownFilled } from '@ant-design/icons';
import Tags from '../../shared/tags/tags.jsx';

function BodyOfNews () {
	return (
		<Flex vertical gap='large'>
			<Flex vertical align='start'>
				<p className={s.text}>{data?.AB}</p>

				<Button
					type='text' 
					icon={<CaretDownFilled style={{color: '#0050b3'}}/>}
					iconPosition='end'
					style={{ padding: '0' }}
				>
					<span className={s.showMoreBtn}>Show more</span>
				</Button>
			</Flex>

			<Tags />
			
			<Button variant='filled' className={s.blueBtn}>Original Source</Button>
		</Flex>		
	)
}

export default BodyOfNews;