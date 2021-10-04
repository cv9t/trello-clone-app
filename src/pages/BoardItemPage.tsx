import React, { FC } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface BoardItemPageParams {
	id: string;
}

const BoardItemPage: FC = () => {
	const { id } = useParams<BoardItemPageParams>();
	const { boards } = useTypedSelector((state) => state.boardItem);
	const board = boards.find((board) => board.id === id);
	const history = useHistory();

	return (
		<div>
			<div>{board?.title}</div>
			<button onClick={() => history.push("/boards")}> Back </button>
		</div>
	);
};

export default BoardItemPage;
