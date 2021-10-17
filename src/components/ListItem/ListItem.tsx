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
import CardForm from "../CardForm/CardForm";
import CardList from "../CardList/CardList";
import cl from "./LIstItem.module.scss";

interface ListItemProps {
	listID: string;
	title: string;
	boardID: string;
	cardIDs: string[];
	index: number;
}

const ListItem: FC<ListItemProps> = ({
	listID,
	title,
	boardID,
	cardIDs,
	index,
}) => {
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
			<Draggable draggableId={listID} index={index}>
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
							<h3 className={cl.listItem__title}>{title}</h3>
							<TiDelete
								className={cl.listItem__icon}
								onClick={() => removeList({ boardID, listID })}
							/>
						</div>
						<Droppable droppableId={listID} type="card">
							{(provided) => (
								<div
									className={cl.listItem__body}
									{...provided.droppableProps}
									ref={provided.innerRef}
								>
									<CardList cardIDs={cardIDs} />
									{provided.placeholder}
									<CardForm
										boardID={boardID}
										listID={listID}
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
