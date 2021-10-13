import React, { FC } from "react";
import BoardForm from "../../components/BoardForm/BoardForm";
import BoardList from "../../components/BoardList/BoardList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import cl from "./Boards.module.scss";

const Boards: FC = () => {
	const { boards } = useTypedSelector((state) => state.board);

	return (
		<div className={cl.boards}>
			<div className={[cl.boards__item, cl.boards__item_form].join(" ")}>
				<BoardForm />
			</div>
			{Object.keys(boards).length > 0 && (
				<div
					className={[cl.boards__item, cl.boards__item_list].join(
						" "
					)}
				>
					<h2 className={cl.boards__title}>Your boards</h2>
					<BoardList boards={Object.entries(boards)} />
				</div>
			)}
		</div>
	);
};

export default Boards;
