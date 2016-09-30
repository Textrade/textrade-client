import * as React from "react";
import Box, {BoxProps} from "components/ui/Box";
import classNames from "modules/classnames";

export default class Section extends React.Component<BoxProps<Section>, {}>
{
	static options = {
		flexDirection: "column",
		unpaddedClassName: classNames('textrade-section', 'textrade-vbox'),
		paddedClassName: classNames('textrade-section', 'textrade-padded-vbox')
	};

	render():JSX.Element
	{
		return Box.renderBox(this.props, Section.options);
	}
}