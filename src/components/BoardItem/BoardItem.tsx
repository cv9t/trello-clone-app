import React, { FC } from "react";

export interface BoardItemProps {
	title: string;
}

const BoardItem: FC<BoardItemProps> = ({ title }) => {
	return <div>{title}</div>;
};

export default BoardItem;
