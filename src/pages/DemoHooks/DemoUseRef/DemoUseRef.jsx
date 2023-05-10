import React, { useState, useRef } from 'react';

function DemoUseRef() {
	const [count, setCount] = useState(0);
	const [listTodo, setListTodo] = useState(['React', 'HTML', 'Css', 'Scss']); // 0xxxxxxx

	// useRef: tạo ra đối tượng có thuộc tính current lưu giá trị cho chúng ta.
	// useRef: 1. Lưu lại giá trị biến.
	//         2. DOM

	// useMemo: cũng lưu giá trị biến, nhưng dành cho những xử lý logic.
	let __todo = useRef('');

	const inputRef = useRef(null);
	// __todo = {current:''}

	const handleChangeName = (e) => {
		const { value } = e.target;

		console.log({ __todo });

		__todo.current = value; // lau nha

		// setTodo(value);
	};

	const handleAddTodo = () => {
		// listTodo.push(todo);
		// // 0xxxxxxx
		// // Set lại state cùng giá trị thì sẽ không re-render
		// // Chú Ý: đối với array, object thì phải clone ra giống như xử lý với redux.
		// setListTodo([...listTodo]); //0yyyyyyy

		// console.log({ push: listTodo });

		console.log('todo', __todo);

		setListTodo([...listTodo, __todo.current]);

		// React không khuyến khích các bạn làm theo cách này.
		// document.getElementById('input').focus();
		// document.getElementById('input').value = '';

		console.log(inputRef.current);
		inputRef.current.focus();
		inputRef.current.value = '';
	};
	return (
		<div className='container mt-2'>
			<h1>Count: {count}</h1>
			<button
				onClick={() => {
					setCount((previousValue) => previousValue + 1);
				}}>
				Click +
			</button>
			<input
				ref={inputRef}
				id='input'
				className='form-control'
				onChange={handleChangeName}
			/>
			<button className='btn btn-success mt-2' onClick={handleAddTodo}>
				Add ToDo
			</button>

			{listTodo.map((item, index) => {
				return <p key={index}>{item}</p>;
			})}
		</div>
	);
}

export default DemoUseRef;
