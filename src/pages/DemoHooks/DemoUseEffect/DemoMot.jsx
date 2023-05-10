import React, { memo, useEffect, useState } from 'react';

const arrDiaDiem = [
	{
		id: 1,
		name: 'Sài Gòn',
		arrQuanHuyen: [
			{
				id: 1,
				name: 'Quận 1',
			},
			{
				id: 2,
				name: 'Quận 2',
			},
			{
				id: 3,
				name: 'Quận 3',
			},
		],
	},
	{
		id: 2,
		name: 'Đà Nẵng',
		arrQuanHuyen: [
			{
				id: 1,
				name: 'Quận Cẩm Lệ',
			},
			{
				id: 2,
				name: 'Quận Thanh Khê',
			},
			{
				id: 3,
				name: 'Quận Hải Châu',
			},
		],
	},
];

const defaultThanhPho = {
	id: -1,
	name: 'Hãy Chọn Thành Phố',
};

function DemoMot(props) {
	const [idThanhPho, setIdThanhPho] = useState(-1);
	const [arrQuanHuyen, setArrQuanHuyen] = useState([]);

	const handleChangeThanhPho = (event) => {
		const { value } = event.target; // kiểu dữ liệu là string

		setIdThanhPho(Number(value)); // ép kiểu string => number
		// setIdThanhPho(+value); // ép kiểu string => number
	};

	const renderQuanHuyen = () => {
		if (arrQuanHuyen.length === 0) {
			return <option>Hãy Chọn Thành Phố</option>;
		}

		return arrQuanHuyen.map((quanHuyen) => {
			return (
				<option key={quanHuyen.id} value={quanHuyen.id}>
					{quanHuyen.name}
				</option>
			);
		});
	};

	useEffect(() => {
		// kiểm tra idThanhPho khác -1 hay không, vì sau khi mounting nó cũng chạy vào, lúc này người dùng chưa chọn thành phố.
		if (idThanhPho !== -1) {
			// lấy thành phố
			const thongTinThanhPho = arrDiaDiem.find((tp) => tp.id == idThanhPho);

			//  lấy quận huyện của thành phố đó
			const newArrQuanHuyen = thongTinThanhPho.arrQuanHuyen;

			//  setState quận huyện
			setArrQuanHuyen(newArrQuanHuyen);
		}
	}, [idThanhPho]);
	return (
		<div className='container mt-5 d-flex gap-3'>
			<select
				className='form-control w-25'
				value={idThanhPho}
				onChange={handleChangeThanhPho}>
				{[defaultThanhPho, ...arrDiaDiem].map((diaDiem) => {
					return (
						<option value={diaDiem.id} key={diaDiem.id}>
							{diaDiem.name}
						</option>
					);
				})}
			</select>

			<select className='form-control w-25'>{renderQuanHuyen()}</select>
		</div>
	);
}

export default memo(DemoMot);
// so sanh sallow compare ( primitive value : number string boolean null undefined)
