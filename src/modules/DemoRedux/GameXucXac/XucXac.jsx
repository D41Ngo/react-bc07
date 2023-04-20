import React, { Component } from 'react';
import { connect } from 'react-redux';
class XucXac extends Component {
	showKetQua = (listXucXac) => {
		// const tongDiem = listXucXac.reduce((total, item) => {
		// 	return total + item.diem;
		// }, 0);

		// let tongDiem = 0;
		// for (let xx of listXucXac) {
		// 	tongDiem += xx.diem;
		// }

		let tongDiem = 0;
		for (let i = 0; i < listXucXac.length; i++) {
			tongDiem += listXucXac[i].diem;
		}

		if (tongDiem <= 10) {
			return `Xỉu - ${tongDiem}`;
		} else {
			return `Tài - ${tongDiem}`;
		}
	};
	render() {
		console.log('XucXac', this.props);
		const { data } = this.props;
		return (
			<div className='mt-4 d-flex justify-content-between group-xuc-xac'>
				<button
					className='btn btn-primary'
					onClick={() => {
						const action = {
							type: 'CHON_XUC_XAC',
							payload: true,
						};

						// Cách 2: để gửi dữ liệu lên Redux
						this.props.dispatch(action);
					}}>
					Tài
				</button>

				<div>
					{data.xucXac.map((item) => {
						return (
							<img
								alt='..'
								src={item.hinhAnh}
								style={{
									width: 50,
									height: 50,
								}}
							/>
						);
					})}
					<h2>{this.showKetQua(data.xucXac)}</h2>
				</div>

				<button
					className='btn btn-primary'
					onClick={() => {
						const action = {
							type: 'CHON_XUC_XAC',
							payload: false,
						};

						// Cách 2: để gửi dữ liệu lên Redux
						this.props.dispatch(action);
					}}>
					Xỉu
				</button>
			</div>
		);
	}
}

const mapStateToProps = (rootReducer) => {
	return {
		data: rootReducer.gameXucXacReducer,
	};
};

// Chọn 1 trong 2 cách
// 1. const mapDispatchToProps = (dispatch) => {};
// 2. this.props.dispatch

export default connect(mapStateToProps)(XucXac);
