import React from 'react';
import classNames from 'classnames';
import s from './dateOfNews.module.scss';
import { data } from '../../../data.js';

function DateOfNews ({ className, ...otherProps }) {
	
	const date = new Date(data?.DP);

	const options = {
		year: "numeric",
		month: "short",
		day: "numeric",
	};

	const fullDate = date.toLocaleDateString('en-GB', options);


	return (
		<time
			datetime={data?.DP}
			{...otherProps}
			className={classNames(
				s.dateColor,
				className,
		)}>
			{ fullDate }
		</time>
	)
}

export default DateOfNews;