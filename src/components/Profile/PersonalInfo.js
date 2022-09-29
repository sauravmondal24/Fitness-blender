import React from 'react';
import img from '../../Images/sauravMondal.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const PersonalInfo = () => {
	return (
		<div>
			<div className="pt-4 pb-3 d-flex">
				<div>
					<img
						className="img-fluid img-circle profileImg me-3"
						src={img}
						alt=""
					/>
				</div>

				<div>
					<h5>Saurav Mondal</h5>
					<p>
						<span className="px-1">
							<FontAwesomeIcon icon={faLocationDot} />
						</span>
						Faridpur, Bangladesh
					</p>
				</div>
			</div>

			<div className="d-flex justify-content-between bg-light px-4 py-2 rounded shadow">
				<div>
					<h4>
						65<span className="fs-6 fw-normal">kg</span>
					</h4>
					<p>Weight</p>
				</div>
				<div>
					<h4>5.7"</h4>
					<p>Height</p>
				</div>
				<div>
					<h4>
						25<span className="fs-6 fw-normal">y</span>
					</h4>
					<p>Age</p>
				</div>
			</div>
		</div>
	);
};

export default PersonalInfo;
