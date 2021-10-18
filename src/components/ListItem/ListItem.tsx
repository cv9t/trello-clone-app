import React, { FC } from "react";
import {
	Draggable,
	DraggableStateSnapshot,
	DraggingStyle,
	Droppable,
	NotDraggingStyle,
} from "react-beautiful-dnd";
import { TiDelete } from "react-icons/ti";
import { useActions } from "../../hooks/useActions";
import { IList } from "../../types/list";
import CardForm from "../CardForm/CardForm";
import CardList from "../CardList/CardList";
import cl from "./LIstItem.module.scss";

interface ListItemProps {
	list: IList;
	index: number;
}

const ListItem: FC<ListItemProps> = ({ list, index }) => {
	const { removeList } = useActions();

	const getStyle = (
		style: DraggingStyle | NotDraggingStyle | undefined,
		snapshot: DraggableStateSnapshot
	) => {
		if (!snapshot.isDropAnimating) {
			return style;
		}
		return {
			...style,
			transitionDuration: `0.001s`,
		};
	};

	return (
		<div className={cl.listItem}>
			<Draggable draggableId={list.id} index={index}>
				{(provided, snapshot) => (
					<div
						className={cl.listItem__inner}
						{...provided.draggableProps}
						ref={provided.innerRef}
						{...provided.dragHandleProps}
						style={getStyle(
							provided.draggableProps.style,
							snapshot
						)}
					>
						<div className={cl.listItem__header}>
							<h3 className={cl.listItem__title}>{list.title}</h3>
							<TiDelete
								className={cl.listItem__icon}
								onClick={() =>
									removeList({
										boardID: list.boardID,
										listID: list.id,
									})
								}
							/>
						</div>
						<Droppable droppableId={list.id} type="card">
							{(provided) => (
								<div
									className={cl.listItem__body}
									{...provided.droppableProps}
									ref={provided.innerRef}
								>
									<CardList cardIDs={list.cards} />
									{provided.placeholder}
									<CardForm
										boardID={list.boardID}
										listID={list.id}
									/>
								</div>
							)}
						</Droppable>
					</div>
				)}
			</Draggable>
		</div>
	);
};

export default ListItem;
