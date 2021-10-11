import React, { FC } from "react";
import { ICardItem } from "../../types/cardItem";

interface CardItemProps {
	card: ICardItem;
}

const CardItem: FC<CardItemProps> = ({ card }) => {
	return <div>{card.title}</div>;
};

export default CardItem;
