import React, { useState } from 'react';
import './Profile.css';
import AddABreak from './AddABreak';
import PersonalInfo from './PersonalInfo';
import ExerciseDetails from './ExerciseDetails';

const Profile = ({ time }) => {
	const [data, setData] = useState({ exerciseData: 0 });
	return (
		<div>
			<PersonalInfo></PersonalInfo>
			<AddABreak setData={setData}></AddABreak>
			<ExerciseDetails time={time} data={data}></ExerciseDetails>
		</div>
	);
};

export default Profile;
