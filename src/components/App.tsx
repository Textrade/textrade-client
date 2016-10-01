import * as React from "react";
import NavBar from "components/NavBar";
import LoginService from "services/LoginService";

interface AppProps {

}

interface AppState {

}

export default class App extends React.Component<AppProps, AppState>
{
	componentDidMount() {

	}

	render() {
		return (
			<div>
				<NavBar/>
				{this.props.children}
			</div>
		);
	}
}