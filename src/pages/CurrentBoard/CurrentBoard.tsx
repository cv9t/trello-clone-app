import React, { FC } from "react";
import { useParams } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IBoard } from "../../types/board";
import cl from "./CurrentBoard.module.scss";
import ReturnButton from "../../components/UI/button/ReturnButton/ReturnButton.module";
import { useActions } from "../../hooks/useActions";
import ListForm from "../../components/ListForm/ListForm";
import Lists from "../../components/Lists/Lists";

interface CurrentBoardParams {
	id: string;
}

const CurrentBoard: FC = () => {
	const { id } = useParams<CurrentBoardParams>();
	const { boards } = useTypedSelector((state) => state.board);
	const { submitFormCancel } = useActions();
	const currentBoard: IBoard = boards[id];

	if (!currentBoard) {
		return <h1>Board is not found</h1>;
	}

	return (
		<div className={cl.container}>
			<div className={cl.currentBoard}>
				<div className={cl.currentBoard__nav}>
					<ReturnButton
						url="/boards/"
						onClick={() => submitFormCancel()}
					>
						{currentBoard.title}
					</ReturnButton>
				</div>
				<div className={cl.currentBoard__lists}>
					<Lists
						listIDs={currentBoard.lists}
						boardID={currentBoard.id}
					/>
					<ListForm boardID={currentBoard.id} />
				</div>
			</div>
		</div>
	);
};

export default CurrentBoard;
