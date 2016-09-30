import * as React from "react";
import HBox from "components/ui/HBox";

interface NavBarProps extends React.HTMLProps<NavBar>
{

}

interface NavBarState
{

}

export default class NavBar extends React.Component<NavBarProps, NavBarState>
{

	render()
	{
		return (
			<HBox className="textrade-navbar" style={{width: "100%", height: 65}}>
				Welcome To Textrade
			</HBox>
		);
	}
}