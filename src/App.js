import { Flex, Typography } from 'antd';
import { data } from './data.js';
const { Title } = Typography;

function App() {
  return (
     <Flex vertical>
		<Flex vertical='horizontal'>
			<time datetime={data?.DP}>{data?.DP}</time>
			<div>Reach</div>
			<div>Top Traffic</div>
			<div>Sentiment</div>
			<div>i</div>
			<div>empty</div>
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
