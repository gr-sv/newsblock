import React from 'react';
import { Button, Flex, Typography } from 'antd';
import { data } from './data.js';
import HeaderOfNews from './components/widgets/headerOfNews/headerOfNews.jsx';
import './app.module.scss';
import { CaretDownFilled } from '@ant-design/icons';
import Tags from './components/shared/tags/tags.jsx';

const { Paragraph, Text } = Typography;




function App() {

  return (
  	<Flex vertical gap='middle'>
		<HeaderOfNews fullHeader />

		<Flex vertical align='start'>
			<Paragraph style={{ fontSize: '20px' }}>
				{data?.AB}
			</Paragraph>

			<Button type='text' icon={<CaretDownFilled />} iconPosition='end'>Show more</Button>
		</Flex>

		<Tags />

		<Flex>
			<Button color='primary' variant='solid'>Original Source</Button>
		</Flex>

		<Flex justify='space-between'>
			<Text>Duplicates:</Text>
			<div>By Relevance</div>
		</Flex>

		<HeaderOfNews shortHeader />
			
		<Flex>
			<Button color='primary' variant='outlined'>View Duplicates</Button>
		</Flex>
	</Flex>
  );
}

export default App;
