import TextradeService from "services/TextradeService";
import {APIResult} from "services/TextradeService";

export interface User {
	username: string;
	first_name:string;
	last_name:string;
	email: string;
	profile_pic_url: string;
}

export interface AuthenticationResult extends APIResult {
	content: boolean;
}

export default class UserService {
	public static authenticate(username:string, password:string):Promise<AuthenticationResult> {
		// api call to login service.
		return TextradeService.post("users/auth", {username, password});
	}
}