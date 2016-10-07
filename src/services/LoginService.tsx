import * as $ from "jquery";

export const GET = "GET";
export const POST = "POST";
export const LoginServiceURL = "http://localhost:5000/api/v1/users/auth";

interface HTTPResponse<T> {
	content:T;
	msg:string;
	status:number;
}

export default class LoginService {
	public static authenticate(username:string, password:string) {
		// api call to login service.
		return new Promise<boolean>(function(resolve:(bool:boolean)=>void, reject:(error:string)=>void) {
			$.ajax({
				url: LoginServiceURL,
				method: POST,
				data: { username, password },
				success: function(response:HTTPResponse<boolean>) {
					resolve(response.content);
				},
				error: function(qXHR: JQueryXHR, textStatus: string, errorThrown: string) {
					reject(errorThrown);
				},
				dataType: "json"
			});
		});
	}

	public static isAuthenticated() {
		// api call to login service.
		return new Promise<boolean>(function(resolve:(bool:boolean)=>void, reject?:(error:string)=>void) {
			setTimeout(function() {
				resolve(true);
			}, 1000);
		});
	}

	public static getUser() {
		// api call to login service.
		return new Promise<string>(function(resolve:(user:string)=>void, reject?:(error:string)=>void) {
			setTimeout(function() {
				resolve("Paul");
			}, 1000);
		});
	}
}