import React, { FC, FormEvent, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
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
	index: number;
}

const ListItem: FC<ListItemProps> = ({
	listID,
	title,
	boardID,
	cardIDs,
	index,
}) => {
	const { cards } = useTypedSelector((state) => state.card);
	const { removeList, submitFormSuccess, addCard } = useActions();
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

	function getStyle(style, snapshot) {
		if (!snapshot.isDropAnimating) {
			return style;
		}
		return {
			...style,
			transitionDuration: `0.001s`,
		};
	}

	return (
		<div className={cl.wrapper}>
			<Draggable draggableId={listID} index={index}>
				{(provided, snapshot) => (
					<div
						className={cl.listItem}
						{...provided.draggableProps}
						ref={provided.innerRef}
						{...provided.dragHandleProps}
						style={getStyle(
							provided.draggableProps.style,
							snapshot
						)}
					>
						<Droppable droppableId={listID} type="card">
							{(provided) => (
								<div className={cl.listItem__inner}>
									<div className={cl.listItem__header}>
										<h3 className={cl.listItem__title}>
											{title}
										</h3>
										<TiDelete
											className={cl.listItem__icon}
											onClick={() =>
												removeList({ boardID, listID })
											}
										/>
									</div>
									<div className={cl.listItem__body}>
										<div
											className={cl.listItem__cards}
											{...provided.droppableProps}
											ref={provided.innerRef}
										>
											{cardIDs.length > 0 &&
												cardIDs.map(
													(cardID: string, index) => {
														const card =
															cards[cardID];
														if (card)
															return (
																<Card
																	key={
																		card.id
																	}
																	listID={
																		card.listID
																	}
																	cardID={
																		card.id
																	}
																	title={
																		card.title
																	}
																	index={
																		index
																	}
																/>
															);
													}
												)}
											{provided.placeholder}
											<form
												className={cl.listItem__form}
												onSubmit={handleFormSubmit}
											>
												<MyInput
													className={
														isError
															? [
																	cl.listItem__input,
																	cl.error,
															  ].join(" ")
															: cl.listItem__input
													}
													value={inputValue}
													onChange={setInputValue}
												/>
											</form>
										</div>
									</div>
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
