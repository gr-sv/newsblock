import React from 'react';
import { Button, Flex, Typography } from 'antd';
import { data } from './data.js';
import HeaderOfNews from './components/widgets/headerOfNews/headerOfNews.jsx';
import s from'./app.module.scss';
import { CaretDownFilled } from '@ant-design/icons';
import Tags from './components/shared/tags/tags.jsx';

const { Paragraph, Text } = Typography;




function App() {

  return (
  	<Flex vertical gap='middle' align='start'>
		<HeaderOfNews fullHeader />

		<Flex vertical align='start'>
			<Paragraph style={{ fontSize: '20px' }}>
				{data?.AB}
			</Paragraph>

			<Button type='text' icon={<CaretDownFilled />} iconPosition='end'>
				<span className={s.showMoreBtn}>Show more</span>
			</Button>
		</Flex>

		<Tags />

		<Button variant='solid' className={s.blueBtn}>Original Source</Button>
		
		<Flex justify='space-between' style={{ width: '100%' }}>
			<Text className={s.duplicates}>Duplicates:</Text>
			<div>By Relevance</div>
		</Flex>

		<HeaderOfNews shortHeader />
			
		<Flex>
			<Button variant='outlined'>View Duplicates</Button>
		</Flex>
	</Flex>
  );
}

export default App;
