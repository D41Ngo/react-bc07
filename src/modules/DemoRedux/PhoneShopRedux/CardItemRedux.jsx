import React, { Component } from 'react';

import { connect } from 'react-redux';
class CardItemRedux extends Component {
	render() {
		const { phone } = this.props;
		console.log(this.props);
		return (
			<div className='card'>
				<img src={phone.hinhAnh} alt='...' />
				<div className='card-body'>
					<p>{phone.tenSP}</p>
					<p>{phone.giaBan}</p>
					<button
						className='btn btn-danger'
						onClick={() => {
							this.props.themGioHang(phone);
						}}>
						Thêm giỏ hàng
					</button>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		themGioHang: (spClick) => {
			console.log('Phone Click ', spClick);

			const action = {
				type: 'THEM_GIO_HANG',
				payload: spClick,
			};

			dispatch(action);
		},
	};
};
// CHÚ Ý: component này không cần lấy state từ redux để binding
// nên chúng ta phải truyền cho tham số thứ nhất giá trị 'null'
export default connect(null, mapDispatchToProps)(CardItemRedux);
