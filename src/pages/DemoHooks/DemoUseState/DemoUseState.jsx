// rfce
import React, { Component, useState } from 'react';

// function useState(defaultValue) {
// 	let value = defaultValue;
// 	const setValue = (newValue) => {
// 		value = newValue;
// 	};
// 	return [value, setValue];
// }

function DemoUseState() {
	//useState: [state,HamSetLaiState] = useState(defaultValue)
	// setState thì toàn bộ nội dung trong function đều được chạy lại toàn bộ.

	// atomic: nguyên tử
	const [count, setCount] = useState(0); // defaultValue = 0
	const [imgSrc, setImgSrc] = useState('https://i.pravatar.cc?img=1');
	const [sizeText, setSizeText] = useState(16);

	// const [stateDemo, setStateDemo] = useState({
	// 	count: 0,
	// 	imgSrc: 'https://i.pravatar.cc?img=1',
	// 	like: 0,
	// 	// ....
	// 	user: {},
	// 	product: {},
	// });

	// [tenState, setTenState]
	// const [like, changeLike] = useState(0); Không Nên ( X )
	// const [like, setLike] = useState(0); Nên ( V )

	const handleChangeImg = () => {
		const number = Math.floor(Math.random() * 60);
		const newImg = `https://i.pravatar.cc?img=${number}`;

		setImgSrc(newImg);
	};

	const handleChangeFontSize = (soLuong) => {
		setSizeText(sizeText + soLuong);
	};

	return (
		<div className='container'>
			<h1>Count: {count}</h1>
			<button
				className='btn btn-success mx-2'
				onClick={() => {
					setCount(count + 1);
				}}>
				+
			</button>
			<button
				className='btn btn-success mx-2'
				onClick={() => {
					setCount(count - 1);
				}}>
				-
			</button>

			<div className='card w-25'>
				<img src={imgSrc} alt='...' />
				<div className='card-body'>
					<button className='btn btn-success' onClick={handleChangeImg}>
						Random
					</button>
				</div>
			</div>

			<p
				style={{
					fontSize: sizeText + 'px',
				}}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos beatae
				similique necessitatibus officia quis excepturi, illum quod pariatur
				nihil numquam architecto neque sapiente dolore at, rem ducimus
				consectetur! Fuga magnam dicta laboriosam temporibus quam magni, neque
				recusandae ut possimus mollitia error cupiditate praesentium aliquid
				commodi sit laudantium pariatur repellat nemo. Dicta dolorem, obcaecati
				tempora quibusdam aspernatur aperiam repellendus commodi veritatis id
				ducimus molestias doloremque assumenda laboriosam. Eaque dolorem quaerat
				in ratione praesentium nam, tempora itaque voluptatem aperiam odit,
				voluptates quis quia repudiandae maiores est quasi quae soluta, eos eius
				dolores doloribus? Deleniti consectetur nemo animi illum nihil in optio
				voluptatum.
			</p>
			<button
				className='btn btn-success mx-2'
				onClick={() => {
					handleChangeFontSize(5);
				}}>
				{/* -------- Chạy Ngay Lập Tức Sau Khi Load Lên Giao Diện ----------- */}
				{/* onClick={handleChangeFontSize(5)}> */}
				Tăng Font Size
			</button>
			<button
				className='btn btn-success mx-2'
				onClick={() => handleChangeFontSize(-5)}>
				Giảm Font Size
			</button>
		</div>
	);
}

export default DemoUseState;
