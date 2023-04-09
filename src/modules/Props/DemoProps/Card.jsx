import React, { Component } from 'react';

export default class Card extends Component {
	render() {
		console.log(this.props);
		/**
		 * this.props => {
		 *  name:'Iphone',
		 *  price:'9000',
		 *  img:'https://i.pravatar.cc?img=65',
		 *  moTa:'day la anh so 1'
		 *  ...
		 *  ...
		 * }
		 */
		const { moTa, img, name, price } = this.props;
		//es5
		// var moTa = this.props.moTa;
		// var img = this.props.img;

		return (
			<div className='card'>
				<img alt={moTa} src={img} />

				<div className='card-body'>
					<p>{name}</p>
					<p>{price}</p>
				</div>
			</div>
		);
	}
}
