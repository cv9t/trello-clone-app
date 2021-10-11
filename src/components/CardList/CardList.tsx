import React, { FC } from "react";
import { IBoardItem } from "../../types/boardItem";
import CardItem from "../CardItem/CardItem";
import cl from "./CardList.module.scss";

interface CardListProps {
	board: IBoardItem;
}

const CardList: FC<CardListProps> = ({ board }) => {
	const { cards } = board;

	return (
		<div className={cl.cardList}>
			{cards.length > 0 &&
				cards.map((card) => (
					<CardItem key={card.id} card={card} parentID={board.id} />
				))}
		</div>
	);
};

export default CardList;
