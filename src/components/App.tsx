import * as React from "react";
import NavBar from "components/NavBar";
import LoginService from "services/LoginService";
import {browserHistory} from "react-router";

interface AppProps {

}

interface AppState {
	user:string;
}

export default class App extends React.Component<AppProps, AppState>
{
	state:AppState;

	constructor(props:AppProps)
	{
		super(props);
		this.state = {
			user: ""
		}
	}

	componentDidMount() {
		LoginService.isAuthenticated().then((result:boolean) => {
			if(!result)
				browserHistory.push("login");
			else {
				LoginService.getUser().then((user:string) => {
					this.setState({user});
				});
			}
		});
	}

	render() {
		return (
			<div style={{width: "100%", height: "100%"}}>
				<NavBar/>
				Hello {this.state.user}
				{this.props.children}
				<div style={{margin: 50}}></div>
			</div>
		);
	}
}