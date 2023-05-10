import axios from 'axios';
import React, { useEffect, useState, memo } from 'react';

function ListToDo(props) {
	// setState luôn là hàm bất đồng bộ.
	const [todoList, setTodoList] = useState([]);

	console.log(props);

	const getAllTodo = () => {
		axios
			.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then((rs) => {
				console.log(rs);
				setTodoList(rs.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		// useEffect luôn chạy sau khi component mounting.
		getAllTodo();
	}, []);

	return (
		<div className='container'>
			<h1>To Do App</h1>
			<div className='w-25'>
				{todoList.map((todo) => {
					return (
						<div key={todo.id} className='d-flex justify-content-between mt-2'>
							<p>{todo.title}</p>
							<button
								className={`btn badge ${
									todo.completed ? 'bg-danger' : 'bg-primary'
								} `}>
								{todo.completed ? 'Completed' : 'TODO'}
							</button>
						</div>
					);
				})}
			</div>

			<button className='btn btn-success' onClick={getAllTodo}>
				Get All ToDo
			</button>

			<h3>Count ListToDo: {props.count}</h3>

			<button onClick={props.increaseCount}>Increase</button>

			<p>User Name: {props.user.name}</p>
		</div>
	);
}
// memo lưu lại toàn bộ component của chúng ta.

// memo: không nên sử dụng nhiều,

// tầng suất sử dụng: ít. Những component nào mà lag quá thì các bạn mới nên memo lại.
export default memo(ListToDo); // HOC: High order component
// 0xaaaaa !== 0xbbbb

const __useCallback = (cb, dep) => {
	return cb;
};

// const abc = __useCallback(() => {
// 	console.log('123');
// });

const __useMemo = (cb, dep) => {
	const value = cb();
	return value;
};

// const xyz = __useMemo(() => {
// 	return 121;
// });

// console.log({ xyz });

// const calc = () => {
// 	let count = 0;

// 	return () => {
// 		console.log('pre count', count);
// 		count = count + 1;
// 		return count;
// 	};
// };

// const ham1 = calc();
// console.log(ham1());
// console.log(ham1());
// console.log(ham1());
// console.log(ham1());
// console.log(ham1());
// console.log(ham1());
