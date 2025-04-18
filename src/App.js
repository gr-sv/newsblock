import { Button, Flex, Typography } from 'antd';
import { data } from './data.js';
const { Title } = Typography;

function App() {
  return (
  	<Flex vertical>
		<Flex justify='space-between'>
			<Flex gap='middle'>
				<time datetime={data?.DP}>Time</time>
				<div>Reach</div>
				<div>Top Traffic</div>
			</Flex>

			<Flex gap='small'>
				<div>Sentiment</div>
				<div>i-square</div>
				<div>empty-square</div>
			</Flex>			
		</Flex>

		<Flex vertical='horizontal'>
			<Title>{data?.TI}</Title>
		</Flex>

		<Flex justify='start' gap='middle'>
			<div>Domen</div>
			<div>Country</div>
			<div>Language</div>
			<div>Author</div>
		</Flex>

		<Flex vertical>
			<div>News text</div>
			<div>Show more</div>
		</Flex>

		<Flex justify='start' gap='small'>
			<div>key word</div>
			<div>key word</div>
			<div>key word</div>
			<div>key word</div>
			<div>key word</div>
			<div>key word</div>
			<div>key word</div>
		</Flex>

		<Flex>
			<Button>Original Source</Button>
		</Flex>
		
		<Flex></Flex>
		<Flex></Flex>
		<Flex></Flex>
	</Flex>
  );
}

export default App;
