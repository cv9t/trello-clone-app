import React, { FC } from "react";
import cl from "./Card.module.scss";

interface CardProps {
	listID: string;
	cardID: string;
	title: string;
}

const Card: FC<CardProps> = ({ listID, cardID, title }) => {
	return (
		<div className={cl.card}>
			<h3 className={cl.card__title}>{title}</h3>
		</div>
	);
};

export default Card;
