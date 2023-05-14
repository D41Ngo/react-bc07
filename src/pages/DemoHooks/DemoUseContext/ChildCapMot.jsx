import React, { useState } from 'react';
import ChildCapHai from './ChildCapHai';
import { useLikeContext } from './DemoUseContext';

function ChildCapMot() {
	const [count, setCount] = useState(0);

	// useContext: Để lấy giá trị được truyền ở Context.Provider
	const [like, setLike] = useLikeContext();

	return (
		<div
			style={{
				width: '100%',
				height: 700,
				background: 'green',
				color: 'white',
				padding: 50,

				// border: '2px dotted green',
			}}>
			Child Cap Mot
			<p>Like: {like}</p>
			<button
				className='btn btn-success'
				onClick={() => {
					// setLike(like + 1);
					setLike((like) => {
						// Phải return để cập nhật state mới
						return like + 1;
					});
				}}>
				Like
			</button>
			<hr />
			<p>Count: {count}</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}>
				+
			</button>
			<ChildCapHai count={count} />
		</div>
	);
}

export default ChildCapMot;
