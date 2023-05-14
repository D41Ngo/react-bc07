import './App.css';
// import CssComponent from './modules/CssComponent/CssComponent';
// Cau hinh router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Header from './pages/components/Header';
import Detail from './pages/Detail';
import Search from './pages/Search';
import BaiTapQuanLyForm from './pages/BaiTapQuanLyForm/BaiTapQuanLyForm';
import Lifecycle from './pages/Lifecycle/Lifecycle';
import DemoUseState from './pages/DemoHooks/DemoUseState/DemoUseState';
import DemoUseEffect from './pages/DemoHooks/DemoUseEffect/DemoUseEffect';
import DemoUseRef from './pages/DemoHooks/DemoUseRef/DemoUseRef';
import DemoHookRedux from './pages/DemoHooks/DemoHookRedux/DemoHookRedux';
import DemoHookRouter from './pages/DemoHooks/DemoHookRouter';
import DemoUseContext from './pages/DemoHooks/DemoUseContext/DemoUseContext';

function App() {
	return (
		<BrowserRouter>
			{/*	Cau hinh route cho component/trang tuong ung*/}

			{/* nếu đặt component bên ngoài thẻ route thì component luôn luôn được render ra giao diện */}

			<Header />

			<Switch>
				{/*nếu chúng ta không có props exact thì khi route: '/contact/fsadfasdf' thí nó cũng render ra component Contact
                Để fix vấn đề này thì chúng ta thêm props exact vào: '/contact' chỉ như thế này thì nó mới render ra component Contact cho chúng ta*/}
				<Route
					exact
					path={'/home'}
					render={(propsRoute) => {
						//propsRoute: history, match, location
						// Mong muon chi co trang home moi' co' Header.
						console.log('propsRoute', propsRoute);
						const obj1 = {
							name: 'Nguyen van a',
							id: '12',
						};
						return (
							<>
								{/* <Header /> */}
								{/*<Home history={propsRoute.history} match={propsRoute.match} location={propsRoute.location}/>*/}

								<Home {...propsRoute} />

								{/*<Home {...obj1} />*/}
								{/* <Home name='Nguyen van a' id='12' /> */}

								{/**/}
								<p>Home.....</p>
								{/*<Footer />*/}
								{/* ..... */}
							</>
						);
					}}
				/>
				{/*Duong dan phai viet tat ca bang ky tuong thuong.*/}
				<Route exact path={'/contact'} component={Contact} />
				<Route exact path={'/about'} component={About} />
				<Route exact path={'/login'} component={Login} />
				<Route exact path={'/register'} component={Register} />

				<Route exact path={'/search'} component={Search} />

				<Route exact path={'/btqlf'} component={BaiTapQuanLyForm} />

				<Route exact path={'/lifecycle'} component={Lifecycle} />

				{/* Hooks */}
				<Route exact path={'/use-state'} component={DemoUseState} />

				<Route exact path={'/use-effect'} component={DemoUseEffect} />

				<Route exact path={'/use-ref'} component={DemoUseRef} />

				<Route exact path={'/hook-redux'} component={DemoHookRedux} />

				<Route exact path={'/hook-router'} component={DemoHookRouter} />

				<Route exact path={'/hook-context'} component={DemoUseContext} />

				{/*khai báo parameter trên url*/}
				<Route exact path={'/detail/:demoId'} component={Detail} />

				{/*Route mac dinh khi nguoi dung vao trang web cua chung ta*/}
				<Route path={'/'} component={Home} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
