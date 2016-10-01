export default class LoginService {
	public static authenticate(user:string, password:string) {
		// api call to login service.
		return new Promise<boolean>(function(resolve:(bool:boolean)=>void, reject:(error:Error)=>void) {
			setTimeout(function() {
				if(!user && !password) {
					resolve(false);
				} else {
					resolve(true);
				}
			}, 1000)
		})	;
	}
}