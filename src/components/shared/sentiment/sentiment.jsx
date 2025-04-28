import React from 'react';
import classNames from 'classnames';
import { data } from '../../../data.js';

function Sentiment ({ className, ...otherProps }) {

	const positive = {
		background: '#a0d911'
	}

	const negative = {
		background: '#f5222d'
	}

	return (
		<div
			style={(data?.SENT === 'positive') ? positive : negative}
			{...otherProps}
			className={classNames(
				className,
		)}>
			{data?.SENT}
		</div>
	)
}

export default Sentiment;