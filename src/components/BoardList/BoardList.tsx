import React, { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import BoardForm from "../BoardForm/BoardForm";
import BoardItem from "../BoardItem/BoardItem";
import cl from "./BoardList.module.scss";

const BoardList: FC = () => {
	const { isFormOpen } = useTypedSelector((state) => state.formBoard);
	const { boards } = useTypedSelector((state) => state.boardItem);
	const { openFormBoard, closeFormBoard, removeBoard } = useActions();
	return (
		<div className={cl.boardList}>
			{isFormOpen ? (
				<BoardForm closeFormBoard={() => closeFormBoard()} />
			) : (
				<button
					className={cl.boardList__btn}
					onClick={() => openFormBoard()}
				>
					Create a new board...
				</button>
			)}
			<div className={cl.boardList__container}>
				{boards.length > 0
					? boards.map((board) => (
							<BoardItem
								key={board.id}
								id={board.id}
								title={board.title}
								onRemoveClick={() => removeBoard(board.id)}
							/>
					  ))
					: ""}
			</div>
		</div>
	);
};

export default BoardList;
