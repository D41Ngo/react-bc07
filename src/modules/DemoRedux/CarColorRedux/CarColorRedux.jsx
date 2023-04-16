import React, { Component } from 'react';

// kết nối => redux
import { connect } from 'react-redux';
class CarColorRedux extends Component {
	render() {
		console.log(this.props);
		const { srcImg, changeColor, demo, demoA } = this.props;
		this.props.demoA();
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-6'>
						<img
							alt='...'
							src={srcImg}
							style={{
								width: '100%',
							}}
						/>
					</div>
					<div className='col-6'>
						<button
							className='btn btn-secondary m-2'
							onClick={() => {
								this.props.changeColor('black');
							}}>
							Black
						</button>
						<button
							className='btn btn-danger m-2'
							onClick={() => {
								this.props.changeColor('red');
							}}>
							Red
						</button>
						<button
							className='btn btn-primary m-2'
							onClick={() => {
								this.props.changeColor('silver');
							}}>
							Silver
						</button>
						<button
							className='btn btn-warning m-2'
							onClick={() => {
								this.props.changeColor('steel');
							}}>
							Steel
						</button>
					</div>
				</div>
			</div>
		);
	}
}

// lên trên redux lấy state về và chuyển thành props của component
const mapStateToProps = (rootReducer) => {
	return {
		srcImg: rootReducer.imgCarReducer, // props là giá trị
	};
};

// set lại state trên redux
const mapDispatchToProps = (dispatch) => {
	return {
		changeColor: (newColor) => {
			// props là hàm
			console.log('🚀 >>>::::::::: newColor :::::::::', newColor);

			// đưa dữ liệu lên trên redux
			const action = {
				type: 'CHANGE_COLOR',
				payload: newColor,
			};

			dispatch(action);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CarColorRedux);
