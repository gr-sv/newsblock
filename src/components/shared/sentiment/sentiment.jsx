import React from 'react';
import classNames from 'classnames';
import s from './sentiment.module.scss';
import { data } from '../../../data.js';

function Sentiment ({ className, ...otherProps }) {

	const positive = {
		background: '#93bf24'
	}

	const negative = {
		background: '#db373f'
	}

	return (
		<p
			style={(data?.SENT === 'positive') ? positive : negative}
			{...otherProps}
			className={classNames(
				s.sentBackground,
				className,
		)}>
			{data?.SENT}
		</p>
	)
}

export default Sentiment;