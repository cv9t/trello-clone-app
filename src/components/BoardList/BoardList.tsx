import React, { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import BoardForm from "../BoardForm/BoardForm";
import BoardItem from "../BoardItem/BoardItem";
import MyButton from "../UI/button/MyButton";
import cl from "./BoardList.module.scss";

interface BoardListProps {
	title: string;
}

const BoardList: FC<BoardListProps> = ({ title }) => {
	const { isFormOpen } = useTypedSelector((state) => state.formBoard);
	const { boards } = useTypedSelector((state) => state.boardItem);
	const { openFormBoard, closeFormBoard, removeBoard } = useActions();

	return (
		<div className={cl.boardList}>
			{isFormOpen ? (
				<BoardForm closeFormBoard={() => closeFormBoard()} />
			) : (
				<MyButton onClick={() => openFormBoard()}>{title}</MyButton>
			)}

			{boards.length > 0
				? boards.map((board) => (
						<div key={board.id}>
							<BoardItem
								title={board.title}
								removeItem={() => removeBoard(board.id)}
							/>
						</div>
				  ))
				: ""}
		</div>
	);
};

export default BoardList;
