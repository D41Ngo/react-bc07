import React, { Component } from 'react';

export default class GioHang extends Component {
	renderGioHang = () => {
		const { gioHang } = this.props;

		return gioHang.map((sanPham, index) => {
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
		});
	};
	render() {
		// binding state lên giao diện.
		const { gioHang } = this.props;
		return (
			// <Fragment></Fragment>
			<>
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

					<tbody>{this.renderGioHang()}</tbody>
				</table>
			</>
		);
	}
}
