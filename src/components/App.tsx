import * as React from "react";
import NavBar from "components/NavBar";

interface AppProps
{

}

interface AppState
{

}

export default class App extends React.Component<AppProps, AppState>
{
	render()
	{
		return (
			<div>
				<NavBar/>
				{this.props.children}
			</div>
		);
	}
}