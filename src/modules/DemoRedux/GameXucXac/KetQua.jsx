import React, { Component } from 'react';
import { connect } from 'react-redux';
class KetQua extends Component {
	render() {
		console.log('ket qua ..... ', this.props);
		const { data } = this.props;
		return (
			<div>
				<p>
					<b>Bạn Chọn: {data.banChon ? 'Tài' : 'Xỉu'}</b>
				</p>
				<p>Số Bàn Thằng: {data.soBanThang}</p>
				<p>Tổng Số Bàn Chơi: {data.tongSoBanChoi}</p>

				<button
					className='btn btn-success'
					onClick={() => {
						this.props.dispatch({
							type: 'PLAY_GAME',
						});
					}}>
					Play Game
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
export default connect(mapStateToProps)(KetQua);
