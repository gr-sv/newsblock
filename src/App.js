import React from 'react';
import { Button, Flex } from 'antd';
import HeaderOfNews from './components/widgets/headerOfNews/headerOfNews.jsx';
import BodyOfNews from './components/widgets/bodyOfNews/bodyOfNews.jsx';
import s from'./app.module.scss';

function App() {

  return (
  	<Flex vertical gap='middle' align='start'>
		<HeaderOfNews fullHeader />

		<BodyOfNews />

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
