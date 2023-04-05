import React, { Component } from 'react';

export default class CarColor extends Component {
	state = {
		color: 'black',
	};

	render() {
		return (
			<div className='container'>
				<img
					alt='...'
					src={`/img/products/${this.state.color}-car.jpg`}
					style={{
						width: '100%',
					}}
				/>

				<div>
					<button
						className='btn btn-secondary m-2'
						onClick={() => {
							this.setState({
								color: 'black',
							});
						}}>
						Black
					</button>
					<button
						className='btn btn-danger m-2'
						onClick={() => {
							this.setState({
								color: 'red',
							});
						}}>
						Red
					</button>
					<button
						className='btn btn-primary m-2'
						onClick={() => {
							this.setState({
								color: 'silver',
							});
						}}>
						Silver
					</button>
					<button
						className='btn btn-warning m-2'
						onClick={() => {
							this.setState({
								color: 'steel',
							});
						}}>
						Steel
					</button>
				</div>
			</div>
		);
	}
}
