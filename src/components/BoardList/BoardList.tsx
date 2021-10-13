import React, { FC } from "react";
import { IBoard } from "../../types/board";
import Board from "../Board/Board";
import cl from "./BoardList.module.scss";

interface BoardListProps {
	boards: [string, IBoard][];
}

const BoardList: FC<BoardListProps> = ({ boards }) => {
	return (
		<div className={cl.boardList}>
			{boards.map(([boardID, board]) => (
				<Board key={boardID} id={board.id} title={board.title} />
			))}
		</div>
	);
};

export default BoardList;
