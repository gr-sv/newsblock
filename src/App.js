import { Button, Flex, Tag, Typography } from 'antd';
import { data } from './data.js';
import HeaderOfNews from './components/widgets/headerOfNews/headerOfNews.jsx';
import './app.module.scss';

const { Text } = Typography;


function App() {
  return (
  	<Flex vertical gap='middle'>
		<HeaderOfNews fullHeader />

		<Flex vertical>
			<Text>{data?.AB}</Text>
			<Button>Show more</Button>
		</Flex>

		<Flex justify='start' gap='small'>
			<Tag>key word</Tag>
			<Tag>key word</Tag>
			<Tag>key word</Tag>
			<Tag>key word</Tag>
			<Tag>key word</Tag>
			<Tag>key word</Tag>
			<Tag>key word</Tag>
			<Button type='text'>Show all</Button>
		</Flex>

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
