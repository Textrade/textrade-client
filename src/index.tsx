import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory } from 'react-router'
import $ from "modules/jquery";
import App from "components/App";
import NoMatch from "components/NoMatch";
import BookSearch from "components/BookSearch";
import Sell from "components/Sell";
import Buy from "components/Buy";
import UserAccount from "components/UserAccount";

$(function() {
	ReactDOM.render(
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="search" component={BookSearch}/>
				<Route path="sell" component={Sell}/>
				<Route path="buy" component={Buy}/>
				<Route path="account" component={UserAccount}/>
			</Route>
			<Route path="*" component={NoMatch}/>
		</Router>,

		document.getElementById("textrade"));
});
