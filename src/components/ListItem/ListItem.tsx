import React, { FC } from "react";
import { TiDelete } from "react-icons/ti";
import { useActions } from "../../hooks/useActions";
import { IList } from "../../types/list";
import cl from "./LIstItem.module.scss";

const ListItem: FC<IList> = ({ id, title, boardID }) => {
	const { removeList } = useActions();

	return (
		<div className={cl.listItem}>
			<div className={cl.listItem__inner}>
				<div className={cl.listItem__header}>
					<div className={cl.listItem__title}>{title}</div>
					<TiDelete
						className={cl.listItem__icon}
						onClick={() => removeList({ boardID, id })}
					/>
				</div>
			</div>
		</div>
	);
};

export default ListItem;
