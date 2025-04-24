import React from 'react';
import { data } from '../../../data.js';

function Sentiment () {

	const positive = {
		background: '#a0d911'
	}

	const negative = {
		background: '#f5222d'
	}

	return (
		<div style={(data?.SENT === 'positive') ? positive : negative}>{data?.SENT}</div>
	)
}

export default Sentiment;