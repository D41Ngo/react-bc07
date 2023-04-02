import React, { Component } from 'react';
// dom.innerHTML = ''
export default class DataBinding extends Component {
	product = {
		img: 'https://i.pravatar.cc?img=65',
		id: 'ID-1',
		title: 'Iphone 12',
		price: 9999,
	};

	sayMessage = () => {
		return 'Hello Các Bạn'; // ( V )
		// return <p>Hello Các Bạn</p>; ( V )
		// return 123456; ( V )

		// return false; ( X )
		// return undefined; // ( X )
		// chú ý: - chỉ được phép return: string, number, jsx
		//
	};

	render() {
		let title = 'Cyber Soft';
		// dùng dấu ngoặc nhọn để binding data {}

		/**
		 * Biến trong phương thức
		 * thuộc tính của class
		 */

		return (
			<div>
				<h1>Tên trung tâm: {title}</h1>
				<p>Lời Chào: {this.sayMessage()}</p>

				<div className='card w-25'>
					<img src={this.product.img} alt='' />
					<div className='card-body'>
						<p>{this.product.title}</p>
						<p>Price: {this.product.price}</p>
					</div>
				</div>
			</div>
		);
	}
}
