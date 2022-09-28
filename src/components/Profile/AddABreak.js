import React from 'react';

const AddABreak = () => {
	return (
		<div className="my-3  ">
			<h5>Add A Break</h5>
			<div className="d-flex justify-content-between bg-light p-4  rounded">
				<button className="btn btn-outline-primary rounder p-1">
					10<span>s</span>
				</button>
				<button className="btn btn-outline-primary rounder p-1">
					20<span>s</span>
				</button>
				<button className="btn btn-outline-primary rounder p-1">
					30<span>s</span>
				</button>
				<button className="btn btn-outline-primary rounder p-1">
					40<span>s</span>
				</button>
				<button className="btn btn-outline-primary rounder p-1">
					50<span>s</span>
				</button>
			</div>
		</div>
	);
};

export default AddABreak;
