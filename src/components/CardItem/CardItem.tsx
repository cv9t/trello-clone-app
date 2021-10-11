import React, { FC } from "react";
import { ICardItem } from "../../types/cardItem";
import { TiDelete } from "react-icons/ti";
import cl from "./CardItem.module.scss";
import { useActions } from "../../hooks/useActions";

interface CardItemProps {
	card: ICardItem;
	parentID: string;
}

const CardItem: FC<CardItemProps> = ({ card, parentID }) => {
	const { removeCard } = useActions();

	return (
		<div className={cl.cardItem}>
			<div className={cl.cardItem__inner}>
				<div className={cl.cardItem__header}>
					<div className={cl.cardItem__title}>{card.title}</div>
					<TiDelete
						className={cl.cardItem__icon}
						onClick={() => removeCard(parentID, card.id)}
					/>
				</div>
			</div>
		</div>
	);
};

export default CardItem;
