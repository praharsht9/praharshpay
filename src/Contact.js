import React, { useState } from 'react';

const Contact = () => {
	const [userData, setUserData] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		address: '',
		message: '',
	});

	let name, value;
	const postUserData = (event) => {
		name = event.target.name;
		value = event.target.value;

		setUserData({ ...userData, [name]: value });
	};

	// connect with firebase
	const submitData = async (event) => {
		event.preventDefault();
		const { firstName, lastName, phone, email, address, message } =
			userData;

		if (firstName && lastName && phone && email && address && message) {
			const res = fetch(
				'https://praharshpay-default-rtdb.firebaseio.com/userDataRecords.json',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						firstName,
						lastName,
						phone,
						email,
						address,
						message,
					}),
				}
			);

			if (res) {
				setUserData({
					firstName: '',
					lastName: '',
					phone: '',
					email: '',
					address: '',
					message: '',
				});
				alert('Data Stored');
			} else {
				alert('plz fill the data');
			}
		} else {
			alert('plz fill the data');
		}
	};

	return (
		<>
			<section className='contact-Section'>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-lg-10 mx-auto'>
							<div className='row'>
								<div className='contact-leftside col-12 col-lg-5'>
									<h1 className='main-heading fw-bold'>
										Connect with our sales team
									</h1>
									<p className='main-hero-para'>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Officia nesciunt qui
										minima? Aliquid veritatis consectetur et
										sed quo dignissimos esse minima corporis
										suscipit assumenda doloribus ut modi,
										earum consequuntur eos.
									</p>

									<figure>
										<img
											src='./images/sec-5.jpg'
											alt=''
											className='img-fluid contact-img'
										/>
									</figure>
								</div>

								{/* Right side of contact  */}

								<div className='contact-rightside col-12 col-lg-7'>
									<form action='' method='POST'>
										<div className='container'>
											<div className='row'>
												<div className='col-12 col-lg-6 contact-input-field'>
													<input
														type='text'
														name='firstName'
														id=''
														className='form-control'
														placeholder='First Name'
														value={
															userData.firstName
														}
														onChange={postUserData}
													/>
												</div>
												<div className='col-12 col-lg-6 contact-input-field'>
													<input
														type='text'
														name='lastName'
														id=''
														className='form-control'
														placeholder='Last Name'
														value={
															userData.lastName
														}
														onChange={postUserData}
													/>
												</div>
												<br />
												<div className='col-12 col-lg-6 contact-input-field'>
													<input
														type='text'
														name='phone'
														id=''
														className='form-control'
														placeholder='Phone Number'
														value={userData.phone}
														onChange={postUserData}
													/>
												</div>
												<div className='col-12 col-lg-6 contact-input-field'>
													<input
														type='text'
														name='email'
														id=''
														className='form-control'
														placeholder='Email Id'
														value={userData.email}
														onChange={postUserData}
													/>
												</div>
											</div>

											<div className='row'>
												<div className='col-12 contact-input-field'>
													<input
														type='text'
														name='address'
														id=''
														className='form-control'
														placeholder='Address'
														value={userData.address}
														onChange={postUserData}
													/>
												</div>
											</div>
											<div className='row'>
												<div className='col-12 '>
													<input
														type='text'
														name='message'
														id=''
														className='form-control'
														placeholder='Message'
														value={userData.message}
														onChange={postUserData}
													/>
												</div>
											</div>
											<div class='form-check form-checkbox-style'>
												<input
													class='form-check-input'
													type='checkbox'
													value=''
													id='flexCheckChecked'
												/>
												<label
													class='form-check-label'
													for='flexCheckChecked'
													className='main-hero-para'
												>
													I agreed that the
													PraharshPay may contact me
													at the email address or
													phone number above.
												</label>
											</div>

											<button
												type='submit'
												className='btn btn-style'
												onClick={submitData}
											>
												Submit
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
