import React from 'react';
import ChildCapBa from './ChildCapBa';

function ChildCapHai(props) {
	return (
		<div
			style={{
				padding: 50,
				background: 'blue',
				color: 'white',

				// border: '2px dotted blue',
			}}>
			Child Cap Hai
			<ChildCapBa count={props.count} />
		</div>
	);
}

export default ChildCapHai;
