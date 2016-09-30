import * as React from "react";
import Box, {BoxProps} from "components/ui/Box";

export default class VBox extends React.Component<BoxProps<VBox>, {}>
{
	static options = {
		flexDirection: 'column',
		unpaddedClassName: 'textrade-vbox',
		paddedClassName: 'textrade-padded-vbox'
	};

	render():JSX.Element
	{
		return Box.renderBox(this.props, VBox.options);
	}
}