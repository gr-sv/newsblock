import React from 'react';
import classNames from 'classnames';
import { data } from '../../../data.js';

function Reach ({ className, ...otherProps }) {
	return (
		<p
		{...otherProps}
		className={classNames(className, {
			className,
	})}
		>
			{Math.round(data?.REACH / 1000)}K
		</p>
	)
}

export default Reach;