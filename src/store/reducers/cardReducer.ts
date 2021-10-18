import { CardAction, CardActionTypes, CardState } from "../../types/card";

const initialState: CardState = {
	cards: {},
};

export const cardReducer = (
	state = initialState,
	action: CardAction
): CardState => {
	switch (action.type) {
		case CardActionTypes.ADD_CARD: {
			const { boardID, listID, cardID, title } = action.payload;
			const newCard = {
				boardID,
				listID,
				id: cardID,
				title,
				isArchived: false,
			};

			return {
				...state,
				cards: { ...state.cards, [cardID]: newCard },
			};
		}
		case CardActionTypes.REMOVE_CARD: {
			const { cardID } = action.payload;
			const cards = { ...state.cards };

			delete cards[cardID];

			return { ...state, cards };
		}
		case CardActionTypes.ARCHIVE_CARD: {
			const { cardID } = action.payload;
			const card = state.cards[cardID];

			if (card.isArchived) card.isArchived = false;
			else card.isArchived = true;

			return { ...state, cards: { ...state.cards, [cardID]: card } };
		}
		case CardActionTypes.SET_CARDS: {
			return { ...state, cards: action.payload };
		}
		case CardActionTypes.REMOVE_LIST: {
			const { listID } = action.payload;
			const newCards = Object.entries(state.cards).filter(
				([cardID, card]) => {
					if (card.listID !== listID) return [cardID, card];
				}
			);

			return { ...state, cards: Object.fromEntries(newCards) };
		}
		case CardActionTypes.REMOVE_BOARD: {
			const { boardID } = action.payload;
			const newCards = Object.entries(state.cards).filter(
				([cardID, card]) => {
					if (card.boardID !== boardID) return [cardID, card];
				}
			);

			return { ...state, cards: Object.fromEntries(newCards) };
		}
		case CardActionTypes.DRAG_DROP: {
			const { droppableIdStart, droppableIdEnd, draggableId, type } =
				action.payload;

			if (type !== "card") return state;
			if (droppableIdStart === droppableIdEnd) return state;

			const reorderedCard = state.cards[draggableId];
			reorderedCard.listID = droppableIdEnd;

			return {
				...state,
				cards: { ...state.cards, [draggableId]: reorderedCard },
			};
		}
		default:
			return state;
	}
};
