import React, { useState } from 'react';
import howToUseApp from './API/HowToUse';

function AboutUs() {
	const [aboutData, setAboutData] = useState(howToUseApp);
	return (
		<>
			<section className='common-section our-services'>
				<div className='container mb-5'>
					<div className='row'>
						{/* Left section */}
						<div className='col-12  col-lg-5 text-center'>
							<img src='./images/sec-3.jpg' alt='About us' />
						</div>

						{/* Right Section */}
						<div className='col-12  col-lg-7 text-left our-service-list'>
							<h3 className='mini-title'>
								--AVAILABLE @GOOGLE AND IOS APP STORE ONLY
							</h3>
							<h1 className='main-heading heading-style'>
								How to Use App?
							</h1>
							{aboutData.map((currentElement) => {
								const { id, title, info } = currentElement;
								return (
									<>
										<div
											className='row our-services-info'
											key={id}
										>
											<div className='col-1 our-service-number'>
												{id}
											</div>
											<div className='col-10 our-service-data'>
												<h2>{title}</h2>
												<p className='main-hero-para'>
													{info}
												</p>
											</div>
										</div>
									</>
								);
							})}

							<br />
							<button className='btn-style ' id='new-btn'>
								Learn More
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* forth section  */}

			<section className='common-section our-services'>
				<div className='container mb-5'>
					<div className='row'>
						{/* Left section */}

						<div className='col-12  col-lg-7 text-left our-service-list'>
							<h3 className='mini-title'>
								--SUPPORT IN ANY LANGUAGE
							</h3>
							<h1 className='main-heading'>
								World class support is available 24/7
							</h1>
							{aboutData.map((currentElement) => {
								const { id, title, info } = currentElement;
								return (
									<>
										<div
											className='row our-services-info'
											key={id}
										>
											<div className='col-1 our-service-number'>
												{id}
											</div>
											<div className='col-10 our-service-data'>
												<h2>{title}</h2>
												<p className='main-hero-para'>
													{info}
												</p>
											</div>
										</div>
									</>
								);
							})}

							<br />
							<button className='btn-style' id='new-btn'>
								Learn More
							</button>
						</div>
						{/* Right Section */}
						<div className='col-12  col-lg-5 text-center'>
							<img src='./images/sec-4.jpg' alt='About us' />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default AboutUs;
