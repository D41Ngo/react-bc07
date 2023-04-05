// rcc: tạo nhanh class component
import React, { Component } from 'react';
// c1: ảnh hưởng đến toàn bộ dự án
// import './style.css';

// c2:
import Styles from './style2.module.css';

// c3: inline style

function mergeClassName(...rest) {
	return rest.join(' '); //Chú Ý:
}

export default class CssComponent extends Component {
	render() {
		const styleInline = {
			color: 'purple',
			fontSize: '80px', // font-size => fontSize
			backgroundColor: 'black',
		};
		return (
			<div>
				<h1 className={mergeClassName(Styles.TextRed, Styles.FontSize)}>
					Cyber Soft
				</h1>
				{/* lorem[number]: vd: lorem10 */}
				<p className={Styles['text-blue']}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto neque
					sequi consectetur praesentium, doloremque velit. Necessitatibus facere
					beatae quo, sed nemo non vel. Quibusdam, vero consectetur enim sequi
					aperiam deleniti?
				</p>

				<p
					style={{
						color: 'purple',
						fontSize: '80px', // font-size => fontSize
						backgroundColor: 'black',
					}}>
					Lorem, ipsum dolor.
				</p>
			</div>
		);
	}
}
