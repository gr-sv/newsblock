import React, { useState } from "react";
import { data } from "../../../data.js";
import Button from "../button/button.jsx";
import { Flex, Typography } from 'antd';
import { CaretDownFilled, CaretUpFilled } from '@ant-design/icons';
import s from './highlights.module.scss';

const { Paragraph } = Typography;

function Highlights () {

	const [ellipsis, setEllipsis] = useState(true);
	const [buttonText, setButtonText] = useState('Show more');

	const buttonClick = () => {
		setButtonText(buttonText === 'Show more' ? 'Show less' : 'Show more');
		setEllipsis(!ellipsis);
	};

	return (
		<Flex vertical align='start'>
			<Paragraph className={s.text} ellipsis={ellipsis ? { rows: 3, expandable: true, symbol: '' } : false}>
				{(data?.HIGHLIGHTS).join('; ')}
			</Paragraph>
			
			<Button
				button_showMore
				onClick={buttonClick}
			>
				{buttonText}
			</Button>
		</Flex>
	)
}

export default Highlights;