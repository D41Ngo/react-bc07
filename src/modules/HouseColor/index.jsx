import React, { Component } from 'react';

export default class HouseColor extends Component {
	state = {
		bgColor: 'blue',
	};

	handleChangeColor = (color) => {
		this.setState({
			bgColor: color,
		});
	};

	render() {
		return (
			<div>
				<div
					style={{
						width: 100,
						height: 100,
						backgroundColor: this.state.bgColor,
					}}
				/>

				<div>
					<button
						className='btn '
						style={{
							backgroundColor: 'red',
						}}
						onClick={() => {
							this.handleChangeColor('red');
						}}>
						Red
					</button>
					<button
						className='btn m-2'
						style={{
							backgroundColor: 'blue',
						}}
						onClick={() => {
							this.handleChangeColor('blue');
						}}>
						Blue
					</button>
					<button
						className='btn'
						style={{
							backgroundColor: 'green',
						}}
						onClick={() => {
							this.handleChangeColor('green');
						}}>
						Green
					</button>
				</div>
			</div>
		);
	}
}
