import React from 'react';
import { addToLS } from '../../utilities/localStorage';

const AddABreak = (props) => {
	const { setData } = props;
	const breakHandler = (e) => {
		setData({ exerciseData: e.target.value });
		let addDataToLS = e.target.value;
		addToLS(addDataToLS);
	};
	return (
		<div className="my-3  ">
			<h5>Add A Break</h5>

			<div className="d-flex justify-content-between bg-light p-4  rounded">
				<button
					onClick={breakHandler}
					value={1}
					className="btn btn-outline-primary rounder p-2"
					id=""
				>
					1<span>h</span>
				</button>
				<button
					onClick={breakHandler}
					className="btn btn-outline-primary rounder p-2"
					value={2}
				>
					2<span>h</span>
				</button>
				<button
					onClick={breakHandler}
					className="btn btn-outline-primary rounder p-2"
					value={3}
				>
					3<span>h</span>
				</button>
				<button
					onClick={breakHandler}
					className="btn btn-outline-primary rounder p-2"
					value={4}
				>
					4<span>h</span>
				</button>
				<button
					onClick={breakHandler}
					className="btn btn-outline-primary rounder p-2"
					value={5}
				>
					5<span>h</span>
				</button>
			</div>
		</div>
	);
};

export default AddABreak;
