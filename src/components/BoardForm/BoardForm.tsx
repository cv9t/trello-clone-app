import React, { FC } from "react";
import { VscChromeClose } from "react-icons/vsc";
import cl from "./BoardForm.module.scss";

interface IBoardForm {
	onClick: () => void;
}

const BoardForm: FC<IBoardForm> = ({ onClick }) => {
	return (
		<form className={cl.boardForm}>
			<div className={cl.boardForm__header}>
				<div className={cl.boardForm__title}>Creating board</div>
				<button onClick={onClick} className="clean-btn">
					<VscChromeClose className={cl.boardForm__icon} />
				</button>
			</div>
			<div className={cl.boardForm__body}>
				<label htmlFor="boardFormInput" className={cl.boardForm__label}>
					Board name
				</label>
				<input id="boardFormInput" className={cl.boardForm__input} />
			</div>
			<div className={cl.boardForm__footer}>
				<button className={cl.boardForm__btn}>Create</button>
			</div>
		</form>
	);
};

export default BoardForm;
