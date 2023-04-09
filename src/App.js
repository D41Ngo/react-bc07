import './App.css';
import Home from './modules/BTLayout/Home';
import CarColor from './modules/CarColor/CarColor';
import Condition from './modules/Condition/Condition';
// import CssComponent from './modules/CssComponent/CssComponent';
import CssComp from './modules/CssComponent/CssComponent';
import DataBinding from './modules/DataBinding/DataBinding';
import HandleEvent from './modules/HandleEvent/HandleEvent';
import HouseColor from './modules/HouseColor';
import TangFontSize from './modules/TangFontSize';
import CardRCC from './modules/TaoComponent/CardRCC';
import CardRFC from './modules/TaoComponent/CardRFC';
import Navbar from './modules/TaoComponent/Navbar';
import RenderArray from './modules/RenderArray';
import DemoProps from './modules/Props/DemoProps';
import ProductList from './modules/Props/ShoeShop/index';
import PhoneShop from './modules/Props/PhoneShop';

function App() {
	return (
		<div className='App'>
			{/* <Navbar /> */}
			{/* <Navbar></Navbar> */}
			{/* <CardRCC />
			<CardRCC />
			<CardRCC></CardRCC>
			<CardRFC /> */}
			{/* <Home /> */}
			{/* <DataBinding /> */}
			{/* <HandleEvent /> */}
			{/* <CssComp /> */}
			{/* <Condition /> */}
			{/* <TangFontSize /> */}
			{/* <HouseColor /> */}
			{/* <CarColor /> */}

			{/* <RenderArray /> */}

			{/* <DemoProps /> */}

			{/* <ProductList /> */}

			<PhoneShop />
		</div>
	);
}

export default App;
