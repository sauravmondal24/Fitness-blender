const addToLS = (id) => {
	let breakTime = {};

	const storedTime = localStorage.getItem('break-time');
	if (storedTime) {
		breakTime = JSON.parse(storedTime);
	}

	const time = breakTime[id];
	if (time) {
		const newTime = time + 1;
		breakTime[id] = newTime;
	} else {
		breakTime[id] = 1;
	}
	localStorage.setItem('break-time', JSON.stringify(breakTime));
};
const removeFromDb = (id) => {
	const storedTime = localStorage.getItem('break-time');
	if (storedTime) {
		const breakTime = JSON.parse(storedTime);
		if (id in breakTime) {
			delete breakTime[id];
			localStorage.setItem('break-time', JSON.stringify(breakTime));
		}
	}
};

export { addToLS, removeFromDb };
