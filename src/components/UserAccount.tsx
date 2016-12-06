import * as React from "react";
import * as weavejs from "weavejs";
import VBox = weavejs.ui.flexbox.VBox;
import HBox = weavejs.ui.flexbox.HBox;
import BookService from "services/BookService";
import {BookResult} from "services/BookService";
import {SearchResult} from "services/BookService";

interface UserAccountProps extends React.HTMLProps<UserAccount> {

}

interface UserAccountState {
	books:BookResult[]
}

export default class UserAccount extends React.Component<UserAccountProps, UserAccountState>
{
	input:HTMLInputElement;
	
	constructor(props:UserAccountProps) {
		super(props);
		this.state = {
			books: []
		}
	}

	searchBook=()=> {
		var isbn_or_title = this.input.value;
		BookService.searchBook(isbn_or_title).then((results:SearchResult) => {
			this.setState({
				books: results.content
			});
		});
	}

	render()
	{
		return (
			<VBox flex={1}>
				<input ref={(e:HTMLInputElement) => this.input = e} type="text"></input>
			   	<button onClick={this.searchBook}>Search</button>
				{this.state.books}
			</VBox>
		);
	}
}