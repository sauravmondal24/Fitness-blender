import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import Yoga from '../Yoga/Yoga';
import './Health.css';

const Health = () => {
	const [healths, setHealths] = useState([]);
	const [time, setTime] = useState([]);

	useEffect(() => {
		fetch('data.json')
			.then((res) => res.json())
			.then((data) => setHealths(data));
	}, []);

	const clickListBtn = (health) => {
		console.log(health);
		const newTime = [...time, health];
		setTime(newTime);
		// console.log(time.length);
	};

	return (
		<div>
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
							<h3 className=" text-primary">
								Select today’s exercise {time.length}
							</h3>
							<div className="yogaList">
								{healths.map((health) => (
									<Yoga
										key={health.id}
										health={health}
										clickListBtn={clickListBtn}
									></Yoga>
								))}
							</div>
						</div>

						<div className="col-md-3 bg-white profileSec">
							<Profile time={time}></Profile>
						</div>
					</div>
				</div>
			</div>
		</div>

		// Hew sec
	);
};

export default Health;
