// rcc: tạo nhanh class component
import React, { Component, Fragment } from 'react';

// phương thức render, nơi tạo ra giao diện của component
// muốn hiện thị giao diện như thế nào thì code html để trong return của phương thức render

// Chú Ý: - Tên thẻ phải đặt chữ "IN HOA" đầu tiên
// - Nội dung hiện thị lên giao diện phải được bao bọc trong một thẻ duy nhất

// Thẻ bao bọc thường là thẻ div fragment
export default class CardRCC extends Component {
	render() {
		return (
			<div className='card w-25'>
				<img src='https://i.pravatar.cc?img=65' alt='...' />

				<div className='card-body'>
					<p>Xin Chao Cac Ban</p>
					<button className='btn btn-success'>Click Me</button>
				</div>
			</div>
		);
	}
}
