import React, { FC, FormEvent, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { validate } from "../../utils/validate";
import List from "../List";
import MyInput from "../UI/input/MyInput";
import cl from "./LIstItem.module.scss";

interface ListItemProps {
	listID: string;
	title: string;
	boardID: string;
	cardIDs: string[];
}

const ListItem: FC<ListItemProps> = ({ listID, title, boardID, cardIDs }) => {
	const { cards } = useTypedSelector((state) => state.card);
	const { removeList, submitFormSuccess, addCard } = useActions();
	const [inputValue, setInputValue] = useState("");
	const [isError, setIsError] = useState(false);

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		if (validate(inputValue)) {
			addCard({
				boardID,
				listID,
				id: String(Date.now()),
				title: inputValue,
			});
			submitFormSuccess();
			setInputValue("");
		} else {
			setIsError(true);
			setTimeout(() => setIsError(false), 1000);
		}

		event.preventDefault();
	};

	return (
		<div className={cl.listItem}>
			<div className={cl.listItem__inner}>
				<div className={cl.listItem__header}>
					<div className={cl.listItem__title}>{title}</div>
					<TiDelete
						className={cl.listItem__icon}
						onClick={() => removeList({ boardID, listID })}
					/>
				</div>
				<div className={cl.listItem__body}>
					<form
						className={cl.listItem__form}
						onSubmit={handleFormSubmit}
					>
						<MyInput
							className={
								isError
									? [cl.listItem__input, cl.error].join(" ")
									: cl.listItem__input
							}
							value={inputValue}
							onChange={setInputValue}
						/>
					</form>
				</div>
				{cardIDs.length > 0 && (
					<List
						items={cardIDs}
						renderItem={(cardID: string) => {
							const card = cards[cardID];
							if (card)
								return <div key={cardID}>{card.title}</div>;
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default ListItem;
