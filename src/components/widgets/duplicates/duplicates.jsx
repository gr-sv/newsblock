import React from 'react';
import { Button, Flex } from 'antd';
import HeaderOfNews from '../headerOfNews/headerOfNews';
import s from './duplicates.module.scss'
import { DownOutlined } from '@ant-design/icons';

function Duplicates () {
	return (
		<Flex vertical gap='large'>
			<Flex justify='space-between' style={{ width: '100%' }}>
				<p className={s.text}>Duplicates:</p>

				<Button
					type='text'
					icon={<DownOutlined style={{ color: '#ffffff' }}/>}
					iconPosition='end'
				>
					<span className={s.btnColor}>By Relevance</span>
				</Button>
			</Flex>
					
			<HeaderOfNews shortHeader />
									
			<Button
				variant='outlined'
				icon={<DownOutlined style={{ color: '#ffffff' }}/>}
				iconPosition='start'
				style={{
					background: '#000000', 
					borderColor: '#bfbfbf',
					padding: '30px',
				}}
			>
				<span className={s.btnView}>View Duplicates</span>
			</Button>
		</Flex>
	)
}

export default Duplicates;