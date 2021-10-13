import BoardItem from "../pages/BoardItem";
import Boards from "../pages/Boards/Boards";
import { IRoute } from "../types/route";

export const routes: IRoute[] = [
	{ path: "/boards", component: Boards, exact: true },
	{ path: "/boards/:id", component: BoardItem, exact: true },
];
