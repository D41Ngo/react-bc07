import React, { Component } from 'react';

// kết nối -> redux
import { connect } from 'react-redux';

class TangGiamSoLuongRedux extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<h1>{this.props.numberState}</h1>
				<button>+</button>
				<button>-</button>
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

// Khai báo cú pháp để kết nối tới store của Redux.
export default connect(mapStateToProps)(TangGiamSoLuongRedux);
// sau khi được gọi thì nó cũng trả về 1 component cho chúng ta, và kết nối với redux
