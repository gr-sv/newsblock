import React, { useState } from "react";
import { data } from "../../../data.js";
import Button from "../button/button.jsx";
import { Flex, Typography } from 'antd';
import { CaretDownFilled, CaretUpFilled } from '@ant-design/icons';
import s from './highlights.module.scss';

const { Paragraph } = Typography;

function parseKwTags(text) {
	const parts = [];
	const regex = /<kw>(.*?)<\/kw>/g;
	let lastIndex = 0;
	let match;
	let key = 0;

	while ((match = regex.exec(text)) !== null) {
		if (match.index > lastIndex) {
			parts.push(text.slice(lastIndex, match.index));
		}
		parts.push(
			<span key={key++} className={s.highlight}>
				{match[1]}
			</span>
		);
		lastIndex = regex.lastIndex;
	}
	if (lastIndex < text.length) {
		parts.push(text.slice(lastIndex));
	}

	return parts;
}

function Highlights() {
	const [ellipsis, setEllipsis] = useState(true);

	const buttonClick = () => {
		setEllipsis(!ellipsis);
	};

	const highlightsParsed = data?.HIGHLIGHTS.map((text, idx) => (
		<React.Fragment key={idx}>
			{parseKwTags(text)}{idx < data.HIGHLIGHTS.length - 1 ? '; ' : ''}
		</React.Fragment>
	));

	const isCollapsed = ellipsis;
	const icon = isCollapsed ? <CaretDownFilled /> : <CaretUpFilled />;
	const buttonText = isCollapsed ? 'Show more' : 'Show less';

	return (
		<Flex vertical align='start'>

			<Paragraph
				className={s.text}
				ellipsis={ellipsis ? { rows: 3, expandable: true, symbol: '' } : false}
			>
				{highlightsParsed}
			</Paragraph>

			<Button
				button_showMore
				onClick={buttonClick}
			>
				{buttonText} {icon}
			</Button>
		</Flex>
	);
}

export default Highlights;
