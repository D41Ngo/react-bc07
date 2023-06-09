import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// config redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';

const root = ReactDOM.createRoot(document.getElementById('main'));

// App là một thẻ của React do chúng ta tự định nghĩa ra
// App là một component
// Thẻ do chúng ta tự định nghĩa sẽ bắt đầu bằng ký tự IN HOA
// <React.StrictMode>
// {/* React.StrictMode: sẽ giúp chúng ta phát hiện ra lỗi ảnh hưởng để hiệu suất của trang web */}
root.render(
	<Provider store={store}>
		<App />
	</Provider>
	// {/*App: Root của ứng dụng */}
);
// </React.StrictMode>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
