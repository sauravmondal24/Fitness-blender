import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExerciseDetails = ({ time }) => {
	const notify = () => {
		toast.success('Congratulation, Done your activity!', {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	};

	let totalTime = 0;
	for (const newTime of time) {
		totalTime = totalTime + newTime.times;
	}

	return (
		<div>
			<h5>Exercise Details</h5>
			<div className="d-flex justify-content-between align-items-center px-3 py-2 bg-light rounded-4 shadow">
				<h6>Exercise time</h6>
				<p>
					{totalTime} <span>hour</span>
				</p>
			</div>

			<div className="d-flex justify-content-between align-items-center mt-3 px-3 py-2 bg-light rounded-4 shadow">
				<h6>Break time</h6>
				<p>
					0 <span>hour</span>
				</p>
			</div>

			<div>
				<button onClick={notify} className="btn btn-primary btn-lg w-100 mt-4">
					Activity Completed
				</button>
				<ToastContainer />
			</div>
		</div>
	);
};

export default ExerciseDetails;
