import React, { Component } from 'react';

export default class ProductItem extends Component {
	render() {
		const { sanPham } = this.props;
		return (
			<div className='card'>
				<img src={sanPham.image} alt='...' />
				<div className='card-body'>
					<p>{sanPham.name}</p>
					<p>${sanPham.price.toLocaleString()}</p>
					<button className='btn bg-dark text-bg-dark'>+ Add to cart</button>
				</div>
			</div>
		);
	}
}
