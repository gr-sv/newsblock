import React from 'react';
// import { data } from '../../../data.js';
import { Flex } from 'antd';
// import s from './bodyOfNews.module.scss';
// import { CaretDownFilled } from '@ant-design/icons';
import Tags from '../../shared/tags/tags.jsx';
import Button from '../../shared/button/button.jsx';
import Highlights from '../../shared/highlights/highlights.jsx';

function BodyOfNews () {
	return (
		<Flex vertical gap='large'>

			<Highlights />

			{/* <Flex vertical align='start'>
				<p className={s.text}>{data?.AB}</p>

				<Button button_showMore>
					Show more <CaretDownFilled />
				</Button>
			</Flex> */}

			<Tags />

			<Button button_source>
				Original Source
			</Button>
		</Flex>		
	)
}

export default BodyOfNews;