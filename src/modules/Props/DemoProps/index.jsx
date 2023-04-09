import React, { Component } from 'react';
import Card from './Card';

export default class DemoProps extends Component {
	product1 = {
		name: 'Iphone',
		price: '9000',
		img: 'https://i.pravatar.cc?img=65',
		moTa: 'day la anh so 1',
	};

	render() {
		const product2 = {
			name: 'Samsung',
			price: '1000',
			img: 'https://i.pravatar.cc?img=66',
			moTa: 'day la anh so 2',
		};

		return (
			<div className='container'>
				<input type='text' placeholder='Enter here' />
				<input type='text' placeholder='Nhập vào đây' />

				<div className='row'>
					<div className='col-4'>
						<Card data={this.product1} />
					</div>
					<div className='col-4'>
						<Card data={product2} />
					</div>
				</div>
			</div>
		);
	}
}
