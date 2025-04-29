import React from 'react';
import classNames from 'classnames';
import s from './sentiment.module.scss';
import { data } from '../../../data.js';
import { Typography } from 'antd';

const { Text } = Typography;

function Sentiment ({ className, ...otherProps }) {

	const positive = {
		background: '#a0d911'
	}

	const negative = {
		background: '#f5222d'
	}

	return (
		<Text
			style={(data?.SENT === 'positive') ? positive : negative}
			{...otherProps}
			className={classNames(
				s.sentBackground,
				className,
		)}>
			{data?.SENT}
		</Text>
	)
}

export default Sentiment;