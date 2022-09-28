import React from 'react';

const ExerciseDetails = ({ time }) => {
	// console.log(time);

	let totalTime = 0;
	for (const newTime of time) {
		totalTime = totalTime + newTime.times;
	}
	return (
		<div>
			<h5>Exercise Details</h5>
			<div className="d-flex justify-content-between align-items-center px-3 py-2 bg-light rounded-4">
				<h6>Exercise time</h6>
				<p>
					{totalTime} <span>seconds</span>
				</p>
			</div>
			<div className="d-flex justify-content-between align-items-center mt-3 px-3 py-2 bg-light rounded-4">
				<h6>Break time</h6>
				<p>
					0 <span>seconds</span>
				</p>
			</div>

			<button className="btn btn-primary btn-lg w-100 mt-4">
				Activity Completed
			</button>
		</div>
	);
};

export default ExerciseDetails;
