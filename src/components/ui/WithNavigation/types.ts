import React from "react";

export type Setting = {
	id: number;
	label: string;
	icon: string;
	path: string;
	children: Setting[];
};

export type MouseEnterHandlerType = (id: number) => void;

export type MouseMoveHandlerType = (event: React.MouseEvent<HTMLElement>) => void;