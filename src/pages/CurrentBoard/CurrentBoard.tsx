import React, { FC } from "react";
import { useParams } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IBoard } from "../../types/board";

import cl from "./CurrentBoard.module.scss";
import ReturnButton from "../../components/UI/button/ReturnButton/ReturnButton.module";
import { useActions } from "../../hooks/useActions";
import ListForm from "../../components/ListForm/ListForm";

interface CurrentBoardParams {
	id: string;
}

const CurrentBoard: FC = () => {
	const { id } = useParams<CurrentBoardParams>();
	const { boards } = useTypedSelector((state) => state.board);
	const { submitFormCancel } = useActions();
	const currentBoard: IBoard = boards?.[id];

	if (!currentBoard) {
		return <h1>Board is not found</h1>;
	}

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
		</div>
	);
};

export default CurrentBoard;
