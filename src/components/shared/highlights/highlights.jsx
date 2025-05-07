import React from "react";
import { data } from "../../../data.js";
import Button from "../button/button.jsx";
import { Flex } from "antd";
import { CaretDownFilled } from '@ant-design/icons';
import s from './highlights.module.scss';

function Highlights () {
	return (
		<Flex vertical align='start'>
			<p>
				{(data?.HIGHLIGHTS).map((element) => (
					<span key={element} className={s.text}>{element}; </span>
				))}
			</p>

			<Button button_showMore>
				Show more <CaretDownFilled />
			</Button>
		</Flex>
	)
}

export default Highlights;