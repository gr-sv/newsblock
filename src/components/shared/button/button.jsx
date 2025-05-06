import React from "react";
import classNames from 'classnames';

function Button ({ className, children, showMore, source, sorting, duplicates, ...otherProps }) {
	return (
		<button
			{...otherProps}
			className={classNames(s.button, className, {
				[s.button_showMore]: button_showMore,
				[s.button_source]: button_source,
				[s.button_sorting]: button_sorting,
				[duplicates]: button_duplicates,
			})}>
			{ children }
		</button>
	)
}

export default Button;