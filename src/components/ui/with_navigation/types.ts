import React from "react";
import * as Icons from "@mui/icons-material";

export type Setting = {
  id: number;
  label: string;
  icon?: keyof typeof Icons;
  path: string;
  children: Setting[];
};

export type MouseEnterHandlerType = (id: number) => void;

export type MouseMoveHandlerType = (event: React.MouseEvent<HTMLElement>) => void;