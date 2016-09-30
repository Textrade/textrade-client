import * as React from "react";
import * as _ from "lodash";
import classNames from "modules/classnames";

export default class Label extends React.Component<React.HTMLProps<Label>, {}>
{
	render():JSX.Element
	{
		var style = _.merge(
			{
				overflow: "hidden",
				textOverflow: "ellipsis"
			},
			this.props.style
		);
		var className:string = classNames('textrade-label', this.props.className);
		return <label {...this.props as React.HTMLAttributes} style={style} className={className}/>
	}
}
