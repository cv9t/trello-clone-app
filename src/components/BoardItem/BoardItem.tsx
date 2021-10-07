import React, { FC } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import cl from "./BoardItem.module.scss";

export interface BoardItemProps {
	id: string;
	title: string;

	onEditDblClick: () => void;
	onRemoveClick: () => void;
}

const BoardItem: FC<BoardItemProps> = ({
	id,
	title,
	//onEditDblClick,
	onRemoveClick,
}) => {
	//let timer: any;
	//const delay = 200;
	//let prevent = false;

	//const handleCLick = (e: MouseEvent) => {
	//	const target = e.target as HTMLLinkElement;
	//	const href = target.getAttribute("href");

	//	timer = setTimeout(() => {
	//		if (!prevent) {
	//			window.location.href = href;
	//		}

	//		prevent = false;
	//	}, delay);

	//	e.preventDefault();
	//};

	//const handleDblClick = (e: MouseEvent) => {
	//	clearTimeout(timer);
	//	prevent = true;
	//	console.log("dbl");
	//	e.preventDefault();
	//};

	return (
		<div className={cl.boardItem}>
			<NavLink
				className={[cl.boardItem__link, cl.boardItem__title].join(" ")}
				to={"/boards/" + id}
				//onClick={() => console.log}
			>
				{title}
			</NavLink>
			<button className={cl.boardItem__btn} onClick={onRemoveClick}>
				<RiDeleteBin2Line className={cl.boardItem__icon} />
			</button>
		</div>
	);
};

export default BoardItem;
