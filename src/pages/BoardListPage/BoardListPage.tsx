import React, { FC } from "react";
import BoardForm from "../../components/BoardForm/BoardForm";
import BoardList from "../../components/BoardList/BoardList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import cl from "./BoardListPage.module.scss";

const BoardListPage: FC = () => {
	const { boards } = useTypedSelector((state) => state.boardItem);

	return (
		<div className={cl.boardListPage}>
			<div className={[cl.row, cl.row_form].join(" ")}>
				<BoardForm />
			</div>
			{boards.length > 0 && (
				<div className={[cl.row, cl.row_boards].join(" ")}>
					<div className={cl.row__title}>Your boards</div>
					<BoardList boards={boards} />
				</div>
			)}
		</div>
	);
};

export default BoardListPage;
