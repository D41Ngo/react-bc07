import React, { Component } from 'react';

export default class CardItem extends Component {
	render() {
		const { data, handleXemChiTiet, handleDemo } = this.props;
		/**
		 * handleXemChiTiet ??? function
		 * handleDemo ??? function
		 * onClick lam gi ??? goi ham mà mình truyền cho nó.
		 */

		return (
			<div className='card'>
				<img src={data.hinhAnh} alt={data.tenSP} />

				<div className='card-body'>
					<p>{data.tenSP}</p>
					<p>${data.giaBan.toLocaleString()}</p>

					<button className='btn btn-success' onClick={handleXemChiTiet}>
						Xem Chi Tiết
					</button>

					<button
						className='btn btn-info'
						onClick={() => {
							handleDemo(data);
						}}>
						Demo
					</button>
				</div>
			</div>
		);
	}
}
