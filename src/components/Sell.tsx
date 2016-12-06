import * as React from "react";
import * as weavejs from "weavejs";
import VBox = weavejs.ui.flexbox.VBox;
import HBox = weavejs.ui.flexbox.HBox;

interface SellProps extends React.HTMLProps<Sell>
{

}

interface SellState
{

}

export default class Sell extends React.Component<SellProps, SellState>
{
	render()
	{
		return (
			<VBox flex={1}>
				Book Search
			</VBox>
		);
	}
}