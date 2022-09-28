import React from 'react';
import './Profile.css';
import AddABreak from './AddABreak';
import PersonalInfo from './PersonalInfo';
import ExerciseDetails from './ExerciseDetails';

const Profile = ({ time }) => {
	return (
		<div>
			<PersonalInfo></PersonalInfo>
			<AddABreak></AddABreak>
			<ExerciseDetails time={time}></ExerciseDetails>
		</div>
	);
};

export default Profile;
