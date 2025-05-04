import React from 'react';
import { Button, Flex } from 'antd';
import { data } from './data.js';
import HeaderOfNews from './components/widgets/headerOfNews/headerOfNews.jsx';
import s from'./app.module.scss';
import { CaretDownFilled } from '@ant-design/icons';
import Tags from './components/shared/tags/tags.jsx';




function App() {

  return (
  	<Flex vertical gap='middle' align='start'>
		<HeaderOfNews fullHeader />

		<Flex vertical align='start'>
			<p>{data?.AB}</p>

			<Button type='text' icon={<CaretDownFilled />} iconPosition='end'>
				<span className={s.showMoreBtn}>Show more</span>
			</Button>
		</Flex>

		<Tags />

		<Button variant='solid' className={s.blueBtn}>Original Source</Button>
		
		<Flex justify='space-between' style={{ width: '100%' }}>
			<p className={s.duplicates}>Duplicates:</p>
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
