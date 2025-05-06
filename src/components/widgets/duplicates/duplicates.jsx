import React from 'react';
import { Flex } from 'antd';
import HeaderOfNews from '../headerOfNews/headerOfNews';
import s from './duplicates.module.scss'
import Button from '../../shared/button/button.jsx';
import { DownOutlined } from '@ant-design/icons';

function Duplicates () {
	return (
		<Flex vertical gap='large'>
			<Flex justify='space-between' style={{ width: '100%' }}>
				<p className={s.text}>Duplicates:</p>

				<Button button_sorting>
					By Relevance <DownOutlined />
				</Button>
			</Flex>
					
			<HeaderOfNews shortHeader />

			<Button button_duplicates>
				<DownOutlined /> View Duplicates
			</Button>
		</Flex>
	)
}

export default Duplicates;