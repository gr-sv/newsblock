import React from 'react';
import { data } from '../../../data.js';

function Sentiment () {

	const positive = {
		background: 'lime'
	}

	const negative = {
		background: 'red'
	}

	return (
		<div style={(data?.SENT === 'positive') ? positive : negative}>{data?.SENT}</div>
	)
}

export default Sentiment;