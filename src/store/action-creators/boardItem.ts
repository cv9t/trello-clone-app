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
	id,
	card,
}: {
	id: string | undefined;
	card: ICardItem;
}): BoardItemAction => {
	return { type: BoardItemActionTypes.ADD_CARD, payload: { id, card } };
};

export const fillBoards = (boards: IBoardItem[]): BoardItemAction => {
	return { type: BoardItemActionTypes.GET_BOARDS, payload: boards };
};

export const removeBoard = (id: string): BoardItemAction => {
	return { type: BoardItemActionTypes.REMOVE_BOARD, payload: id };
};
