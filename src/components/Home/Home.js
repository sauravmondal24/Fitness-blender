import React from 'react';
import Health from '../Health/Health';
import Profile from '../Profile/Profile';
import './Home.css';

const Home = () => {
	return (
		<div className="text-start bg-light">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<header className="mt-5">
							<img
								className="img-fluid logoImg"
								src="https://cloudfront.fitnessblender.com/assets/img/logos/fb-logo.svg"
								alt=""
							/>
						</header>
						<Health></Health>
					</div>
					<div className="col-md-3 bg-white profileSec">
						<Profile></Profile>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
