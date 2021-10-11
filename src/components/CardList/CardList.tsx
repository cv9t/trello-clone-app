import React, { FC } from "react";
import { IBoardItem } from "../../types/boardItem";
import CardItem from "../CardItem/CardItem";

interface CardListProps {
	board: IBoardItem;
}

const CardList: FC<CardListProps> = ({ board }) => {
	const { cards } = board;

	return (
		<div>
			{cards.length > 0 &&
				cards.map((card) => <CardItem key={card.id} card={card} />)}
		</div>
	);
};

export default CardList;
