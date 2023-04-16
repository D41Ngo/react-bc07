import React, { Component } from 'react';

// kết nối -> redux
import { connect } from 'react-redux';

class TangGiamSoLuongRedux extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<h1>{this.props.numberState}</h1>
				<button
					onClick={() => {
						this.props.tangGiamSoLuong(1);
					}}>
					+
				</button>
				<button
					onClick={() => {
						this.props.tangGiamSoLuong(-1);
					}}>
					-
				</button>
			</div>
		);
	}
}

// 1. Định nghĩa hàm để lấy state từ redux về.
// 2. Lấy state từ trên redux về và chuyển thành props của component chúng ta.
const mapStateToProps = (rootReducer) => {
	// rootReducer là state tổng, muốn lấy state nào thì chấm tới state đó.
	return {
		numberState: rootReducer.numberReducer,
		// numberState: là gì?
		// rootReducer.numberReducer: là gì?
	};
};

// set lại state ở trên redux ?
// Định nghĩa hàm để gửi dữ liệu lên trên redux
// Chú ý: luôn luôn là giá trị tham số thứ 2 của hàm connect
const mapDispatchToProps = (dispatch) => {
	return {
		tangGiamSoLuong: (soLuong) => {
			console.log('tangGiamSoLuong', soLuong);

			// gửi dữ liệu lên trên redux

			// 1. tạo action
			const action = {
				type: 'TANG_GIAM_SO_LUONG', // Mô Tả hành động của mình
				payload: soLuong, // chứa dữ liệu mà chúng ta muốn gửi lên redux
			};
			// 2. gọi hàm để chuyển action lên redux xử lý
			dispatch(action);
		},
	};
};

// nếu không muốn lấy state từ trên Redux về thì mình truyền giá trị null cho tham số thứ nhât connect(null, ...)
// nếu không muốn gửi dữ liệu lên trên Redux về thì mình truyền giá trị null cho tham số thứ hai hoặc không cần truyền connect(..., ...) || connect(...,null)
// Khai báo cú pháp để kết nối tới store của Redux.
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TangGiamSoLuongRedux);
// sau khi được gọi thì nó cũng trả về 1 component cho chúng ta, và kết nối với redux
