import TextradeService from "services/TextradeService";
import {APIResult} from "services/TextradeService";
import {SuccessResult} from "services/TextradeService";

export interface UserInfo {
	username?: string;
	first_name?:string;
	last_name?:string;
	email?: string;
	profile_pic_url?: string;
}

export interface UserResult extends APIResult {
	content: UserInfo;
}

export default class UserService {
	public static authenticate(username:string, password:string):Promise<SuccessResult> {
		// api call to login service.
		return TextradeService.post("users/auth", {username, password});
	}

	public static getUser(username:string):Promise<UserResult> {
		// api call to login service.
		return TextradeService.get("users/?q=" + username);
	}

	public static updateUser(username:string, newInfo:UserInfo):Promise<SuccessResult> {
		return TextradeService.update("users", {username, ...newInfo});
	}

	public static updatePassword(username:string, password:string):Promise<SuccessResult> {
		return TextradeService.put("users", {username, password})
	}
}