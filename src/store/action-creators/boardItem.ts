import {
	BoardItemAction,
	BoardItemActionTypes,
	IBoardItem,
} from "../../types/boardItem";
import { ICardItem } from "../../types/cardItem";

export const addBoard = (board: IBoardItem): BoardItemAction => {
	return { type: BoardItemActionTypes.ADD_BOARD, payload: board };
};

export const addCard = ({
	parentID,
	card,
}: {
	parentID: string | undefined;
	card: ICardItem;
}): BoardItemAction => {
	return { type: BoardItemActionTypes.ADD_CARD, payload: { parentID, card } };
};

export const fillBoards = (boards: IBoardItem[]): BoardItemAction => {
	return { type: BoardItemActionTypes.GET_BOARDS, payload: boards };
};

export const removeBoard = (id: string): BoardItemAction => {
	return { type: BoardItemActionTypes.REMOVE_BOARD, payload: id };
};

export const removeCard = (
	parentID: string,
	cardID: string
): BoardItemAction => {
	return {
		type: BoardItemActionTypes.REMOVE_CARD,
		payload: { parentID, cardID },
	};
};
