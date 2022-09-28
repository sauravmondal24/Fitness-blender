import React from 'react';

const Yoga = (props) => {
	const { id } = props.health;
	console.log(props);
	return (
		<div>
			<h2>Yoga list title{id}</h2>
		</div>
	);
};

export default Yoga;
