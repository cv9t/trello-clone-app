import React, { FC } from "react";
import { useParams } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IBoard } from "../../types/board";
import cl from "./CurrentBoard.module.scss";
import ReturnButton from "../../components/UI/button/ReturnButton/ReturnButton.module";
import { useActions } from "../../hooks/useActions";
import ListForm from "../../components/ListForm/ListForm";
import List from "../../components/List";
import ListItem from "../../components/ListItem/ListItem";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

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

		console.log(result);

		const { destination, source, draggableId } = result;

		dragAndDrop({
			droppableIdStart: source.droppableId,
			droppableIdEnd: destination.droppableId,
			droppableIndexStart: source.index,
			droppableIndexEnd: destination.index,
			draggableID: draggableId,
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
				{listIDs.length > 0 && (
					<DragDropContext onDragEnd={handleOnDragEnd}>
						<List
							items={listIDs}
							className={cl.currentBoard__list}
							renderItem={(listID: string) => {
								const list = lists[listID];
								if (list)
									return (
										<ListItem
											key={listID}
											listID={list.id}
											cardIDs={list.cards}
											boardID={list.boardID}
											title={list.title}
										/>
									);
							}}
						/>
					</DragDropContext>
				)}
			</div>
		</div>
	);
};

export default CurrentBoard;
