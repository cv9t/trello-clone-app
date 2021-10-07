export const validateInput = (value: string | undefined) => {
	if (value === " " || !value) return false;

	return true;
};
