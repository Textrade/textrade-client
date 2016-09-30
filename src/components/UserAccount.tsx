import * as React from "react";
import VBox from "components/ui/VBox";

interface UserAccountProps extends React.HTMLProps<UserAccount>
{

}

interface UserAccountState
{

}

export default class UserAccount extends React.Component<UserAccountProps, UserAccountState>
{
	render()
	{
		return (
			<VBox flex={1}>
				Account Page
			</VBox>
		);
	}
}