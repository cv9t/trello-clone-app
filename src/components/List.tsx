import React from "react";

interface ListProps<T> {
	items: T[];
	className?: string;
	renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
	return (
		<div className={props.className}>
			{props.items.map(props.renderItem)}
		</div>
	);
}
