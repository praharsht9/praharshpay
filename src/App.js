import './App.css';
// import Navbar from './Navbar';
// import HeroSection from './HeroSection';
// import HowItWorks from './HowItWorks';
// import AboutUs from './AboutUs';
// import Services from './Services';
// import Contact from './Contact';
// import Footer from './Footer';
import Home from './Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Error from './Pages/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import { Route, Link } from 'react-router-dom';
function App() {
	return (
		<>
			<Router basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route index path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/services' element={<Services />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</Router>
			{/* <Home /> */}
		</>
	);
}

export default App;
