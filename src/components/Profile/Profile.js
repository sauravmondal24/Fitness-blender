import React from 'react';
import './Profile.css';
import img from '../../Images/sauravMondal.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
	return (
		<div className="py-5 d-flex">
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
	);
};

export default Profile;
