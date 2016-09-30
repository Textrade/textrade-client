import * as React from "react";
import Box, {BoxProps} from "components/ui/Box";

export default class HBox extends React.Component<BoxProps<HBox>, {}>
{
	static options = {
		flexDirection: 'row',
		unpaddedClassName: 'textrade-hbox',
		paddedClassName: 'textrade-padded-hbox'
	};

	render():JSX.Element
	{
		return Box.renderBox(this.props, HBox.options);
	}
}
