import React, { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import cl from "./Card.module.scss";

interface CardProps {
	listID: string;
	cardID: string;
	title: string;
	index: number;
}

const Card: FC<CardProps> = ({ cardID, title, index }) => {
	return (
		<Draggable draggableId={cardID} index={index}>
			{(provided) => (
				<div
					className={cl.card}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<h3 className={cl.card__title}>{title}</h3>
				</div>
			)}
		</Draggable>
	);
};

export default Card;
