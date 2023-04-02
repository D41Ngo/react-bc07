import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('main'));

// App là một thẻ của React do chúng ta tự định nghĩa ra
// App là một component
// Thẻ do chúng ta tự định nghĩa sẽ bắt đầu bằng ký tự IN HOA
root.render(
	<React.StrictMode>
		{/* React.StrictMode: sẽ giúp chúng ta phát hiện ra lỗi ảnh hưởng để hiệu suất của trang web */}
		<App />
		{/*App: Root của ứng dụng */}
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
