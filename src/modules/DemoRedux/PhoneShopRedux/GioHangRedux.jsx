import React, { Component } from 'react';

import { connect } from 'react-redux';

class GioHangRedux extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<h2>Giỏ Hàng</h2>

				<table className='table'>
					<thead>
						<tr>
							<th>Mã Sản Phẩm</th>
							<th>Tên Sản Phẩm</th>
							<th>Ảnh</th>
							<th>Giá Tiền</th>
							<th>Số Lượng</th>
							<th>Tổng Giá Tiền</th>
							<th></th>
						</tr>
					</thead>

					<tbody>
						{this.props.gioHang.map((sanPham, index) => {
							return (
								<tr key={index}>
									<td>{sanPham.maSP}</td>
									<td>{sanPham.tenSP}</td>
									<td>
										<img
											src={sanPham.hinhAnh}
											alt='...'
											style={{
												width: 50,
												height: 50,
											}}
										/>
									</td>
									<td>{sanPham.giaBan.toLocaleString()}</td>
									<td>
										<button
											className='btn btn-success mx-2'
											onClick={() => {
												this.props.tangGiamSoLuongSanPham(sanPham.maSP, 1);
											}}>
											+
										</button>
										{sanPham.soLuong}
										<button
											className='btn btn-success mx-2'
											onClick={() => {
												this.props.tangGiamSoLuongSanPham(sanPham.maSP, -1);
											}}>
											-
										</button>
									</td>
									<td>{(sanPham.giaBan * sanPham.soLuong).toLocaleString()}</td>
									<td>
										<button
											className='btn btn-danger'
											onClick={() => {
												this.props.xoaSanPham(sanPham.maSP);
											}}>
											Xoá
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (rootReducer) => {
	return {
		gioHang: rootReducer.gioHangReducer,
	};
};

export default connect(mapStateToProps)(GioHangRedux);