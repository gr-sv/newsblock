import React from 'react';
import { Flex } from 'antd';
import HeaderOfNews from './components/widgets/headerOfNews/headerOfNews.jsx';
import BodyOfNews from './components/widgets/bodyOfNews/bodyOfNews.jsx';
import Duplicates from './components/widgets/duplicates/duplicates.jsx';

function App() {
	return (
		<Flex vertical gap='large'>
			<HeaderOfNews fullHeader />

			<BodyOfNews />

			<Duplicates />
		</Flex>
	);
}

export default App;
