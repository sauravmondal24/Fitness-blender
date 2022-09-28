import React, { useEffect, useState } from 'react';
import Yoga from '../Yoga/Yoga';
import './Health.css';

const Health = () => {
	const [healths, setHealths] = useState([]);

	useEffect(() => {
		fetch('data.json')
			.then((res) => res.json())
			.then((data) => setHealths(data));
	}, []);
	return (
		<div>
			<h3 className="py-3 text-primary">Select today’s exercise</h3>
			<div className="yogaList">
				{healths.map((health) => (
					<Yoga key={health.id} health={health}></Yoga>
				))}
			</div>
		</div>
	);
};

export default Health;
