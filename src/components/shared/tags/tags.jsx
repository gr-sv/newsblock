import React from 'react';
import { data } from '../../../data.js'
import { Flex, Tag } from 'antd';
import s from './tags.module.scss'

function Tags () {

	return (
		<Flex justify='start' gap='small'>

			{(data?.KW).map(kw => (
				<Tag key={kw.value} className={s.tag}>
					<span className={s.tagColor}>{`${kw.value}`}</span> {kw.count}
				</Tag>
			))}

		</Flex>
	)

}

export default Tags;