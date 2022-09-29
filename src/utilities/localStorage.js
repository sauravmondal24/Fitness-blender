// use local storage to manage cart data
const addToLS = (id) => {
	let breakTime = {};

	//get the shopping cart from local storage
	const storedCart = localStorage.getItem('break-time');
	if (storedCart) {
		breakTime = JSON.parse(storedCart);
	}

	// add quantity
	const time = breakTime[id];
	if (time) {
		const newTime = time + 1;
		breakTime[id] = newTime;
	} else {
		breakTime[id] = 1;
	}
	localStorage.setItem('break-time', JSON.stringify(breakTime));
};

const getStoredTime = () => {
	let breakTime = {};

	//get the shopping cart from local storage
	const storedTime = localStorage.getItem('break-time');
	if (storedTime) {
		breakTime = JSON.parse(storedTime);
	}
	return breakTime;
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

export { addToLS, getStoredTime, removeFromDb };
