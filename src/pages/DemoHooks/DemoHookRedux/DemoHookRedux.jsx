import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DemoHookRedux() {
	// Cách lấy dữ liệu từ trên redux về component
	const fz = useSelector((rootState) => {
		return rootState.fontSizeReducer;
	});

	// Cách đẩy dữ liệu lên redux.
	const dispatch = useDispatch();

	const imgSrc = useSelector((rootState) => rootState.imgCarReducer);

	const tangGiamFontSize = (number) => {
		const action = {
			type: 'TANG_GIAM_FontSize',
			payload: number,
		};

		dispatch(action);
	};

	return (
		<div className='container'>
			<p
				style={{
					fontSize: fz + 'px',
				}}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, molestiae.
			</p>
			<button
				onClick={() => {
					tangGiamFontSize(2);
				}}>
				+
			</button>
			<button
				onClick={() => {
					tangGiamFontSize(-2);
				}}>
				-
			</button>
			<hr />
			<img src={imgSrc} alt='..' width={500} />
		</div>
	);
}

export default DemoHookRedux;
