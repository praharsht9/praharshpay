import React, { useState } from 'react';
import workapi from './API/WorkApi';

const HowItWorks = () => {
	const [workData, setWorkData] = useState(workapi);
	console.log(workData);
	return (
		<>
			<section className='work-container container worksection'>
				<h1 className='text-center main-heading'>How does it work</h1>
				<div className='row'>
					{workData.map((currentElement) => {
						const { id, logo, title, info } = currentElement;
						return (
							<div className='col-12 col-lg-4 text-center work-container-sub-part'>
								<i class={`fontawesome-style-new ${logo}`}></i>
								<h2 className='sub-heading'>{title}</h2>
								<p className='main-hero-para-two w-100'>
									{info}
								</p>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default HowItWorks;
