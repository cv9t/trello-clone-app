export const getState = (key: string) => {
	try {
		const stateCollection = localStorage.getItem(key);

		if (stateCollection === null) {
			return undefined;
		}

		return JSON.parse(stateCollection);
	} catch (e) {
		return undefined;
	}
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setState = (name: string, state: any) => {
	try {
		localStorage.setItem(`${name}`, JSON.stringify(state));
	} catch (e) {
		throw e;
	}
};
