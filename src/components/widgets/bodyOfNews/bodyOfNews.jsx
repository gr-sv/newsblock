import React from 'react';
import { Flex } from 'antd';
import Tags from '../../shared/tags/tags.jsx';
import Button from '../../shared/button/button.jsx';
import Highlights from '../../shared/highlights_2/highlights_2.jsx';

function BodyOfNews () {
	return (
		<Flex vertical gap='large'>
			<Highlights />

			<Tags />

			<Button button_source>
				Original Source
			</Button>
		</Flex>		
	)
}

export default BodyOfNews;