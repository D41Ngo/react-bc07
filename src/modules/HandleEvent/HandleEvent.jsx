import React, { Component } from 'react';

// JS: dom.addEventListner('tensukien',callbackFunction)
// JS: dom.onclick = function

// onTenSuKien
// onClick
export default class HandleEvent extends Component {
	alertMessage = () => {
		alert('Hihhihihi');
	};

	sayMessage = (loiChao, name) => {
		console.log(loiChao + ' ' + name);
	};

	render() {
		return (
			<div>
				<button className='btn btn-success' onClick={this.alertMessage}>
					Click Me 1
				</button>

				<button
					className='btn btn-success'
					onClick={() => {
						// anonymous function
						alert('HAHHAHAHA');
					}}>
					Click Me 2
				</button>

				{/* C1: dùng anonymous function */}
				<button
					className='btn btn-primary'
					onClick={() => {
						this.sayMessage('Xin Chao', 'Cyber Soft');
						// goi nhieu ham ....
						//
					}}>
					Click Me 3
				</button>

				{/* C2: dùng bind -> tạo ra một function mới gắn lại cho onClick */}
				<button
					className='btn btn-success'
					onClick={this.sayMessage.bind(this, 'Xin Chao', 'Cyber Soft')}>
					Click Me 4
				</button>
			</div>
		);
	}
}
