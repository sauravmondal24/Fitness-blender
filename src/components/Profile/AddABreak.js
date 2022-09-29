import React, { useState } from 'react';
import { addToLS } from '../../utilities/localStorage';

const AddABreak = () => {
	const breakHandler = (props) => {
		console.log(props);
		addToLS(props);
	};

	return (
		<div className="my-3  ">
			<h5>Add A Break</h5>

			<div className="d-flex justify-content-between bg-light p-4  rounded shadow">
				<button
					onClick={() => breakHandler(10)}
					className="btn btn-outline-primary rounder p-1"
					id=""
				>
					10<span>h</span>
				</button>
				<button
					onClick={() => breakHandler(20)}
					className="btn btn-outline-primary rounder p-1"
				>
					20<span>h</span>
				</button>
				<button
					onClick={() => breakHandler(30)}
					className="btn btn-outline-primary rounder p-1"
				>
					30<span>h</span>
				</button>
				<button
					onClick={() => breakHandler(40)}
					className="btn btn-outline-primary rounder p-1"
				>
					40<span>h</span>
				</button>
				<button
					onClick={() => breakHandler(50)}
					className="btn btn-outline-primary rounder p-1"
				>
					50<span>h</span>
				</button>
			</div>
		</div>
	);
};

export default AddABreak;
