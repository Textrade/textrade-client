import * as React from "react";
import HBox from "components/ui/HBox";
import {Link} from "react-router";

interface NavBarProps extends React.HTMLProps<NavBar> {

}

interface NavBarState {

}

export default class NavBar extends React.Component<NavBarProps, NavBarState> {
	render() {
		return (
			<HBox className="textrade-navbar" style={{width: "100%", height: 65}}>
				Welcome To Textrade
				<HBox flex={1}>
					<input type="text"/>
					<button>
						search
					</button>
				</HBox>
				<Link to="/login">Login</Link>
			</HBox>
		);
	}
}