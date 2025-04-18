import { Flex, Typography } from 'antd';
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

		<Flex vertical='horizontal'></Flex>
		<Flex vertical='horizontal'></Flex>
		<Flex vertical='horizontal'></Flex>
		<Flex vertical='horizontal'></Flex>
		<Flex vertical='horizontal'></Flex>
		<Flex vertical='horizontal'></Flex>
		<Flex vertical='horizontal'></Flex>
	</Flex>
  );
}

export default App;
