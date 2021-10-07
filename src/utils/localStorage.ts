import { IBoardItem } from "../types/boardItem";

export const getState = () => {
	try {
		const boardCollectionState = localStorage.getItem("boardsCollection");

		if (boardCollectionState === null) {
			return undefined;
		}

		return JSON.parse(boardCollectionState);
	} catch (e) {
		return undefined;
	}
};

export const setState = (boards: IBoardItem[]) => {
	try {
		localStorage.setItem("boardsCollection", JSON.stringify(boards));
	} catch (e) {
		throw e;
	}
};
