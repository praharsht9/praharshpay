import React from 'react';

function HeroSection() {
	return (
		<>
			<div className='hero'>
				<section className='container main-hero-container '>
					<div className='row'>
						<div className='col-12 col-lg-6 d-flex justify-content-center flex-column align-items-center left-part-hero hero-banner order-lg-first order-last'>
							<h1 className='display-2'>
								Online Payment Made Easy For You.
							</h1>

							<p className='main-hero-para'>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Hic fuga rem totam ullam
								voluptatibus pariatur id. Sunt, perspiciatis,
								quisquam soluta, omnis deleniti harum inventore
								dolorem numquam error fugit qui? Omnis.
							</p>
							{/* <br /> */}
							{/* <div className='early-access'>
								<h3 className='text-left '>
									Get Early Access for you
								</h3>
							</div> */}

							<div className='input-group mt-3'>
								<input
									type='text'
									className='rounded-pill w-75 me-3 form-control-text form-new-style'
									placeholder='Enter Your Email Address'
								/>
								<div className='input-group-button'>
									Get It Now
								</div>
							</div>
						</div>
						{/* Hero banner Right side */}
						<div className='col-12 col-lg-6 d-flex justify-content-center align-items-center main-hero-section-images'>
							<img
								src='./images/hero-1.jpg'
								alt=''
								className='img-fluid first-image'
							/>
							<img
								src='./images/hero-2.jpg'
								alt=''
								className='img-fluid second-image'
							/>
							{/* image-fluid is very important for the images height and width */}
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default HeroSection;
