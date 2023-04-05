import React, { Component } from 'react';

export default class TangFontSize extends Component {
	state = {
		fSize: 40,
	};

	handleChangeFontSize = (size) => {
		this.setState({
			fSize: this.state.fSize + size,
		});
	};

	render() {
		return (
			<div>
				<p
					style={{
						fontSize: this.state.fSize, //px //`${this.state.fSize}rem`,
					}}>
					{/* lorem5 + tab */}
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
					dignissimos?
				</p>

				<div>
					<button
						onClick={() => {
							this.handleChangeFontSize(5);
						}}
						className='btn btn-success'>
						+
					</button>
					<button
						onClick={() => {
							this.handleChangeFontSize(-5);
						}}
						className='m-2 btn btn-success'>
						-
					</button>
				</div>
			</div>
		);
	}
}
