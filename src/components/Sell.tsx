import * as React from "react";
import VBox from "components/ui/VBox";

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