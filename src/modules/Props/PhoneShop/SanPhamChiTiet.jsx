import React, { Component } from 'react';

export default class SanPhamChiTiet extends Component {
	render() {
		const { spChiTiet, maSP, img } = this.props; // để lấy được giá trị thì phải thông qua this.props.[tenProps]

		const { manHinh, heDieuHanh, cameraSau, cameraTruoc, rom, ram } = spChiTiet;
		return (
			<div>
				<h2>Thông Số Kỹ Thuật</h2>

				<table className='table'>
					<tbody>
						<tr>
							<td>Màn Hình</td>
							<td>{manHinh}</td>
						</tr>
						<tr>
							<td>Hệ Điều Hành</td>
							<td>{heDieuHanh}</td>
						</tr>
						<tr>
							<td>Camera Trước</td>
							<td>{cameraTruoc}</td>
						</tr>
						<tr>
							<td>Camera Sau</td>
							<td>{cameraSau}</td>
						</tr>
						<tr>
							<td>RAM</td>
							<td>{ram}</td>
						</tr>
						<tr>
							<td>ROM</td>
							<td>{rom}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
