import { Button, Flex, Tag, Typography } from 'antd';
import { data } from './data.js';
import DateOfNews from './components/shared/date/dateOfNews.jsx';
import Reach from './components/shared/reach/reach.jsx';
import TopTraffic from './components/shared/topTraffic/topTraffic.jsx'
import Sentiment from './components/shared/sentiment/sentiment.jsx';
const { Link, Text, Title } = Typography;

function App() {
  return (
  	<Flex vertical>
		<Flex justify='space-between'>
			<Flex gap='middle'>
				<DateOfNews />
				<Text>
					<Reach /> Reach
				</Text>
				
				<TopTraffic />
			</Flex>

			<Flex gap='small'>
				<Sentiment />
				<div>i-icon</div>
				<div>empty-icon</div>
			</Flex>			
		</Flex>

		<Flex>
			<Title>{data?.TI}</Title>
		</Flex>

		<Flex justify='start' gap='middle'>
			<Link href={data?.DOM}>{data?.DOM}</Link>
			<Text>{data?.CNTR}</Text>
			<Text>{data?.LANG}</Text>
			<Text>{data?.AU}</Text>
		</Flex>

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

		<Flex vertical>
			<Flex justify='space-between'>
				<Flex gap='middle'>
					<DateOfNews />
					<Text>
						<Reach /> Top Reach
					</Text>
				</Flex>

				<Flex gap='small'>
					<div>i-square</div>
					<div>empty-square</div>
				</Flex>			
			</Flex>

			<Flex vertical='horizontal'>
				<Title>{data?.TI}</Title>
			</Flex>

			<Flex justify='start' gap='middle'>
				<Link href={data?.DOM}>{data?.DOM}</Link>
				<Text>{data?.CNTR}</Text>
				<Text>{data?.AU}</Text>
			</Flex>
		</Flex>
			
		<Flex>
			<Button color='primary' variant='outlined'>View Duplicates</Button>
		</Flex>
	</Flex>
  );
}

export default App;
