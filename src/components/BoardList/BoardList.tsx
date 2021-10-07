import React, { FC } from "react";
import { IBoardItem } from "../../types/boardItem";
import BoardItem from "../BoardItem/BoardItem";
import cl from "./BoardList.module.scss";

interface BoardListProps {
	boards: IBoardItem[];

	onRemoveClick: (id: string) => void;
}

const BoardList: FC<BoardListProps> = ({ onRemoveClick, boards }) => {
	return (
		<div className={cl.boardList}>
			{boards.length > 0 &&
				boards.map((board) => (
					<BoardItem
						key={board.id}
						id={board.id}
						title={board.title}
						onRemoveClick={() => onRemoveClick(board.id)}
					/>
				))}
		</div>
	);
};

export default BoardList;
