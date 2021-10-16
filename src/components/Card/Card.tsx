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
	function getStyle(style, snapshot) {
		if (!snapshot.isDropAnimating) {
			return style;
		}
		return {
			...style,
			transitionDuration: `0.02s`,
		};
	}

	return (
		<Draggable draggableId={cardID} index={index}>
			{(provided, snapshot) => (
				<div
					className={cl.card}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					style={getStyle(provided.draggableProps.style, snapshot)}
				>
					<h3 className={cl.card__title}>{title}</h3>
				</div>
			)}
		</Draggable>
	);
};

export default Card;
