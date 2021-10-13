export const getState = (key: string) => {
	try {
		const stateCollection = localStorage.getItem(key);

		if (stateCollection === null) {
			return undefined;
		}

		return JSON.parse(stateCollection);
	} catch (e) {
		throw e;
		return undefined;
	}
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setState = (state: any) => {
	try {
		localStorage.setItem(`${state}Collection`, JSON.stringify(state));
	} catch (e) {
		throw e;
	}
};
