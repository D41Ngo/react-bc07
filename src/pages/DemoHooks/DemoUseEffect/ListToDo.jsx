import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ListToDo() {
	// setState luôn là hàm bất đồng bộ.
	const [todoList, setTodoList] = useState([]);

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
		</div>
	);
}

export default ListToDo;
