import * as React from "react";
import * as weavejs from "weavejs";

import VBox = weavejs.ui.flexbox.VBox;

interface BookSearchProps extends React.HTMLProps<BookSearch>
{

}

interface BookSearchState
{

}

export default class BookSearch extends React.Component<BookSearchProps, BookSearchState>
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