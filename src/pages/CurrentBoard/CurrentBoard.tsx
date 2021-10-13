import React, { FC } from "react";
import { useParams } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IBoard } from "../../types/board";

import cl from "./CurrentBoard.module.scss";
import ReturnButton from "../../components/UI/button/ReturnButton/ReturnButton.module";

interface CurrentBoardParams {
	id: string;
}

const CurrentBoard: FC = () => {
	const { id } = useParams<CurrentBoardParams>();
	const { boards } = useTypedSelector((state) => state.board);
	const currentBoard: IBoard = boards[id];

	return (
		<div className={cl.currentBoard}>
			<div className={cl.currentBoard__col}>
				<ReturnButton
					url="/boards/"
					title={currentBoard?.title}
					onClick={() => console.log(1)}
				/>
			</div>
			<div className={cl.currentBoard__col}></div>
		</div>
	);
};

export default CurrentBoard;
