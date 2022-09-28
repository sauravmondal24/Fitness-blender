import React from 'react';
import './Profile.css';
import AddABreak from './AddABreak';
import PersonalInfo from './PersonalInfo';
import ExerciseDetails from './ExerciseDetails';

const Profile = () => {
	return (
		<div>
			<PersonalInfo></PersonalInfo>
			<AddABreak></AddABreak>
			<ExerciseDetails></ExerciseDetails>
		</div>
	);
};

export default Profile;
