import React, { Component, Fragment } from 'react';

export default class RenderArray extends Component {
	products = [
		{
			id: 1,
			name: 'black car',
			img: '/img/products/black-car.jpg',
		},
		{
			id: 2,
			name: 'red car',
			img: '/img/products/red-car.jpg',
		},
		{
			id: 3,
			name: 'silver car',
			img: '/img/products/silver-car.jpg',
		},
		{
			id: 4,
			name: 'steel car',
			img: '/img/products/steel-car.jpg',
		},
	];

	renderProducts = () => {
		// const listProducts = [];
		// for (const item of this.products) {
		// 	const content = (
		// 		<tr>
		// 			<td>{item.id}</td>
		// 			<td>{item.name}</td>
		// 			<td>
		// 				<img
		// 					style={{
		// 						width: 400,
		// 					}}
		// 					src={item.img}
		// 					alt='...'
		// 				/>
		// 			</td>
		// 		</tr>
		// 	);

		// 	listProducts.push(content);
		// }
		return this.products.map((item, index) => {
			// gắn key cho thẻ bao bọc ngoài cùng
			return (
				<tr key={item.id || index}>
					<td key={item.id}>{item.id}</td>
					<td>{item.name}</td>
					<td>
						<img
							style={{
								width: 400,
							}}
							src={item.img}
							alt='...'
						/>
					</td>
				</tr>
			);
		});

		// string, number, jsx, array
	};
	render() {
		return (
			<table className='table'>
				<thead>
					<tr>
						<th>id</th>
						<th>name</th>
						<th>img</th>
					</tr>
				</thead>

				<tbody>{this.renderProducts()}</tbody>
			</table>
		);
	}
}

// function demo() {
// 	const obj1 = {};
// 	const obj2 = {};

// 	return obj1 obj2; // Error
// }
