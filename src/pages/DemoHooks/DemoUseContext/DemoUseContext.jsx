import React, { createContext, useState } from 'react';

const CountContext = createContext(0);

function DemoUseContext() {
	const [count, setCount] = useState(0);

	return (
		<CountContext.Provider value={[count, setCount]}>
			DemoUseContext
		</CountContext.Provider>
	);
}

export default DemoUseContext;
