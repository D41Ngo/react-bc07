import React, { createContext, useContext, useState } from 'react';
import ChildCapMot from './ChildCapMot';
import ChildCapBon from './ChildCapBon';

// gía trị default của context được lấy khi component không nằm trong context.provider
export const LikeContext = createContext([111, () => {}]);
// Thêm displayName, để dễ dàng debug trên React Component
LikeContext.displayName = 'LikeContext';

// custom hook
export const useLikeContext = () => {
	const [like, setLike] = useContext(LikeContext);

	return [like, setLike];
};

function DemoUseContext() {
	const [like, setLike] = useState(99);

	return (
		<>
			<ChildCapBon />
			<LikeContext.Provider value={[like, setLike]}>
				<ChildCapMot />
			</LikeContext.Provider>
		</>
	);
}

export default DemoUseContext;
