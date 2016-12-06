import * as React from "react";
import * as weavejs from "weavejs";

import VBox = weavejs.ui.flexbox.VBox;

interface BuyProps extends React.HTMLProps<Buy>
{

}

interface BuyState
{

}

export default class Buy extends React.Component<BuyProps, BuyState>
{
	render()
	{
		return (
			<VBox flex={1}>
				Buy Page
			</VBox>
		);
	}
}