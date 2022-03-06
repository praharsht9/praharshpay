import React from 'react';

function Footer() {
	return (
		<>
			<footer>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-lg-10 mx-auto'>
							<div className='row'>
								<div className='col-6 col-lg-3'>
									<h2>Company</h2>
									<ul>
										<li>
											<a href='# '>Home</a>
										</li>
										<li>
											<a href='# '>Home</a>
										</li>
										<li>
											<a href='# '>Home</a>
										</li>
										<li>
											<a href='# '>Home</a>
										</li>
									</ul>
								</div>

								<div className='col-6 col-lg-3'>
									<h2>Support</h2>
									<ul>
										<li>
											<a href='# '>Service</a>
										</li>
										<li>
											<a href='# '>Service</a>
										</li>
										<li>
											<a href='# '>Service</a>
										</li>
										<li>
											<a href='# '>Service</a>
										</li>
									</ul>
								</div>
								<div className='col-6 col-lg-3'>
									<h2>Services</h2>
									<ul>
										<li>
											<a href='# '>About</a>
										</li>
										<li>
											<a href='# '>About</a>
										</li>
										<li>
											<a href='# '>About</a>
										</li>
										<li>
											<a href='# '>About</a>
										</li>
									</ul>
								</div>
								<div className='col-6 col-lg-3'>
									<h2>Follow Us</h2>
									<div className='row footer-icon'>
										<div className='col-3 mx-auto d-flex '>
											<a href=''>
												<i className='fab fa-facebook fontawesome-style'></i>
											</a>
											<a href=''>
												<i className='fab fa-instagram fontawesome-style'></i>
											</a>
											<a href=''>
												<i className='fab fa-youtube fontawesome-style'></i>
											</a>
										</div>
									</div>
								</div>
							</div>
							<hr />
							<div className='mt-5 text-center'>
								<p className='main-hero-para'>
									Copyright @2021 PraharshPay. All Right
									reserved.
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
