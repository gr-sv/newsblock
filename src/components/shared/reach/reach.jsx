import React from 'react';
import { data } from '../../../data.js';
import { Typography } from 'antd';

const { Text } = Typography;

function Reach () {
	return (
		<Text>
			{Math.round(data?.REACH / 1000)}K
		</Text>
	)
}

export default Reach;