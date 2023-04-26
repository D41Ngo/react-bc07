import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableNguoiDung extends Component {
	render() {
		console.log(this.props);
		return (
			<table className='table mt-4'>
				<thead className='table-dark'>
					<tr>
						<th>ID</th>
						<th>User Name</th>
						<th>Email</th>
						<th>Image</th>
						<th>Phone</th>
						<th>Address</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{this.props.mangNguoiDung.map((nd) => {
						return (
							<tr key={nd.id}>
								<td>{nd.id}</td>
								<td>{nd.userName}</td>
								<td>{nd.email}</td>
								<td>
									<img alt='...' src={nd.img} width={50} height={50} />
								</td>
								<td>{nd.phone}</td>
								<td>{nd.address}</td>
								<td>
									<button className='btn btn-primary mx-2'>Sửa</button>
									<button className='btn btn-danger'>Xóa</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}

const mapStateToProps = (rootReducer) => {
	return {
		mangNguoiDung: rootReducer.reactFormReducer.mangNguoiDung,
	};
};

export default connect(mapStateToProps)(TableNguoiDung);
