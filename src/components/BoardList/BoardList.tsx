import React, { FC, useState } from "react";
import BoardForm from "../BoardForm/BoardForm";
import MyButton from "../UI/button/MyButton";
import cl from "./BoardList.module.scss";

interface BoardListProps {
	title: string;
}

const BoardList: FC<BoardListProps> = ({ title }) => {
	const [isShow, setIsShow] = useState(false);

	return (
		<div className={cl.boardList}>
			{!isShow && (
				<MyButton onClick={() => setIsShow(!isShow)}>{title}</MyButton>
			)}

			{isShow && <BoardForm onClick={() => setIsShow(!isShow)} />}
		</div>
	);
};

export default BoardList;
