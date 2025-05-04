import React from 'react';
import { data } from '../../../data.js'
import { Flex, Tag } from 'antd';
import s from './tags.module.scss'

function Tags () {

	return (
		<Flex justify='start' gap='small'>

			{(data?.KW).map(kw => (
				<Tag key={kw.value} className={s.tag}>
					<span className={s.valueColor}>{`${kw.value}`}</span> <span className={s.countColor}>{kw.count}</span>
				</Tag>
			))}

		</Flex>
	)

}

export default Tags;