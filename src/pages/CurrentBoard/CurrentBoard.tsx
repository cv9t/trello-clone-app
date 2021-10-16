import React, { FC } from "react";
import { useParams } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IBoard } from "../../types/board";
import cl from "./CurrentBoard.module.scss";
import ReturnButton from "../../components/UI/button/ReturnButton/ReturnButton.module";
import { useActions } from "../../hooks/useActions";
import ListForm from "../../components/ListForm/ListForm";
import ListItem from "../../components/ListItem/ListItem";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

interface CurrentBoardParams {
	id: string;
}

const CurrentBoard: FC = () => {
	const { id } = useParams<CurrentBoardParams>();
	const { boards } = useTypedSelector((state) => state.board);
	const { lists } = useTypedSelector((state) => state.list);
	const { submitFormCancel, dragAndDrop } = useActions();
	const currentBoard: IBoard = boards?.[id];

	if (!currentBoard) {
		return <h1>Board is not found</h1>;
	}

	const listIDs: string[] = currentBoard.lists;

	const handleOnDragEnd = (result: DropResult) => {
		if (!result.destination) return;

		const { destination, source, draggableId, type } = result;

		dragAndDrop({
			droppableIdStart: source.droppableId,
			droppableIdEnd: destination.droppableId,
			droppableIndexStart: source.index,
			droppableIndexEnd: destination.index,
			draggableId,
			type,
			boardID: id,
		});
	};

	return (
		<div className={cl.currentBoard}>
			<div className={cl.currentBoard__col}>
				<ReturnButton
					url="/boards/"
					title={currentBoard.title}
					onClick={() => submitFormCancel()}
				/>
			</div>
			<div className={cl.currentBoard__col}>
				<ListForm boardID={currentBoard.id} />
			</div>
			<div className={cl.currentBoard__col}>
				<DragDropContext onDragEnd={handleOnDragEnd}>
					<Droppable
						droppableId="lists"
						type="list"
						direction="horizontal"
					>
						{(provided) => (
							<div
								className={cl.currentBoard__list}
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{listIDs.length > 0 &&
									listIDs.map(
										(listID: string, index: number) => {
											const list = lists[listID];
											if (list)
												return (
													<ListItem
														key={listID}
														listID={list.id}
														cardIDs={list.cards}
														boardID={list.boardID}
														title={list.title}
														index={index}
													/>
												);
										}
									)}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
		</div>
	);
};

export default CurrentBoard;
