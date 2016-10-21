import * as React from "react";
import VBox from "components/ui/VBox";
import HBox from "components/ui/HBox";
import UserService from "services/UserService";
import { Link, browserHistory } from "react-router";
import {AuthenticationResult} from "services/UserService";

interface LoginState {
	errorMessage?:string;
}

interface LoginProps {
}

export default class Login extends React.Component<LoginProps, LoginState>{

	userNameInput:HTMLInputElement;
	passwordInput:HTMLInputElement;

	constructor(props:LoginProps) {
		super(props);
		this.state = {
			errorMessage: ""
		}
	}

	handleLogin=(event:React.FormEvent)=> {
		event.preventDefault();
		var username = this.userNameInput.value;
		var password = this.passwordInput.value;
		UserService.authenticate(username, password).then((result:AuthenticationResult) => {
			var authenticated = result.content;
			if(authenticated)
			{
				browserHistory.push("/account");
			} else {
				this.setState({
					errorMessage: "Invalid username or password."
				});
			}
		}, function(e:Error) {
			console.error("Error attempting to log into the server.", e);
		});
	};

	render() {
		return (
			<VBox className="textrade-login" style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
				{
					this.props.children ||
					<VBox className="textrade-login-dialog" style={{width: 350, height: 450, padding: 20, justifyContent: "space-between"}}>
						<VBox className="textrade-login-dialog-logo" >
							<Link to="/">
								<img src="/img/textrade-login-dialog-logo.png" style={{width: "100%"}}/>
							</Link>
						</VBox>
						<form onSubmit={this.handleLogin}>
							<VBox>
								{this.state.errorMessage ? <span className="textrade-login-error-message">{this.state.errorMessage}</span> : null}
								<input className="textrade-login-input" ref={(e:HTMLInputElement) => this.userNameInput = e} type="text" placeholder="username"/>
								<input className="textrade-login-input" ref={(e:HTMLInputElement) => this.passwordInput = e} type="password" placeholder="password"/>
								<button type="submit" className="btn btn-default textrade-login-button">
									Login
								</button>
								<HBox style={{justifyContent: "center"}} className="textrade-login-links">
									<Link to="login/register">Create an Account</Link>
									<span>{"\u00a0 | \u00a0"}</span>
									<Link to="login/forgotpassword">Forgot Password</Link>
								</HBox>
							</VBox>
						</form>
					</VBox>
				}
			</VBox>
		);
	}
}
