import React, { useState } from 'react';

const AddABreak = () => {
	// const [breakTime, setBreakTime] = useState([]);

	const breakHandler = () => {
		console.log('breakTime');
	};

	return (
		<div className="my-3  ">
			<h5>Add A Break </h5>
			<div className="d-flex justify-content-between bg-light p-4  rounded">
				<button
					onClick={breakHandler}
					className="btn btn-outline-primary rounder p-1"
				>
					10<span>h</span>
				</button>
				<button
					onClick={breakHandler}
					className="btn btn-outline-primary rounder p-1"
				>
					20<span>h</span>
				</button>
				<button
					onClick={breakHandler}
					className="btn btn-outline-primary rounder p-1"
				>
					30<span>h</span>
				</button>
				<button
					onClick={breakHandler}
					className="btn btn-outline-primary rounder p-1"
				>
					40<span>h</span>
				</button>
				<button
					onClick={breakHandler}
					className="btn btn-outline-primary rounder p-1"
				>
					50<span>h</span>
				</button>
			</div>
		</div>
	);
};

export default AddABreak;
