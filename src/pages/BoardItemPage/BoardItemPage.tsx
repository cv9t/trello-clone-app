import React, { FC } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IoReturnUpBack } from "react-icons/io5";
import cl from "./BoardItemPage.module.scss";
import MyButton from "../../components/UI/button/MyButton";
import { useActions } from "../../hooks/useActions";
import CardForm from "../../components/CardForm/CardForm";
import CardList from "../../components/CardList/CardList";
import { IBoardItem } from "../../types/boardItem";

interface BoardItemPageParams {
	id: string;
}

const BoardItemPage: FC = () => {
	const { id } = useParams<BoardItemPageParams>();
	const { boards } = useTypedSelector((state) => state.boardItem);
	const { submitFormCancel } = useActions();
	const board: IBoardItem = boards.find((board) => board.id === id) || {
		id: "",
		title: "",
		cards: [],
	};
	const history = useHistory();

	const returnBack = () => {
		history.push("/boards");
		submitFormCancel();
	};

	return (
		<div className={cl.boardItemPage}>
			<div className={cl.boardItemPage__col}>
				<MyButton title={board.title} onClick={returnBack}>
					<IoReturnUpBack />
				</MyButton>
			</div>
			<div className={cl.boardItemPage__col}>
				<CardForm parentID={board.id} />
				<CardList board={board} />
			</div>
		</div>
	);
};

export default BoardItemPage;
