import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import AboutUs from './AboutUs';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<HowItWorks />
			<AboutUs />
			<Services />
			<Contact />
			<Footer />
		</>
	);
}

export default Home;
