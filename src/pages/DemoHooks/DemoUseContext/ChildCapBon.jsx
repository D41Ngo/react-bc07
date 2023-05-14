import React, { useContext } from 'react';
import { LikeContext } from './DemoUseContext';

function ChildCapBon() {
	// kq: 111, vì nó nằm bên ngoài LikeContext, nên nó sẽ lấy giá trị mặc định khi tạo context
	const [like, setLike] = useContext(LikeContext);
	return <div>{like}</div>;
}

export default ChildCapBon;
