import Dispatcher from "dispatcher/Dispatcher";
import {Weave} from "weavejs"
import LinkableString = weavejs.core.LinkableString;
import LinkableVariable = weavejs.core.LinkableVariable;

class IUser {
	username:string;
	first_name:string;
	last_name:string;
	joined:Date;
	university_email:string;
}

class User {
	first_name = Weave.linkableChild(this, LinkableString);
	last_name = Weave.linkableChild(this, LinkableString);
	username = Weave.linkableChild(this, LinkableString);
	joined = Weave.linkableChild(this, LinkableVariable);
	university_email = Weave.linkableChild(this, LinkableString)
}
Weave.registerClass(User, "User");

class UserStore {

	user = Weave.linkableChild(this, User, this.handleUser);

	handleUser() {

	}

	getUser():IUser {
		return {
			first_name: this.user.first_name.value,
			last_name: this.user.last_name.value,
			username: this.user.username.value,
			joined: this.user.joined.getSessionState() as Date,
			university_email: this.user.university_email.value
		}
	}
}

Weave.registerClass(UserStore, "UserStore");
export default Dispatcher.root.requestObject("UserStore", UserStore, true);