import * as React from "react";
import * as _ from "lodash";
import classNames from "modules/classnames";

export interface BoxProps<T> extends React.HTMLProps<T>
{
	flex?:number;
	overflow?:boolean;
	padded?:boolean;
}

export default class Box<T>
{
	static renderBox<T>(props:BoxProps<T>, options:{flexDirection:string, unpaddedClassName:string, paddedClassName:string}):JSX.Element
	{
		var attributes:React.HTMLAttributes = _.omit(props, 'padded', 'overflow', 'flex');
		var style:React.CSSProperties = _.merge(
			{
				display: "flex",
			},
			props.style,
			{
				flexDirection: options.flexDirection,
				overflow: props.overflow ? "auto" : ""
			}
		);
		var className:string = classNames(
			props.padded ? options.paddedClassName : options.unpaddedClassName,
			props.className
		);
		return <div {...attributes} style={style} className={className}/>;
	}
}