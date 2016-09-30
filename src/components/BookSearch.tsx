import * as React from "react";
import VBox from "components/ui/VBox";

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