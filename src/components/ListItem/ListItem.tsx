import React, { FC, FormEvent, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { TiDelete } from "react-icons/ti";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { validate } from "../../utils/validate";
import Card from "../Card/Card";
import MyInput from "../UI/input/MyInput";
import cl from "./LIstItem.module.scss";

interface ListItemProps {
	listID: string;
	title: string;
	boardID: string;
	cardIDs: string[];
}

const ListItem: FC<ListItemProps> = ({ listID, title, boardID, cardIDs }) => {
	const { cards } = useTypedSelector((state) => state.card);
	const { removeList, submitFormSuccess, addCard, dragAndDrop } =
		useActions();
	const [inputValue, setInputValue] = useState("");
	const [isError, setIsError] = useState(false);

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		if (validate(inputValue)) {
			addCard({
				boardID,
				listID,
				id: String(Date.now()),
				title: inputValue,
			});
			submitFormSuccess();
			setInputValue("");
		} else {
			setIsError(true);
			setTimeout(() => setIsError(false), 1000);
		}

		event.preventDefault();
	};

	const handleOnDragEnd = (result: any) => {
		if (!result.destination) return;

		console.log(result);

		const { destination, source } = result;

		dragAndDrop({
			droppableIdStart: source.droppableId,
			droppableIdEnd: destination.droppableId,
			droppableIndexStart: source.index,
			droppableIndexEnd: destination.index,
		});
	};

	return (
		<div className={cl.listItem}>
			<div className={cl.listItem__inner}>
				<div className={cl.listItem__header}>
					<h3 className={cl.listItem__title}>{title}</h3>
					<TiDelete
						className={cl.listItem__icon}
						onClick={() => removeList({ boardID, listID })}
					/>
				</div>
				<div className={cl.listItem__body}>
					<form
						className={cl.listItem__form}
						onSubmit={handleFormSubmit}
					>
						<MyInput
							className={
								isError
									? [cl.listItem__input, cl.error].join(" ")
									: cl.listItem__input
							}
							value={inputValue}
							onChange={setInputValue}
						/>
					</form>
				</div>
				{cardIDs.length > 0 && (
					<DragDropContext onDragEnd={handleOnDragEnd}>
						<Droppable droppableId={listID}>
							{(provided) => (
								<ul
									className={cl.list}
									{...provided.droppableProps}
									ref={provided.innerRef}
								>
									{cardIDs.map((cardID: string, index) => {
										const card = cards[cardID];
										if (card)
											return (
												<Draggable
													key={cardID}
													draggableId={cardID}
													index={index}
												>
													{(provided) => (
														<li
															className={
																cl.list__item
															}
															ref={
																provided.innerRef
															}
															{...provided.draggableProps}
															{...provided.dragHandleProps}
														>
															<Card
																cardID={card.id}
																listID={
																	card.listID
																}
																title={
																	card.title
																}
															/>
														</li>
													)}
												</Draggable>
											);
									})}
									{provided.placeholder}
								</ul>
							)}
						</Droppable>
					</DragDropContext>
				)}
			</div>
		</div>
	);
};

export default ListItem;
