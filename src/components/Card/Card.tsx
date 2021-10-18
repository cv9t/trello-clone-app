import React, { FC } from "react";
import {
	Draggable,
	DraggableStateSnapshot,
	DraggingStyle,
	NotDraggingStyle,
} from "react-beautiful-dnd";
import { ICard } from "../../types/card";
import MyButton from "../UI/button/MyButton/MyButton";
import { MdDone, MdDelete } from "react-icons/md";
import { TiArrowBack } from "react-icons/ti";
import cl from "./Card.module.scss";
import classNames from "classnames";
import { useActions } from "../../hooks/useActions";

interface CardProps {
	card: ICard;
	index: number;
}

const Card: FC<CardProps> = ({ card, index }) => {
	const { archiveCard, removeCard } = useActions();

	const getStyle = (
		style: DraggingStyle | NotDraggingStyle | undefined,
		snapshot: DraggableStateSnapshot
	) => {
		if (!snapshot.isDropAnimating) {
			return style;
		}
		return {
			...style,
			transitionDuration: `0.02s`,
		};
	};

	return (
		<Draggable draggableId={card.id} index={index}>
			{(provided, snapshot) => (
				<div
					className={classNames(
						cl.card,
						card.isArchived ? cl.archived : ""
					)}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					style={getStyle(provided.draggableProps.style, snapshot)}
				>
					<div className={cl.card__inner}>
						<h3 className={cl.card__title}>{card.title}</h3>
						<MyButton
							className={cl.card__btn}
							onClick={() => archiveCard({ id: card.id })}
						>
							{card.isArchived ? (
								<div className={cl.iconContainer}>
									<TiArrowBack
										className={classNames(
											cl.icon,
											cl.icon_return
										)}
									/>
									<MyButton
										onClick={() =>
											removeCard({
												id: card.id,
												listID: card.listID,
											})
										}
									>
										<MdDelete
											className={classNames(
												cl.icon,
												cl.icon_remove
											)}
										/>
									</MyButton>
								</div>
							) : (
								<MdDone
									className={classNames(
										cl.icon,
										cl.icon_archive
									)}
								/>
							)}
						</MyButton>
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default Card;
