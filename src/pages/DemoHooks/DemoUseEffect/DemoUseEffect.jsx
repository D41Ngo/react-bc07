//rfce

import React, { useEffect, useState } from 'react';
import DemoMot from './DemoMot';
import ListToDo from './ListToDo';

/**
 * useEffect: Luôn chạy sau, sau khi component render xong
 * useEffect(hamCallBack, dependencies)
 */

function DemoUseEffect() {
	const [count, setCount] = useState(0);
	const [like, setLike] = useState(100);

	// TH.1: useEffect: không có dependencies
	// Độ phổ biến: Hiếm Khi Dùng.
	useEffect(() => {
		// 1. Chạy sau khi đã mounting
		// 2. Chaỵ sau khi đã updating

		// Tóm gọn: Mỗi lần set lại state thì nó sẽ chạy lại
		console.log('useEffect không có dependencies');

		// Chạy vô tận.
		// setLike(like + 1);
	});

	// TH.2: useEffect: truyền dependencies là một array rỗng
	// Độ phổ biến: Cao.
	useEffect(() => {
		// 1. Chạy sau khi đã mounting

		// Tóm gọn: Chỉ chạy 1 lần duy nhất, sau khi component mounting
		console.log('dependencies là một array rỗng');
	}, []);

	// TH.3: useEffect: có dependencies ( phụ thuộc )
	// Độ phổ biến: Cao.
	useEffect(() => {
		// 1. Chạy sau khi đã mounting.
		// 2. [Chạy sau khi updating với props hay state được truyền vào depnedencies].

		// Tóm gọn: Chạy nếu có bất kỳ giá trị nào của dependencies thay đổi.
		// Muốn cái nào thay đổi thì chạy useEffect thì bỏ vào trong dependencies.
		console.log('có dependencies ( phụ thuộc )');
	}, [like]); // so sánh theo kiểu sallow compare ( primitive value: giá trị nguyên thủy )

	// useEffect: Đóng vai trò unMounting. với array rỗng.
	useEffect(() => {
		const idInterval = setInterval(() => {
			console.log('call api hooks');
		}, 2000);

		const cleanUp = () => {};
		// return cleanUp;
		return () => {
			// xóa những thứ không cần thiết sau khi component unmounting
			// Hàm này, chạy trước khi component chuẩn bị xóa khỏi giao diện.

			clearInterval(idInterval);
		};
	}, []);

	// useEffect: Đóng vai trò unMounting. có dependencies.
	useEffect(() => {
		console.log('useEffect dep count');
		// return cleanUp;
		return () => {
			// 1. Chạy Trước khi component chuẩn bị render lại
			// 2. Hàm này, chạy trước khi component chuẩn bị xóa khỏi giao diện.

			console.log('count trước khi thay đổi::: ', count);
		};
	}, [count]);

	return (
		<div>
			<ListToDo />

			<DemoMot />

			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>+ </button>

			<hr />

			<p>Like: {like}</p>
			<button onClick={() => setLike(like + 1)}>+</button>
		</div>
	);
}

export default DemoUseEffect;
