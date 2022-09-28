import React, { useEffect, useState } from 'react';
import Yoga from '../Yoga/Yoga';

const Health = () => {
	const [healths, setHealths] = useState([]);

	useEffect(() => {
		fetch('data.json')
			.then((res) => res.json())
			.then((data) => setHealths(data));
	}, []);
	return (
		<div>
			{healths.map((health) => (
				<Yoga key={health.id} health={health}></Yoga>
			))}
		</div>
	);
};

export default Health;
