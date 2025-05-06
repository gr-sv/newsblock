import React from "react";
import classNames from 'classnames';
import s from './button.module.scss';

function Button ({
	className,
	children,
	button_showMore,
	button_source,
	button_sorting,
	button_duplicates,
	...otherProps }) {
	return (
		<button
			{...otherProps}
			className={classNames(s.button, className, {
				[s.button_showMore]: button_showMore,
				[s.button_source]: button_source,
				[s.button_sorting]: button_sorting,
				[s.button_duplicates]: button_duplicates,
			})}>
			{ children }
		</button>
	)
}

export default Button;