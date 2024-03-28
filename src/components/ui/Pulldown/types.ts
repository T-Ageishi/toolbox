import React from "react";

//@@todo html一般の型定義は別ファイルにまとめるとか
export type LabelProps = React.ComponentPropsWithoutRef<'label'>
export type SelectProps = React.ComponentPropsWithoutRef<'select'>;
export type OptionProps = React.ComponentPropsWithoutRef<'option'>;