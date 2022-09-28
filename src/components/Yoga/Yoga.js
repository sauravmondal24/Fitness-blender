import React from 'react';

const Yoga = (props) => {
	const { img, title, description, age, time } = props.health;
	// console.log(props);
	return (
		<div className="py-3">
			<div class="row ">
				<div class="col">
					<div class="card h-100">
						<img class="card-img-top bannerImg" src={img} alt="" />
						<div class="card-body">
							<h5 class="card-title">{title}</h5>
							<p class="card-text">{description.slice(0, 140)}...</p>
							<h6 class="card-text">For Age : {age}</h6>
							<h6 class="card-text">Time required : {time}</h6>
						</div>
						<div class="card-footer">
							<button className="btn btn-primary w-100 fw-bold">
								Add to list
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Yoga;
