import React from 'react';
import { data } from '../../../data.js';

function DateOfNews () {
	
	const date = new Date(data?.DP);

	const options = {
		year: "numeric",
		month: "short",
		day: "numeric",
	};

	return (
		<time datetime={data?.DP}>{ date.toLocaleDateString(undefined, options) }</time>
	)
}

export default DateOfNews;