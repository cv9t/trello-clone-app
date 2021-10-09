import React, { FC } from "react";
import { IBoardItem } from "../../types/boardItem";
import BoardItem from "../BoardItem/BoardItem";
import cl from "./BoardList.module.scss";

interface BoardListProps {
	boards: IBoardItem[];
}

const BoardList: FC<BoardListProps> = ({ boards }) => {
	return (
		<div className={cl.boardList}>
			{boards.length > 0 &&
				boards.map((board) => (
					<BoardItem
						key={board.id}
						id={board.id}
						title={board.title}
					/>
				))}
		</div>
	);
};

export default BoardList;
