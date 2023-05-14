import React from 'react';
import { useLikeContext } from './DemoUseContext';

function ChildCapBa(props) {
	const [like, setLike] = useLikeContext();

	return (
		<div
			style={{
				padding: 20,
				background: 'black',
				color: 'white',

				// border: '2px dotted black',
			}}>
			ChildCapBa
			<p>Like: {like}</p>
			<p>Count: {props.count}</p>
		</div>
	);
}

export default ChildCapBa;
